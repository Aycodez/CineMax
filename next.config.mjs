/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
        {
            hostname: 'utfs.io'
        },
        {
            hostname: 'static0.gamerantimages.com'
        },
        {
            hostname: 'https://m.media-amazon.com'
        }
    ]
   }
};

export default nextConfig;
