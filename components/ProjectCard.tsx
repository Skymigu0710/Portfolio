import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    techs: { name: string; icon: string }[];
    link: string;
    captura: string;
}

export default function ProjectCard({
    title,
    description,
    techs,
    link,
    captura,
}: ProjectCardProps) {
    return (
        <div className="bg-zinc-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-cyan-400">
                    {title}
                </h3>

                <p className="text-gray-300  text-sm leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                    {techs.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-2 bg-zinc-700 px-3 py-1 rounded-lg"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-5 h-5"
                            />
                            <span className="text-sm text-gray-200">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex  justify-center  h-50">
                <img
                    src={captura}
                    className="flex pb-4"
                />
                </div>
            </div>          
            <a
                href={link}
                target="_blank"
                className="flex items-center gap-2 text-cyan-400 justify-end hover:text-cyan-300 transition"
            >
                Ver proyecto
                <ExternalLink size={18} />
            </a>

        </div>
    );
}
