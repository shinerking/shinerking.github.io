"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";

// --- Particle Field (R3F) ---
function Particles(props: any) {
    const ref = useRef<any>();
    // Reduced particle count slightly for performance while keeping the look
    const [sphere] = React.useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3B82F6"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

// --- Main Hero Component ---
export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 50, filter: "blur(10px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, ease: "power3.out", stagger: 0.1 }
            );
        }
    }, []);

    return (
        <section ref={triggerRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">

            {/* 1. Underlying Background Latar (Global) */}
            <div className="absolute inset-0 z-0 bg-transparent" />

            {/* 2. Restored Particle Effect */}
            <div className="absolute inset-0 z-10 w-full h-full">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Particles />
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center space-y-8 px-4 pointer-events-none">

                {/* Glitch Headline */}
                <h1 ref={titleRef} className="text-6xl md:text-9xl font-bold font-space tracking-tighter leading-[0.9] mix-blend-screen pointer-events-auto">
                    BUILDING THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 animate-gradient-x bg-300%">
                        FUTURE
                    </span>
                </h1>

                <div className="flex justify-center gap-4 pt-12 pointer-events-auto">
                    <button
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-8 py-4 bg-white text-black font-bold font-mono text-xs tracking-[0.2em] uppercase hover:bg-[rgb(var(--secondary))] hover:text-black transition-all duration-300 clip-path-slant overflow-hidden"
                    >
                        <span className="relative z-10">Explore Work</span>
                        <div className="absolute inset-0 bg-[rgb(var(--secondary))] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
            </div>

            {/* AI Engineering Transition Layer */}
            <div className="absolute bottom-0 w-full h-32 z-30 pointer-events-none">
                {/* 1. Soft Gradient Fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

                {/* 2. Neural Circuit Animation - Refined */}
                <div className="absolute bottom-0 left-0 w-full h-48 flex items-end justify-center pointer-events-none overflow-hidden">
                    <svg className="w-full h-full text-[rgb(var(--primary))]" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="grid-fade" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="rgb(var(--primary))" stopOpacity="0" />
                                <stop offset="50%" stopColor="rgb(var(--primary))" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="rgb(var(--primary))" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Soft Wave 1 */}
                        <path
                            d="M0,160 C320,300,420,0,740,160 C1060,320,1120,0,1440,160"
                            fill="none"
                            stroke="url(#grid-fade)"
                            strokeWidth="2"
                            className="opacity-30"
                        />

                        <path
                            d="M0,160 C320,0,420,300,740,160 C1060,0,1120,320,1440,160"
                            fill="none"
                            stroke="rgb(var(--secondary))"
                            strokeWidth="1"
                            strokeOpacity="0.2"
                            className="opacity-50"
                        />

                        {/* Data Stream Particles */}
                        <circle r="3" fill="rgb(var(--secondary))" className="drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]">
                            <animateMotion
                                dur="6s"
                                repeatCount="indefinite"
                                path="M0,160 C320,300,420,0,740,160 C1060,320,1120,0,1440,160"
                            />
                        </circle>
                        <circle r="2" fill="white" className="opacity-50">
                            <animateMotion
                                dur="8s"
                                repeatCount="indefinite"
                                begin="2s"
                                path="M0,160 C320,300,420,0,740,160 C1060,320,1120,0,1440,160"
                            />
                        </circle>
                    </svg>

                    {/* Gradient Fade Overlay to ensure perfect blend */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>
            </div>
        </section>
    );
}
