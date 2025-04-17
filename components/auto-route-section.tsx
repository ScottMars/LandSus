"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { AppDownloadPopup } from "./app-download-popup"

export function AutoRouteSection() {
  const textAnimation = useScrollAnimation()
  const imageAnimation = useScrollAnimation()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <section id="about-app" className="section-spacing">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div
          ref={textAnimation.ref}
          className={`fade-in-up ${textAnimation.isVisible ? "visible" : ""} order-2 md:order-1`}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Оставьте силы на отдых: Susanin построит маршрут за вас
          </h2>
          <p className="mt-3 md:mt-4 text-gray-600">
            Вы сами выбираете какие места увидеть, какой транспорт использовать и сколько времени провести на основе
            ваших интересов
          </p>
          <ul className="mt-3 md:mt-4 space-y-2">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <span className="text-sm md:text-base text-gray-700">Экономия времени на планирование</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <span className="text-sm md:text-base text-gray-700">Контент и навигация на одном экране</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <span className="text-sm md:text-base text-gray-700">Разнообразие контента и авторов</span>
            </li>
          </ul>
          <Button
            className="mt-4 md:mt-6 bg-blue-500 hover:bg-blue-600 text-white btn-hover w-full sm:w-auto"
            onClick={openPopup}
          >
            Попробовать
          </Button>
        </div>
        <div
          ref={imageAnimation.ref}
          className={`grid grid-cols-2 gap-3 sm:gap-4 fade-in-up stagger-1 ${imageAnimation.isVisible ? "visible" : ""} order-1 md:order-2`}
        >
          <div className="relative h-36 sm:h-48 md:h-56 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/route1.jpeg"
              alt="Маршрут по карельскому заповеднику"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-36 sm:h-48 md:h-56 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/route2.jpeg"
              alt="Исторический маршрут по Санкт-Петербургу"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-2 relative h-36 sm:h-48 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/route3.jpeg"
              alt="Маршрут по Русскому Северу"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
          </div>
        </div>
      </div>

      {/* Попап для скачивания приложения */}
      <AppDownloadPopup isOpen={isPopupOpen} onClose={closePopup} />
    </section>
  )
}
