/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Создает оптимизированную сборку для самостоятельного хостинга
  images: {
    unoptimized: false, // Включаем оптимизацию изображений
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'developer.apple.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      // Добавьте здесь другие домены, с которых загружаются изображения
    ],
  },
  // Отключаем строгий режим для упрощения развертывания
  reactStrictMode: false,
}

export default nextConfig
