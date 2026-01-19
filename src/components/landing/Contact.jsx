import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-background relative z-10">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Typography Col */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12"
                        >
                            Start <br /> Project
                        </motion.h2>

                        <p className="text-2xl text-muted-foreground font-light max-w-md leading-relaxed mb-12">
                            Ready to engineer the impossible? Tell us about your vision.
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="group cursor-pointer">
                                <p className="text-sm font-mono text-primary mb-1">EMAIL US</p>
                                <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">projects@pacer-consultants.com</h3>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-sm font-mono text-primary mb-1">CALL US</p>
                                <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">+2 (02) 3748 4835</h3>
                            </div>
                        </div>
                    </div>

                    {/* Form Col */}
                    <div className="flex items-end">
                        <form className="w-full space-y-8">
                            <div className="space-y-2">
                                <label className="text-sm font-mono tracking-widest uppercase text-muted-foreground">01. Your Name</label>
                                <Input className="border-0 border-b border-input rounded-none px-0 py-6 text-2xl focus-visible:ring-0 focus-visible:border-primary bg-transparent" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-mono tracking-widest uppercase text-muted-foreground">02. Email Address</label>
                                <Input className="border-0 border-b border-input rounded-none px-0 py-6 text-2xl focus-visible:ring-0 focus-visible:border-primary bg-transparent" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-mono tracking-widest uppercase text-muted-foreground">03. Project Details</label>
                                <Textarea className="border-0 border-b border-input rounded-none px-0 py-6 text-xl min-h-[150px] resize-none focus-visible:ring-0 focus-visible:border-primary bg-transparent" placeholder="Tell us about your project..." />
                            </div>

                            <Button size="lg" className="w-full text-lg h-16 mt-8 rounded-full">
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
