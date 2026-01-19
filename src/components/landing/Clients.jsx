import { useRef } from "react";
import {
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Local Wrap Utility
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function MarqueeText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap mb-8 sm:mb-12 md:mb-24 opacity-50 hover:opacity-100 transition-opacity duration-700">
            <motion.div className="font-black uppercase text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter flex whitespace-nowrap text-foreground" style={{ x }}>
                <span className="block mr-4 sm:mr-8 md:mr-12">{children} </span>
                <span className="block mr-4 sm:mr-8 md:mr-12">{children} </span>
                <span className="block mr-4 sm:mr-8 md:mr-12">{children} </span>
                <span className="block mr-4 sm:mr-8 md:mr-12">{children} </span>
            </motion.div>
        </div>
    );
}

const Clients = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-background overflow-hidden">
            {/* Marquee Header */}
            <MarqueeText baseVelocity={1}>Trusted By The Bold — </MarqueeText>
            <div className="h-6 sm:h-8 md:h-12"></div>
            <MarqueeText baseVelocity={-1}>Global Icons — </MarqueeText>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 mt-16 sm:mt-20 md:mt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="border border-border p-6 sm:p-8 md:p-12 relative hover:bg-muted/10 transition-colors"
                    >
                        <Quote className="absolute top-6 sm:top-8 md:top-12 left-6 sm:left-8 md:left-12 text-primary h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 opacity-20 flex-shrink-0" />
                        <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed mb-6 sm:mb-8 relative z-10 pr-2">
                            "They don't just solve engineering problems; they elevate the architectural intent. The Prism Tower wouldn't exist without their daring calculations."
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="h-10 sm:h-12 w-10 sm:w-12 bg-gray-200 rounded-full flex-shrink-0" />
                            <div className="min-w-0">
                                <h4 className="font-bold text-sm sm:text-base md:text-lg truncate">Elena V.</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest truncate">Lead Architect, Z-Space</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="border border-border p-6 sm:p-8 md:p-12 relative hover:bg-muted/10 transition-colors md:transform md:translate-y-24"
                    >
                        <Quote className="absolute top-6 sm:top-8 md:top-12 left-6 sm:left-8 md:left-12 text-primary h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 opacity-20 flex-shrink-0" />
                        <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed mb-6 sm:mb-8 relative z-10 pr-2">
                            "Precision like I've never seen before. They handled the complex seismic requirements of our Tokyo HQ with seemingly effortless grace."
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="h-10 sm:h-12 w-10 sm:w-12 bg-gray-200 rounded-full flex-shrink-0" />
                            <div className="min-w-0">
                                <h4 className="font-bold text-sm sm:text-base md:text-lg truncate">Kenji T.</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest truncate">CEO, FutureSystems</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
