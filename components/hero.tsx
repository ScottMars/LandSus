"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { useState } from "react"
import { AppDownloadPopup } from "./app-download-popup"

export function Hero() {
  const animation1 = useScrollAnimation()
  const animation2 = useScrollAnimation()
  const animation3 = useScrollAnimation()
  const isMobile = useMobile()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <section className="py-6 md:py-12 relative overflow-hidden">
      {/* Декоративный элемент */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>

      <div className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-2 items-center">
        <div ref={animation1.ref} className={`fade-in-up ${animation1.isVisible ? "visible" : ""}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Откройте новый маршрут, создайте впечатления
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600">
            Susanin - маркетплейс готовых маршрутов от профессиональных гидов, историков и местных жителей
          </p>
          <div className="mt-4 md:mt-6">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white btn-hover w-full sm:w-auto" onClick={openPopup}>
              Начать путешествие
            </Button>
          </div>
        </div>
        <div
          ref={animation2.ref}
          className={`grid grid-cols-2 gap-2 sm:gap-3 fade-in-up stagger-1 ${animation2.isVisible ? "visible" : ""}`}
        >
          <div className="col-span-2 h-40 sm:h-48 md:h-56 relative overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1551845041-63e8e76836ea?q=80&w=2089&auto=format&fit=crop"
              alt="Золотое кольцо России"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover image-hover"
              style={{ objectPosition: "50% 50%" }}
            />
          </div>
          <div className="h-28 sm:h-36 md:h-40 relative overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1543699936-c901ddbf0c05?q=80&w=2070&auto=format&fit=crop"
              alt="Красивая русская деревня с деревянными домами"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
              className="object-cover image-hover"
            />
          </div>
          <div className="h-28 sm:h-36 md:h-40 relative overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2149&auto=format&fit=crop"
              alt="Озеро Байкал"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
              className="object-cover image-hover"
            />
          </div>
        </div>
      </div>

      <div
        ref={animation3.ref}
        className={`mt-6 md:mt-10 grid grid-cols-3 gap-2 sm:gap-4 text-center fade-in-up stagger-2 ${animation3.isVisible ? "visible" : ""}`}
      >
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500">25+</p>
          <p className="text-xs sm:text-sm text-gray-600">Городов</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500">500+</p>
          <p className="text-xs sm:text-sm text-gray-600">Локаций</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500">10+</p>
          <p className="text-xs sm:text-sm text-gray-600">Регионов</p>
        </div>
      </div>

      {/* Попап для скачивания приложения */}
      <AppDownloadPopup isOpen={isPopupOpen} onClose={closePopup} />
    </section>
  )
}
