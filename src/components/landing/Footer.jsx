import { HardHat, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div
            className="relative h-auto md:h-[800px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="md:fixed md:bottom-0 h-auto md:h-[800px] w-full -z-10">
                <div className="h-full bg-foreground text-background pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 md:pb-12 px-4 sm:px-6 md:px-12 flex flex-col justify-between">

                    {/* Massive Footer CTA */}
                    <div>
                        <div className="mb-8 sm:mb-10">
                            <img src="/logo-nobg.png" alt="PACER Consultants Logo" className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default select-none mt-12 sm:mt-16 md:mt-24 lg:mt-0">
                            Let's Build <br /> The Future
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-background/20 pt-8 md:pt-12">
                        {/* Col 1 */}
                        <div>
                            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-primary">Headquarters</h4>
                            <p className="text-background/60 text-sm md:text-base leading-relaxed">
                                72 Mossadak st,<br />
                                Dokki, Giza 12311,<br />
                                Egypt
                            </p>
                        </div>

                        {/* Col 2 */}
                        <div>
                            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-primary">Socials</h4>
                            <div className="flex gap-3 md:gap-4">
                                <a href="#" className="hover:text-primary transition-colors p-1 md:p-0"><Facebook className="w-5 h-5 md:w-6 md:h-6" /></a>
                                <a href="#" className="hover:text-primary transition-colors p-1 md:p-0"><Twitter className="w-5 h-5 md:w-6 md:h-6" /></a>
                                <a href="#" className="hover:text-primary transition-colors p-1 md:p-0"><Linkedin className="w-5 h-5 md:w-6 md:h-6" /></a>
                            </div>
                        </div>

                        {/* Col 3 */}
                        <div className="sm:col-span-2 md:col-span-2">
                            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-primary">Newsletter</h4>
                            <div className="flex border-b border-background/20 pb-3 md:pb-4">
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="bg-transparent border-none outline-none w-full text-base md:text-xl placeholder:text-background/20 text-sm md:text-base"
                                />
                                <button className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm hover:text-white transition-colors flex-shrink-0 ml-2">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-end text-xs md:text-sm text-background/40 font-mono uppercase tracking-widest mt-8 md:mt-12">
                        <p>&copy; 2026 PACER Consultants.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
