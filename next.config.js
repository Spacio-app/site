/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true
    },
    images: {
        dangerouslyAllowSVG: true,
        domains: ['github.com', 'lh3.googleusercontent.com', 'tailwindui.com', 'production.listennotes.com']
    },
    typescript: {
      ignoreBuildErrors: true
    }
}

module.exports = nextConfig
