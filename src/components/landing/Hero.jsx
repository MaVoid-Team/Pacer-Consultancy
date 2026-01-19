import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveDown } from "lucide-react";

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", // Abstract Architecture
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop", // Modern Building
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop", // Structural lines
    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2574&auto=format&fit=crop"  // Skyscraper low angle
];

const Hero = ({ startAnimation = false }) => {
    const containerRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000); // Switch every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                // delayChildren: 0.5, // Controlled by startAnimation now
            },
        },
    };

    const itemVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 0.4,
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        },
        exit: {
            scale: 1.1,
            opacity: 0,
            transition: {
                duration: 1.5,
                ease: "easeIn",
            },
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-foreground text-background flex items-center justify-center"
        >
            {/* Background Image Slideshow with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentImageIndex} // Key change triggers animation
                        src={HERO_IMAGES[currentImageIndex]}
                        alt={`Architectural Showcase ${currentImageIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        variants={imageVariants}
                        initial="hidden"
                        animate={startAnimation ? "visible" : "hidden"}
                        exit="exit"
                    />
                </AnimatePresence>
                {/* Permanent Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
            </div>

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                    backgroundSize: "6rem 6rem",
                }}
            />

            {/* Content Container */}
            <motion.div
                className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col justify-center h-full"
                variants={containerVariants}
                initial="hidden"
                animate={startAnimation ? "visible" : "hidden"}
                style={{ y, opacity }}
            >
                <div>
                    <div className="overflow-hidden mb-2">
                        <motion.div variants={itemVariants} className="flex items-center gap-4">
                            <span className="h-px w-12 bg-primary/80"></span>
                            <span className="text-sm md:text-base font-mono tracking-[0.2em] text-primary/80 uppercase">
                                Expertise House — EST. 1950
                            </span>
                        </motion.div>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mix-blend-difference"
                        >
                            PACER
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600"
                        >
                            Consultants
                        </motion.h1>
                    </div>

                    <motion.div variants={itemVariants} className="mt-6 sm:mt-8 max-w-xl">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-background/70 font-light leading-relaxed">
                            To offer our community a better habitat and serve by producing buildings that are practical, intelligent, and sustainable.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6">
                        <Button
                            size="xl"
                            className="h-16 px-10 text-lg rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all border border-transparent hover:border-primary/20"
                        >
                            Explore Our Work
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="default"
                            size="xl"
                            className="h-16 px-10 text-lg rounded-none text-background border-background/20 hover:bg-background/10 hover:text-background backdrop-blur-sm"
                        >
                            Contact Us
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-4 sm:bottom-8 md:bottom-10 right-4 sm:right-8 md:right-10 z-20 flex flex-col items-center gap-2 sm:gap-4 hidden sm:flex"
            >
                <div className="flex flex-col gap-1 sm:gap-2 items-center mb-2 sm:mb-4">
                    {HERO_IMAGES.map((_, idx) => (
                        <motion.div
                            key={idx}
                            animate={{
                                height: idx === currentImageIndex ? 24 : 6,
                                opacity: idx === currentImageIndex ? 1 : 0.3,
                                backgroundColor: idx === currentImageIndex ? "var(--primary)" : "#ffffff"
                            }}
                            className="w-1 rounded-full transition-all duration-500"
                        />
                    ))}
                </div>
                <span className="scrolldown-text font-mono text-xs tracking-widest uppercase rotate-90 origin-right translate-x-3 text-background/50">
                    Scroll Down
                </span>
                <div className="h-12 sm:h-16 w-px bg-linear-to-b from-background/0 via-background/50 to-background/0 overflow-hidden relative">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
