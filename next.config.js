/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.themealdb.com',
                port: '',
                pathname: '/images/category/**',
            },{
                protocol: 'https',
                hostname: 'www.themealdb.com',
                port: '',
                pathname: '/images/media/meals/**',
            },
        ],
    },
}