"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiPython,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiNodedotjs,
    SiReact,
    SiFramer,
    SiGreensock,
    SiPhp,
    SiLaravel,
    SiMysql,
    SiPostgresql,
    SiVercel,
    SiGithub
} from "react-icons/si";

const skills = [
    "Full Stack Development",
    "AI Engineering",
    "Machine Learning",
    "Real-time Systems",
    "Decision Support System (SAW)",
    "RESTful API",
    "MVC Architecture",
    "RBAC (Role-Based Access Control)",
    "B2B SaaS Logic",
    "Database Seeding & Migration",
    "UI/UX Design",
    "Git"
];

const techStack = [
    // Recommended Recommended Order
    {
        name: "Python",
        category: "AI/ML",
        icon: SiPython,
        color: "#3776AB"
    },
    {
        name: "Next.js",
        category: "Frontend",
        icon: SiNextdotjs,
        color: "#000000" // Next.js is black/white
    },
    {
        name: "TypeScript",
        category: "Language",
        icon: SiTypescript,
        color: "#3178C6"
    },
    {
        name: "JavaScript",
        category: "Language",
        icon: SiJavascript,
        color: "#F7DF1E"
    },
    {
        name: "Tailwind CSS",
        category: "Styling",
        icon: SiTailwindcss,
        color: "#06B6D4"
    },
    {
        name: "Node.js",
        category: "Backend",
        icon: SiNodedotjs,
        color: "#339933"
    },
    // Additional from categories list
    {
        name: "React.js",
        category: "Frontend",
        icon: SiReact,
        color: "#61DAFB"
    },
    {
        name: "Framer Motion",
        category: "Animation",
        icon: SiFramer,
        color: "#0055FF"
    },
    {
        name: "GSAP",
        category: "Animation",
        icon: SiGreensock,
        color: "#88CE02"
    },
    {
        name: "PHP",
        category: "Backend",
        icon: SiPhp,
        color: "#777BB4"
    },
    {
        name: "Laravel 11",
        category: "Backend",
        icon: SiLaravel,
        color: "#FF2D20"
    },
    {
        name: "MySQL",
        category: "Database",
        icon: SiMysql,
        color: "#4479A1"
    },
    {
        name: "Alpine.js",
        category: "Frontend",
        icon: SiJavascript,
        color: "#8BC0D0"
    },
    {
        name: "Blade Templates",
        category: "Frontend",
        icon: SiLaravel,
        color: "#F05340"
    },
    {
        name: "Laravel Excel",
        category: "Backend",
        icon: SiLaravel,
        color: "#217346"
    },
    {
        name: "PostgreSQL",
        category: "Database",
        icon: SiPostgresql,
        color: "#4169E1"
    },
    {
        name: "Vercel",
        category: "Deployment",
        icon: SiVercel,
        color: "#000000"
    },
    {
        name: "GitHub",
        category: "Version Control",
        icon: SiGithub,
        color: "#181717"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="w-full max-w-[1600px] px-4 py-20 mx-auto">
            {/* Skills Section (Pills) */}
            <div className="mb-24 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-space font-bold mb-12 text-[rgb(var(--primary))]"
                >
                    Skills
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 rounded-full border border-[rgb(var(--primary))/20] bg-white/5 backdrop-blur-sm text-neutral-300 font-mono text-sm hover:border-[rgb(var(--primary))] hover:text-white transition-all duration-300 cursor-default"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tech Stack Section (Cards) */}
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-space font-bold text-center mb-16 text-[rgb(var(--primary))]"
                >
                    Tech Stack
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {techStack.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[rgb(var(--primary))/30] hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 aspect-[4/3] backdrop-blur-sm relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))/5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-3 rounded-xl bg-black/30 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                <tech.icon className="w-8 h-8" style={{ color: tech.color || "white" }} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[rgb(var(--primary))] transition-colors">{tech.name}</h3>
                                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{tech.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
