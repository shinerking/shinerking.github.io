"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode, Fingerprint } from "lucide-react";

export default function ProfileCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[3/4] md:w-[350px] mx-auto perspective-1000"
        >
            <motion.div
                whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden group"
            >
                {/* Lanyard Hole */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-neutral-800 rounded-full z-20 flex items-center justify-center">
                    <div className="w-12 h-0.5 bg-white/20 rounded-full" />
                </div>

                {/* Holographic Overlay */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full duration-1000 ease-in-out pointer-events-none mix-blend-overlay" />

                {/* ID Header */}
                <div className="absolute top-0 w-full h-24 bg-[rgb(var(--primary))]/80 mix-blend-multiply" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center pt-12 p-6 h-full">
                    {/* Logo/Badge */}
                    <div className="mb-4">
                        <span className="px-3 py-1 rounded-full border border-white/30 bg-black/20 text-[10px] font-mono uppercase tracking-widest text-white backdrop-blur-sm">
                            Department of Architecture
                        </span>
                    </div>

                    {/* Photo Container */}
                    <div className="relative w-40 h-40 rounded-xl overflow-hidden border-2 border-white/20 mb-6 shadow-lg bg-neutral-900 group-hover:border-[rgb(var(--secondary))] transition-colors duration-300">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: "url('/images/profile.jpg')" }}
                        />
                        {/* Scan Line Animation */}
                        <div className="absolute inset-0 w-full h-1 bg-[rgb(var(--secondary))] opacity-50 blur-[2px] animate-scan" style={{ animationDuration: '3s' }} />
                    </div>

                    {/* Text Details */}
                    <div className="text-center space-y-2 mb-auto">
                        <h3 className="text-2xl font-bold font-space text-white tracking-tight">
                            Abimanyu R. Putra
                        </h3>
                        <p className="text-xs font-mono text-[rgb(var(--secondary))] uppercase tracking-widest">
                            Full Stack Engineer
                        </p>
                        <p className="text-[10px] text-neutral-400 font-mono mt-1">
                            ID: DEV-2024-8891-X
                        </p>
                    </div>

                    {/* Footer / Barcode Area */}
                    <div className="w-full mt-6 pt-6 border-t border-white/10 flex justify-between items-end opacity-60">
                        <div className="flex flex-col gap-1">
                            <span className="text-[8px] uppercase tracking-widest text-neutral-500">Authorized</span>
                            <Fingerprint size={24} className="text-white/80" />
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <QrCode size={32} className="text-white" />
                            <span className="text-[8px] font-mono">SCAN_VERIFY</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[rgb(var(--secondary))] animate-pulse" />
                <div className="absolute top-1/2 right-0 w-1 h-12 bg-white/10 rounded-l-md" />
            </motion.div>
        </motion.div>
    );
}

// Add Tailwind keyframes for scan animation if not present globally
// @layer utilities {
//   .animate-scan { animation: scan 2s linear infinite; }
//   @keyframes scan { 0% { top: 0% } 100% { top: 100% } }
// }
