import { ExternalLink } from "lucide-react";
import type { Project } from "../constants/projects";

export const ProjectCard: React.FC<{ project: Project }> = ({project}) => {
    // const url: string = `${BaseUrl}/images/news/show/${news.image}`
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-green-600 transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
                <img src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"   
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                    <a href={project.href}
                        target="_blank"
                        className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border-white/20 hover:bg-primary/30 hover:border-primary:50 transition-all duration-300 hover:scale-110"
                        title="View details"
                        >    
                        <ExternalLink className="w-full h-full text-cyan-400"/>
                    </a>
                </div>

            </div>
            <div className="p-6 space-y-4">
                <div className="">
                    <h3 className="text-xl font-semibold text-green-700 mb-2 group-hover:text-[#FFEC2D] transition-colors duration-300">{project.title}</h3>
                    <p className="text-sky-800 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
}