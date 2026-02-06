/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // PENTING: Ini yang bikin jadi file HTML statis
    images: {
        unoptimized: true, // PENTING: GitHub Pages tidak bisa optimasi gambar otomatis
    },
};

export default nextConfig;
