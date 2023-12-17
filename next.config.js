/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true
}

module.exports = {
    images: {
      domains: ['b.zmtcdn.com'], 
    },
  };
