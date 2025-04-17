"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function LocationsSection() {
  const titleAnimation = useScrollAnimation()
  const cardsAnimation = useScrollAnimation()

  return (
    <section className="section-spacing relative">
      {/* Декоративный элемент */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>

      <div ref={titleAnimation.ref} className={`fade-in-up ${titleAnimation.isVisible ? "visible" : ""}`}>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
          Посещайте локации, которые не найти в обычном путеводителе
        </h2>
      </div>

      <div
        ref={cardsAnimation.ref}
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 fade-in-up stagger-1 ${cardsAnimation.isVisible ? "visible" : ""}`}
      >
        <div className="group relative h-56 sm:h-64 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/rybinsk1.jpeg"
            alt="Рыбинск, вид на собор с Волги"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ objectPosition: "50% 50%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-lg font-semibold">Скрытые жемчужины</h3>
            <p className="text-sm">Откройте для себя места, о которых знают только местные</p>
          </div>
        </div>

        <div className="group relative h-56 sm:h-64 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/rybinsk2.jpeg"
            alt="Рыбинск, исторический центр"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ objectPosition: "50% 50%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-lg font-semibold">Архитектурные шедевры</h3>
            <p className="text-sm">Исследуйте уникальные архитектурные памятники</p>
          </div>
        </div>

        <div className="group relative h-56 sm:h-64 overflow-hidden rounded-lg shadow-md sm:col-span-2 md:col-span-1">
          <Image
            src="/images/rybinsk3.jpeg"
            alt="Закат на Рыбинском водохранилище"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ objectPosition: "50% 50%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-lg font-semibold">Атмосферные места</h3>
            <p className="text-sm">Почувствуйте особую атмосферу уникальных локаций</p>
          </div>
        </div>
      </div>
    </section>
  )
}
