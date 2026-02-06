"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectMockupProps {
    title: string;
    category: string;
    imageSrc: string;
    className?: string;
    color?: string; // Optional custom color for header
}

export default function ProjectMockup({ title, category, imageSrc, className, color = "bg-blue-600" }: ProjectMockupProps) {
    const ref = useRef<HTMLDivElement>(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-200, 200], [5, -5]);
    const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);

    return (
        <motion.div
            ref={ref}
            className={`relative group perspective-1000 ${className}`}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            {/* Card Container - "Pop" Effect added via shadow/transform */}
            <div className="relative w-full h-full min-h-[500px] overflow-hidden rounded-xl bg-neutral-900 border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-[1.01] flex flex-col">

                {/* New Colored Header */}
                <div className={`w-full p-3 px-6 flex justify-between items-center ${color} text-white z-20`}>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-black/20" />
                        <div className="w-3 h-3 rounded-full bg-black/20" />
                    </div>
                    <span className="text-xs font-mono opacity-80 uppercase tracking-widest">{category}</span>
                </div>

                {/* Content & Mockup Area */}
                <div className="relative flex-1 p-6 z-10 bg-neutral-900/50 backdrop-blur-sm">
                    <div className="absolute top-6 left-6 z-30">
                        <h3 className="text-3xl font-bold font-space text-white mb-2">{title}</h3>
                    </div>

                    <div className="absolute top-6 right-6 z-30">
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/50 hover:bg-white hover:text-black transition-colors duration-300">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>

                    {/* Device Frame */}
                    <div className="absolute top-24 left-0 right-0 bottom-0 mx-auto w-[85%] h-[90%] rounded-t-lg shadow-2xl overflow-hidden bg-black border-4 border-neutral-800 transform transition-transform duration-500 group-hover:-translate-y-4">
                        <div
                            className="w-full h-full bg-cover bg-top transition-all duration-[4s] ease-in-out group-hover:bg-bottom"
                            style={{ backgroundImage: `url(${imageSrc})` }}
                        >
                            {!imageSrc && (
                                <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-600 font-mono text-xs">
                                    [NO_SIGNAL]
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
