import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-16 sm:py-24 md:py-32 bg-background relative z-10">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">

                    {/* Typography Col */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8 md:mb-12"
                        >
                            Start <br /> Project
                        </motion.h2>

                        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-md leading-relaxed mb-8 md:mb-12">
                            Ready to engineer the impossible? Tell us about your vision.
                        </p>

                        <div className="flex flex-col gap-6 md:gap-8">
                            <div className="group cursor-pointer">
                                <p className="text-xs sm:text-sm font-mono text-primary mb-1 md:mb-2">EMAIL US</p>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors break-all">projects@pacer-consultants.com</h3>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-xs sm:text-sm font-mono text-primary mb-1 md:mb-2">CALL US</p>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">+2 (02) 3748 4835</h3>
                            </div>
                        </div>
                    </div>

                    {/* Form Col */}
                    <div className="flex items-start lg:items-end">
                        <form className="w-full space-y-6 md:space-y-8">
                            <div className="space-y-2">
                                <label className="text-xs sm:text-sm font-mono tracking-widest uppercase text-muted-foreground">01. Your Name</label>
                                <Input className="border-0 border-b border-input rounded-none px-0 py-4 md:py-6 text-base sm:text-lg md:text-2xl focus-visible:ring-0 focus-visible:border-primary bg-transparent" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs sm:text-sm font-mono tracking-widest uppercase text-muted-foreground">02. Email Address</label>
                                <Input className="border-0 border-b border-input rounded-none px-0 py-4 md:py-6 text-base sm:text-lg md:text-2xl focus-visible:ring-0 focus-visible:border-primary bg-transparent" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs sm:text-sm font-mono tracking-widest uppercase text-muted-foreground">03. Project Details</label>
                                <Textarea className="border-0 border-b border-input rounded-none px-0 py-4 md:py-6 text-base sm:text-lg md:text-xl min-h-[120px] md:min-h-[150px] resize-none focus-visible:ring-0 focus-visible:border-primary bg-transparent" placeholder="Tell us about your project..." />
                            </div>

                            <Button size="lg" className="w-full text-base sm:text-lg md:text-lg h-12 md:h-16 mt-6 md:mt-8 rounded-full">
                                Send Inqury <ArrowRight className="ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
