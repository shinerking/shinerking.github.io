"use client";

import React from "react";
import { Mail, Download, ArrowUpRight, Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="w-full max-w-[1600px] px-4 py-32 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />

            <div className="z-10 space-y-10 w-full max-w-4xl mx-auto">
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space tracking-tighter text-white">
                        Ready to create <br className="hidden md:block" />
                        <span className="text-white/80">something amazing?</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
                        Whether you have a project in mind or just want to say hi, my inbox is always open.
                    </p>
                </div>

                {/* Buttons Container */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
                    {/* Primary Button: Get in Touch */}
                    <a
                        href="mailto:abimanyuriantoputra@gmail.com?subject=Hello%20Abimanyu"
                        className="group relative inline-flex w-full md:w-auto items-center justify-center px-8 py-4 bg-white text-black font-bold font-space text-lg tracking-wide rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                        <span className="flex items-center gap-3">
                            Get in Touch <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                        </span>
                    </a>

                    {/* Secondary Button: Download Resume */}
                    <a
                        href="/cv-2026.pdf"
                        download="CV-Abimanyu Rianto Putra.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex w-full md:w-auto items-center justify-center px-8 py-4 bg-transparent text-white border border-white/30 font-medium font-space text-lg tracking-wide rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                    >
                        <span className="flex items-center gap-3">
                            Download Resume <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                        </span>
                    </a>
                </div>
            </div>

            {/* Footer Elements */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-32 pt-8 border-t border-white/10 text-xs font-mono text-neutral-500 uppercase gap-6">
                <div>
                    &copy; 2026 Abimanyu Rianto Putra. All rights reserved.
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-6">
                    <a href="https://www.instagram.com/abimanyuriantop/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform hover:scale-110 duration-300">
                        <Instagram size={20} className="opacity-70 hover:opacity-100" />
                    </a>
                    <a href="https://www.linkedin.com/in/abimanyu-rianto-putra-277966318" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform hover:scale-110 duration-300">
                        <Linkedin size={20} className="opacity-70 hover:opacity-100" />
                    </a>
                    <a href="https://github.com/shinerking/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform hover:scale-110 duration-300">
                        <Github size={20} className="opacity-70 hover:opacity-100" />
                    </a>
                    <a href="mailto:abimanyuriantoputra@gmail.com" className="hover:text-white transition-transform hover:scale-110 duration-300">
                        <Mail size={20} className="opacity-70 hover:opacity-100" />
                    </a>
                </div>
            </div>
        </section>
    );
}
