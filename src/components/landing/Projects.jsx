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
        <section id="projects" className="py-24 bg-foreground text-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 opacity-50 skew-x-12 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest uppercase text-sm"
                        >
                            Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mt-2 mb-6"
                        >
                            Selected Works
                        </motion.h2>
                        <div className="h-1 w-24 bg-primary rounded-full"></div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg max-w-md md:text-right"
                    >
                        Swipe to explore our defining work across various sectors.
                    </motion.p>
                </div>

                {/* Circular Gallery Container */}
                <div className="h-[600px] w-full relative">
                    <CircularGallery
                        items={projects}
                        bend={2}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        font="bold 40px Geist, sans-serif"
                    />
                </div>

                <div className="mt-12 flex justify-center">
                    <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-white/90">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
