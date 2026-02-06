"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [hoverText, setHoverText] = useState("");

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        if (!cursor || !follower) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: "power2.out",
            });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if target is interactive
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-crosshair")
            ) {
                setIsHovering(true);
                const text = target.getAttribute("data-hover-text");
                setHoverText(text || "OPEN");
                gsap.to(follower, { scale: 3, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "transparent" });
                gsap.to(cursor, { scale: 0.5, opacity: 0 });
            } else {
                setIsHovering(false);
                setHoverText("");
                gsap.to(follower, { scale: 1, backgroundColor: "transparent", borderColor: "rgba(255, 255, 255, 0.2)" });
                gsap.to(cursor, { scale: 1, opacity: 1 });
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-[rgb(var(--primary))] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 backdrop-blur-[1px]"
            >
                <span className={`text-[4px] font-mono font-bold text-white uppercase tracking-widest ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                    {hoverText}
                </span>
            </div>
        </>
    );
}
