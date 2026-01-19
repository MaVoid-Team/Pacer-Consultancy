import { motion } from "framer-motion";
import CircularGallery from "@/components/ui/CircularGallery";
import { Button } from "@/components/ui/button";

const projects = [
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        text: "Marassi Marina"
    },
    {
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2544&auto=format&fit=crop",
        text: "Sokhna Basin 2"
    },
    {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
        text: "Apex Pharma"
    },
    {
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop",
        text: "Schneider Electric"
    },
    {
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
        text: "QNB Al Ahli"
    },
    {
        image: "https://images.unsplash.com/photo-1590644004126-f4d045d471b4?q=80&w=2574&auto=format&fit=crop",
        text: "Commercial Complex"
    }
];

const Projects = () => {
    // Add a duplicate of projects to make the loop smoother if needed, or rely on internal logic
    return (
        <section id="projects" className="py-16 sm:py-20 md:py-24 bg-foreground text-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 opacity-50 skew-x-12 pointer-events-none hidden md:block" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm"
                        >
                            Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 md:mt-4 mb-4 md:mb-6"
                        >
                            Selected Works
                        </motion.h2>
                        <div className="h-1 w-16 sm:w-20 bg-primary rounded-full"></div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-base sm:text-lg md:text-lg max-w-md md:text-right"
                    >
                        Swipe to explore our defining work across various sectors.
                    </motion.p>
                </div>

                {/* Circular Gallery Container - Responsive Height */}
                <div className="h-[400px] sm:h-[500px] md:h-[600px] w-full relative">
                    <CircularGallery
                        items={projects}
                        bend={2}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        font="bold 40px Geist, sans-serif"
                    />
                </div>

                <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
                    <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 md:px-10 text-base sm:text-lg rounded-full bg-white text-black hover:bg-white/90">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
