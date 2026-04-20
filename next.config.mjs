/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['drive.google.com', '1drv.ms', 'photos.onedrive.com', 'source.unsplash.com'],
    },
    experimental: {
        // Reduce memory usage during build
        workerThreads: false,
        cpus: 1,
    },
};

export default nextConfig;
