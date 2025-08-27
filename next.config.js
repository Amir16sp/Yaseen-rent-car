/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // <-- makes "next export" the target
  images: { unoptimized: true }, // needed if you use <Image /> with export
};
module.exports = nextConfig;