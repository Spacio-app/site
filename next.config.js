/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true
    },
    images: {
        domains: ['github.com', 'lh3.googleusercontent.com', 'freecodecamp.org', 'www.freecodecamp.org', 'production.listennotes.com']
      }
}

module.exports = nextConfig
