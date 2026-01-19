import { HardHat, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div
            className="relative h-[800px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="fixed bottom-0 h-[800px] w-full -z-10">
                <div className="h-full bg-foreground text-background pt-24 pb-12 px-4 md:px-12 flex flex-col justify-between">

                    {/* Massive Footer CTA */}
                    <div>
                        <div className="mb-10">
                            <img src="/logo-nobg.png" alt="PACER Consultants Logo" className="h-16 w-auto object-contain" />
                        </div>

                        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default select-none mt-24 lg:mt-0">
                            Let's Build <br /> The Future
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-background/20 pt-12">
                        {/* Col 1 */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-primary">Headquarters</h4>
                            <p className="text-background/60 leading-relaxed">
                                72 Mossadak st,<br />
                                Dokki, Giza 12311,<br />
                                Egypt
                            </p>
                        </div>

                        {/* Col 2 */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-primary">Socials</h4>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
                                <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
                                <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
                            </div>
                        </div>

                        {/* Col 3 */}
                        <div className="md:col-span-2">
                            <h4 className="font-bold text-lg mb-6 text-primary">Newsletter</h4>
                            <div className="flex border-b border-background/20 pb-4">
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="bg-transparent border-none outline-none w-full text-xl placeholder:text-background/20"
                                />
                                <button className="text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-end text-sm text-background/40 font-mono uppercase tracking-widest mt-12">
                        <p>&copy; 2026 PACER Consultants.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
