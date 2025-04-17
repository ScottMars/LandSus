"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Проверяем при первой загрузке
    checkMobile()

    // Добавляем слушатель изменения размера окна
    window.addEventListener("resize", checkMobile)

    // Очищаем слушатель при размонтировании
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
