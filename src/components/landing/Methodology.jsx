import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Guaranteed Quality",
        desc: "We are committed to meeting the highest standards in everything we do, with no compromise on quality."
    },
    {
        num: "02",
        title: "On Time Delivery",
        desc: "We respect our client's time. Our project management ensures that deadlines are met without excuse."
    },
    {
        num: "03",
        title: "Experienced Team",
        desc: "We leverage decades of expertise. Our team is our greatest asset, bringing deep knowledge to every challenge."
    },
    {
        num: "04",
        title: "Community Focus",
        desc: "Our mission is to advance our community by creating value, improving habitats, and building sustainably."
    }
]

const Methodology = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <section ref={containerRef} className="relative bg-background text-foreground py-16 sm:py-20 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-12">

                {/* Sticky Left Column */}
                <div className="w-full md:w-1/3">
                    <div className="sticky top-24">
                        <p className="text-primary font-mono tracking-widest mb-3 sm:mb-4 text-xs sm:text-sm">// OUR VALUES</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
                            Built On <br />
                            Principles
                        </h2>
                        <div className="h-[2px] w-full bg-border mt-6 sm:mt-8 relative overflow-hidden">
                            <motion.div
                                style={{ scaleX: scrollYProgress }}
                                className="absolute top-0 left-0 h-full w-full bg-primary origin-left"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column Steps */}
                <div className="w-full md:w-2/3 flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-32 pt-8 sm:pt-12 md:pt-24 pb-12 md:pb-24">
                    {steps.map((step, index) => (
                        <StepCard key={index} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StepCard = ({ step }) => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            className="group"
        >
            <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-muted-foreground/20 group-hover:text-primary transition-colors duration-500 flex-shrink-0">
                    {step.num}
                </span>
                <div className="pt-2 sm:pt-4">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50 group-hover:from-primary group-hover:to-foreground transition-all duration-500">
                        {step.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                        {step.desc}
                    </p>
                </div>
            </div>
            <div className="h-[1px] w-full bg-border mt-8 sm:mt-10 md:mt-12 group-hover:bg-primary/50 transition-colors" />
        </motion.div>
    )
}

export default Methodology;
