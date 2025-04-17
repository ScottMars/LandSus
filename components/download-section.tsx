"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function DownloadSection() {
  const textAnimation = useScrollAnimation()
  const imageAnimation = useScrollAnimation()

  return (
    <section className="section-spacing bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div ref={textAnimation.ref} className={`fade-in-up ${textAnimation.isVisible ? "visible" : ""}`}>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Скачайте приложение</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
            Выбирайте готовые маршруты, вдохновляйтесь идеями и путешествуйте!
          </p>
          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 text-blue-500 text-xs font-bold">
                ✓
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-700">Бесплатное скачивание и базовые функции</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 text-blue-500 text-xs font-bold">
                ✓
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-700">Контент и навигация на одном экране</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 text-blue-500 text-xs font-bold">
                ✓
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-700">Регулярные обновления и новые города</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="https://apps.apple.com/ru/app/susanin-travel/id6446585161"
              target="_blank"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="App Store"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.susanin_client&hl=ru"
              target="_blank"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <Link
              href="https://apps.rustore.ru/app/com.susanin_client"
              target="_blank"
              className="inline-block transition-transform hover:scale-105 bg-blue-500 text-white rounded-md px-3 py-1 h-8 sm:h-10 flex items-center"
            >
              <span className="font-medium">Скачать в RuStore</span>
            </Link>
          </div>
        </div>
        <div
          ref={imageAnimation.ref}
          className={`flex justify-center fade-in-up stagger-1 ${imageAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="relative w-56 h-80 sm:w-64 sm:h-96 md:w-72 md:h-[450px]">
            <Image
              src="https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=2070&auto=format&fit=crop"
              alt="Мобильное приложение для путешествий по России"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl sm:rounded-3xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-100 rounded-full opacity-50 blur-xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-20 sm:w-24 h-20 sm:h-24 bg-blue-100 rounded-full opacity-50 blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
