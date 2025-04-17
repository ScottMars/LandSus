"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MapPin, Route, Info } from "lucide-react"

export function StepsSection() {
  const animation = useScrollAnimation()

  return (
    <section className="section-spacing bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
      <div
        ref={animation.ref}
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 fade-in-up ${animation.isVisible ? "visible" : ""}`}
      >
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="flex">
            <div className="mr-3 sm:mr-4 flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500 font-bold">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900">Выбери город</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                Все города в приложении содержат минимум один маршрут. Больше городов, маршрутов - больше идей для
                приключений!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="flex">
            <div className="mr-3 sm:mr-4 flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500 font-bold">
                <Route className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900">Выбери маршрут</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                Все маршруты содержат проверенный контент, а авторы стараются рассказывать увлекательные истории
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:col-span-2 md:col-span-1">
          <div className="flex">
            <div className="mr-3 sm:mr-4 flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500 font-bold">
                <Info className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900">Наслаждайся и узнавай</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                Просто следуй по карте, изучай город, узнавай что-то новенькое. Авторы контента - местные жители,
                историки, профессиональные гиды
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
