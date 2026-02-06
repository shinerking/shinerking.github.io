"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [bootLog, setBootLog] = useState<string[]>([]);

    const logs = [
        "Initializing Core Systems...",
        "Loading Neural Modules...",
        "Optimizing WebGL Context...",
        "Connecting to Mainframe...",
        "Access Granted."
    ];

    useEffect(() => {
        // Simulate loading progress
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 800);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        // Simulate boot logs
        let logIndex = 0;
        const logTimer = setInterval(() => {
            if (logIndex < logs.length) {
                setBootLog((prev) => [...prev, logs[logIndex]]);
                logIndex++;
            } else {
                clearInterval(logTimer);
            }
        }, 400);

        return () => {
            clearInterval(timer);
            clearInterval(logTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-[rgb(var(--background))] flex flex-col items-center justify-center font-mono text-white"
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <div className="w-64 space-y-4">
                        {/* Progress Bar */}
                        <div className="flex justify-between text-xs text-muted-foreground mb-2">
                            <span>SYSTEM_BOOT</span>
                            <span>{Math.min(progress, 100)}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 overflow-hidden">
                            <motion.div
                                className="h-full bg-[rgb(var(--primary))]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Logs */}
                        <div className="h-24 flex flex-col justify-end gap-1 overflow-hidden">
                            {bootLog.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-[10px] text-white/60"
                                >
                                    {`> ${log}`}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
