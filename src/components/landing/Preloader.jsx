import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust speed here

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (count === 100) {
            setTimeout(() => {
                onComplete();
            }, 500); // Wait a bit after 100%
        }
    }, [count, onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-foreground text-background"
        >
            {/* Simple Counter/Text */}
            <div className="flex flex-col items-center">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-9xl font-black tracking-tighter"
                    >
                        {count}%
                    </motion.h1>
                </div>
                <p className="font-mono tracking-widest mt-4 animate-pulse">
                    INITIALIZING SYSTEMS...
                </p>
            </div>
        </motion.div>
    );
};

export default Preloader;
