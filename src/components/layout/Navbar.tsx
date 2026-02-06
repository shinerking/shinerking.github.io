"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference">
            <Link href="/" className="text-xl font-bold font-space text-white tracking-widest uppercase">
                Portfolio
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-mono uppercase text-neutral-400 hover:text-white transition-colors tracking-wide"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Button - Placeholder if needed, or simple link for now */}
            <div className="md:hidden">
                {/* Mobile menu implementation can be added here later if requested */}
            </div>
        </header>
    );
}
