"use client"

import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface AppDownloadPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function AppDownloadPopup({ isOpen, onClose }: AppDownloadPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Закрыть"
        >
          <X size={24} />
        </button>
        <h3 className="text-xl font-bold mb-4">Скачайте приложение Susanin</h3>
        <p className="text-gray-600 mb-6">Выберите платформу для скачивания приложения:</p>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Для пользователей Android:</h4>
            <div className="flex flex-wrap gap-3">
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
                  className="h-10 w-auto"
                />
              </Link>
              <Link
                href="https://apps.rustore.ru/app/com.susanin_client"
                target="_blank"
                className="inline-block transition-transform hover:scale-105 bg-blue-500 text-white rounded-md px-3 py-1 h-10 flex items-center"
              >
                <span className="font-medium">Скачать в RuStore</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Для пользователей iOS:</h4>
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
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
