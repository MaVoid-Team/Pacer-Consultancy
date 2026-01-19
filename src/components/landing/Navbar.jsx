import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm"
                    : "bg-transparent border-transparent py-6 text-primary"
            )}
        >
            <div className="container mx-auto px-3 sm:px-4 md:px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <img src="/logo-nobg.png" alt="PACER Consultants Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button>Get a Quote</Button>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[80vw] sm:w-[400px] bg-foreground text-background border-l border-background/20 p-0">
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="border-b border-background/20 px-6 py-6">
                                    <img src="/logo-nobg.png" alt="PACER Consultants Logo" className="h-10 w-auto object-contain" />
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex-1 overflow-y-auto px-6 py-8">
                                    <div className="flex flex-col gap-1">
                                        {navLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="px-4 py-3 rounded-lg text-base font-medium text-background/70 hover:text-background hover:bg-background/10 transition-all duration-200 relative group"
                                            >
                                                <span className="relative">
                                                    {link.name}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </nav>

                                {/* Footer Section */}
                                <div className="border-t border-background/20 px-6 py-6 space-y-4">
                                    <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold">
                                        Get a Quote
                                    </Button>
                                    
                                    <div className="text-center text-xs text-background/50 py-2">
                                        <p>PACER Consultants</p>
                                        <p>© 2026</p>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
