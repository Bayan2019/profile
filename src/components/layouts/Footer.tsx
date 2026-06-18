import { Heart, Mail, MapPin } from "lucide-react";
import {SOCIALS} from "../../constants/intex.ts"
import { FadeIn } from "../../animations/FadeIn.tsx";
// import bayan from "../../../public/images/"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="relative bg-cyan-100 overflow-hidden border-t border-white/10">
            <div className="absolute inset-0 overflow-hidden" >
                <div className="absolute top-0 left-1/4 w-96 w-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 w-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Contact info */}
                    <FadeIn delay={0} duration={500} threshold={0.1}>
                        <div>
                            <h3 className="brand text-3xl font-bold bg-linear-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent mb-4">
                                SAPAR
                            </h3>
                            <p className="text-green-900 text-sm mb-6 leading-relaxed">
                            </p>
                            <div className="space-y-3">
                                <a href="mailto:zholdassova.moldir5235@gmail.com"
                                    className="group flex items-center gap-3 p-3 bg-white/20 border border-white/10 rounded-xl hover:bg-white/40 hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Mail className="w-4 h-4 text-[#00ABC2]" />
                                    </div>
                                    <span className="text-emerald-700 text-sm group-hover:text-primary transition-colors">
                                        saparbayevabt@gmail.com
                                    </span>
                                </a>
                                <div className="group flex items-center gap-3 p-3 bg-white/20 border border-white/10 rounded-xl hover:bg-white/40 hover:border-primary/30 transition-all duration-300">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <MapPin className="w-4 h-4 text-[#00ABC2]" />
                                    </div>
                                    <span className="text-emerald-700 text-sm group-hover:text-primary transition-colors">
                                        Almaty, Kazakhstan 🇰🇿
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                    {/* Social Links */}
                    <FadeIn delay={150} duration={500} threshold={0.1}>
                        <div>
                            <h4 className="text-green-600 font-semibold mb-6 text-lg">
                                Contact me
                            </h4>
                            <p className="text-green-900 text-sm mb-6 leading-relaxed">
                                {/* Если у вас есть вопросы, предложения или 
                                вы хотите разместить объект на платформе CultureMap, 
                                вы можете связаться с нами   */}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {SOCIALS.map((social, index) => (
                                <a 
                                    href={social.href} 
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-4 bg-white/30 rounded-xl border border-white/60 hover:bg-white/60 hover:border-primary/50 hover:scale-110 transition-all duration-300"
                                    aria-label={`Connect on ${social.name}`}
                                >
                                    <img src={social.icon} className="w-8 h-8 transition-colors duration-300" alt={social.name} />
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 transition-all duration-300 pointer-event-none" />
                                </a>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <FadeIn delay={300} duration={500} threshold={0.1}>
                    <div className="pt-8 border-t border-gray-300">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} Sapar. All Right Reserved.
                            </p>
                            <p className="flex items-center gap-2 text-gray-400 text-sm">
                                Built with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> by 
                                <img src="/BayanSap.png" className="w-16 h-16 rounded-full" alt="Sapar" />
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </footer>
    )
}