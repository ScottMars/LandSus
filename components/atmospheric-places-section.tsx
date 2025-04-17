"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AppDownloadPopup } from "./app-download-popup"

export function AtmosphericPlacesSection() {
  const textAnimation = useScrollAnimation()
  const imageAnimation = useScrollAnimation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const carouselItems = [
    {
      title: "Карелия",
      description: "Красивейшие места с туманными озерами",
      imageUrl: "/images/karelia.jpeg",
      badge: "НОВОЕ",
    },
    {
      title: "Сибирь",
      description: "Необыкновенные пейзажи",
      imageUrl: "/images/siberia.jpeg",
    },
    {
      title: "Байкал",
      description: "Самое глубокое озеро на планете",
      imageUrl: "/images/baikal.jpeg",
    },
  ]

  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselItems.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section className="section-spacing bg-gradient-to-r from-blue-50 to-white rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
        Выберете один из этих потрясающих маршрутов!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div
          ref={textAnimation.ref}
          className={`fade-in-up ${textAnimation.isVisible ? "visible" : ""} order-2 md:order-1`}
        >
          <p className="text-base md:text-lg text-gray-600">
            Контент для приложения пишут профессиональные авторы, гиды и местные жители
          </p>
          <ul className="mt-3 md:mt-4 space-y-2 sm:space-y-3">
            <li className="flex items-center">
              <span className="flex-shrink-0 h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 text-blue-500 text-xs font-bold">
                1
              </span>
              <span className="text-sm md:text-base text-gray-700">Уникальные места вдали от туристических троп</span>
            </li>
            <li className="flex items-center">
              <span className="flex-shrink-0 h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 text-blue-500 text-xs font-bold">
                2
              </span>
              <span className="text-sm md:text-base text-gray-700">Аутентичные локальные заведения</span>
            </li>
            <li className="flex items-center">
              <span className="flex-shrink-0 h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 text-blue-500 text-xs font-bold">
                3
              </span>
              <span className="text-sm md:text-base text-gray-700">Секретные видовые точки для лучших фотографий</span>
            </li>
          </ul>
          <Button
            className="mt-4 md:mt-6 bg-blue-500 hover:bg-blue-600 text-white btn-hover w-full sm:w-auto"
            onClick={openPopup}
          >
            Начать планировать
          </Button>
        </div>
        <div
          ref={imageAnimation.ref}
          className={`fade-in-up stagger-1 ${imageAnimation.isVisible ? "visible" : ""} order-1 md:order-2`}
        >
          <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-lg sm:rounded-xl shadow-md">
            <div className="relative h-full w-full overflow-hidden">
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700"
                    style={{ objectPosition: "50% 50%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {item.badge && (
                      <span className="inline-block px-2 py-1 bg-blue-500 text-white text-xs rounded-full mb-2">
                        {item.badge}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-white opacity-90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Кнопки навигации */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-1 backdrop-blur-sm transition-all"
              aria-label="Предыдущий слайд"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-1 backdrop-blur-sm transition-all"
              aria-label="Следующий слайд"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            {/* Индикаторы */}
            <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-4 bg-blue-500" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Попап для скачивания приложения */}
      <AppDownloadPopup isOpen={isPopupOpen} onClose={closePopup} />
    </section>
  )
}
