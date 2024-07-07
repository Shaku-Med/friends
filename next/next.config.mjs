/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [{
            source: `/(.*)`,
            headers: [{
                    key: "Access-Control-Allow-Origin",
                    value: "*",
                },
                {
                    key: "Access-Control-Allow-Methods",
                    value: "GET, POST",
                },
                {
                    key: "Access-Control-Allow-Headers",
                    value: "Content-Type, Authorization",
                },
                {
                    key: 'X-Frame-Options',
                    value: 'DENY'
                },
                {
                    key: 'Content-Security-Policy',
                    value: "frame-ancestors 'none'",
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff'
                }
            ],
        }, ];
    },
};

export default nextConfig;