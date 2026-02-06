"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import ProfileCard from "./ProfileCard";

const education = [
    {
        school: "University of Indraprasta PGRI",
        degree: "Student of informatics engineering",
        year: "2020 - present"
    },
    // Add more if needed
];

export default function About() {
    const containerRef = React.useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Mobile-specific transformations
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Simple Fade Out Effect on mobile
    // Clean and simple opacity transition
    const opacity = useTransform(scrollYProgress,
        [0, 0.2],
        [1, 0]
    );

    // On desktop, we want no transform
    const style = isMobile ? { opacity } : {};

    return (
        <section ref={containerRef} id="about" className="w-full max-w-[1600px] px-4 py-32 flex flex-col md:flex-row gap-16 items-start relative">
            {/* Profile Visual */}
            <motion.div
                style={style}
                className="w-full md:w-5/12 flex justify-center relative md:sticky md:top-32 z-30"
            >
                <ProfileCard />
            </motion.div>

            {/* Content Side */}
            <div className="flex-1 space-y-12 z-20">

                {/* Bio */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">01 . Profile</span>
                        <span className="h-px w-20 bg-white/10"></span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                        Architecting Digital <span className="text-white/40">Realities</span>
                    </h3>

                    <div className="space-y-6 text-muted-foreground leading-relaxed text-lg backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/5">
                        <p>
                            Hello! I am Abimanyu Rianto Putra, an Informatics student at Universitas Indraprasta PGRI (UNINDRA) with a strong passion for Web Development and Artificial Intelligence.
                        </p>
                        <p>
                            As a Junior Full-Stack Developer, I specialize in building robust, scalable applications. My diverse technical background allows me to tackle complex challenges across the entire stack.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-base">
                            <li><strong className="text-white">Frontend:</strong> Creating immersive experiences with Next.js, React, Vue.js, and React Native.</li>
                            <li><strong className="text-white">Backend & Architecture:</strong> Developing secure, high-performance APIs using Node.js, Laravel (PHP), and Python.</li>
                        </ul>
                        <p>
                            I am constantly learning and currently expanding my skills in mobile development and AI integration. I am eager to connect with fellow developers and open to opportunities in web development or software engineering.
                        </p>
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-4 pt-8 border-t border-white/10">
                    <h4 className="text-sm font-mono uppercase tracking-widest text-[rgb(var(--secondary))]">Education</h4>
                    <div className="space-y-6">
                        {education.map((edu, i) => (
                            <div key={i} className="flex justify-between items-start">
                                <div>
                                    <h5 className="font-bold text-lg">{edu.school}</h5>
                                    <p className="text-muted-foreground">{edu.degree}</p>
                                </div>
                                <span className="font-mono text-sm text-neutral-500">{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
