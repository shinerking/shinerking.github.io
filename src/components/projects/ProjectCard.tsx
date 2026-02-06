"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageSrc?: string;
    githubLink?: string;
    liveLink?: string;
    index?: number;
    onClick?: () => void;
    layoutId?: string;
}

export default function ProjectCard({
    title,
    description,
    tags,
    imageSrc,
    githubLink,
    liveLink,
    index = 0,
    onClick,
    layoutId
}: ProjectCardProps) {
    return (
        <motion.div
            layoutId={layoutId}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
            className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-[rgb(var(--primary))/50] transition-colors duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col h-full transform-gpu perspective-1000 cursor-pointer"
        >

            {/* Image Area */}
            <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-black">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-neutral-700 gap-2 group-hover:bg-white/5 transition-colors">
                        <div className="w-8 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[rgb(var(--secondary))] transition-colors">
                            <span className="w-1/2 h-px bg-white/20 group-hover:bg-[rgb(var(--secondary))]"></span>
                        </div>
                        <span className="font-mono text-xs">No Preview</span>
                    </div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col relative z-20 bg-neutral-900/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold font-space text-white mb-3 group-hover:text-[rgb(var(--primary))] transition-colors">
                    {title}
                </h3>

                <div className="text-sm text-neutral-400 leading-relaxed mb-6 flex-1">
                    <ul className="list-disc pl-4 space-y-1">
                        {description.split('. ').map((point, i) => (
                            point && <li key={i}>{point.replace(/\.$/, '')}</li>
                        ))}
                    </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mb-6">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                            <Github size={14} /> GitHub
                        </a>
                    )}
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider hover:bg-[rgb(var(--primary))] hover:text-white hover:border-[rgb(var(--primary))] transition-all">
                            <ExternalLink size={14} /> Live
                        </a>
                    )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 text-neutral-400 border border-white/5 group-hover:border-[rgb(var(--secondary))/30] group-hover:text-[rgb(var(--secondary))] transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
