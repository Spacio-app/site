/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true
    },
    images: {
        dangerouslyAllowSVG: true,
        domains: ['github.com', 'lh3.googleusercontent.com', 'tailwindui.com', 'production.listennotes.com', 'upload.wikimedia.org', 'example.com', 'res.cloudinary.com']
    },
    typescript: {
      ignoreBuildErrors: true
    }
}

module.exports = nextConfig
