import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Using Google Fonts as requested
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
    title: "Abimanyu Rianto Putra | Architect",
    description: "Junior Full Stack Developer & AI Enthusiast Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn(inter.variable, spaceGrotesk.variable, "bg-background text-foreground overflow-x-hidden")}>
                <SmoothScroll>
                    <Preloader />
                    <div className="grain-overlay" />
                    <Navbar />
                    <main className="relative z-10">
                        {children}
                    </main>
                </SmoothScroll>
            </body>
        </html>
    );
}
