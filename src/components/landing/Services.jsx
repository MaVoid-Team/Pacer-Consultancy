import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Ruler, DraftingCompass, HatGlasses, Pickaxe, Zap, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Building2,
        number: "01",
        title: "Architectural Design",
        description: "Innovative and functional architectural solutions that blend aesthetics with practicality.",
    },
    {
        icon: Ruler,
        number: "02",
        title: "Structural Engineering",
        description: "Designing robust and efficient structures, ensuring safety and durability for all project types.",
    },
    {
        icon: Zap,
        number: "03",
        title: "Electro-Mechanical (MEP)",
        description: "Comprehensive MEP engineering services including HVAC, electrical power, and plumbing systems.",
    },
    {
        icon: HatGlasses,
        number: "04",
        title: "Project Management",
        description: "Expert oversight of project lifecycles, ensuring on-time delivery and adherence to quality standards.",
    },
    {
        icon: Pickaxe,
        number: "05",
        title: "Construction Management",
        description: "On-site supervision and management to ensure construction executes exactly as designed.",
    },
    {
        icon: DraftingCompass,
        number: "06",
        title: "Studies & Planning",
        description: "Feasibility studies, master planning, and infrastructure analysis to guide successful developments.",
    }
];

const Services = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Adjusted transform to ensure full scroll without empty space
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <>
            {/* Desktop Horizontal Scroll */}
            <section ref={targetRef} id="services" className="relative hidden md:block h-[180vh] bg-foreground text-background">
                <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

                    {/* Vertical Title Indicator */}
                    <div className="absolute top-10 left-10 z-20 mix-blend-difference">
                        <h2 className="text-lg sm:text-xl font-mono tracking-widest text-primary">// SERVICES</h2>
                    </div>

                    <motion.div style={{ x }} className="flex gap-8 lg:gap-12 px-10 md:px-16 lg:px-24 items-center">

                        {/* Intro Block */}
                        <div className="flex-shrink-0 w-[350px] md:w-[450px] lg:w-[600px] flex flex-col justify-center">
                            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.8] mb-6 md:mb-8 uppercase text-background text-outline-white">
                                Our <br /> Expertise
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl text-background/70 max-w-sm leading-relaxed">
                                Multidisciplinary precision.
                                We blend technical rigor with creative problem-solving.
                            </p>
                        </div>

                        {/* Service Cards */}
                        {services.map((service, index) => (
                            <div key={index} className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[450px] h-[500px] md:h-[550px] relative group">
                                <div className="w-full h-full bg-background/5 border border-background/20 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-between transition-colors duration-500 hover:bg-background hover:text-foreground">

                                    <div>
                                        <div className="flex justify-between items-start mb-8 md:mb-12">
                                            <service.icon className="w-10 md:w-12 h-10 md:h-12 text-primary" />
                                            <span className="font-mono text-4xl md:text-5xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">{service.number}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight group-hover:translate-x-2 transition-transform">{service.title}</h3>
                                        <p className="text-base md:text-lg opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-primary font-bold">
                                        Learn more <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mobile Grid Layout */}
            <section id="services" className="md:hidden bg-foreground text-background py-16 sm:py-20 px-4 sm:px-6">
                <div className="container mx-auto">
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-lg sm:text-xl font-mono tracking-widest text-primary mb-4">// SERVICES</h2>
                        <h2 className="text-4xl sm:text-5xl font-black leading-[0.8] mb-4 uppercase">
                            Our <br /> Expertise
                        </h2>
                        <p className="text-base sm:text-lg text-background/70 leading-relaxed">
                            Multidisciplinary precision. We blend technical rigor with creative problem-solving.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-background/5 border border-background/20 backdrop-blur-sm p-5 sm:p-6 flex flex-col justify-between h-full hover:bg-background hover:text-foreground transition-colors duration-500 group"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6 sm:mb-8">
                                        <service.icon className="w-8 sm:w-10 h-8 sm:h-10 text-primary flex-shrink-0" />
                                        <span className="font-mono text-3xl sm:text-4xl font-bold opacity-30 group-hover:opacity-100 transition-opacity ml-2">{service.number}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">{service.title}</h3>
                                    <p className="text-sm sm:text-base opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-primary font-bold text-sm sm:text-base mt-4">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
