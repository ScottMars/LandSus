import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="sm:col-span-1">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <div className="relative h-10 w-10 mr-3 transition-transform group-hover:scale-110">
                  <Image
                    src="/images/logo.png"
                    alt="Susanin Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-semibold group-hover:text-blue-500 transition-colors">Susanin</span>
              </div>
            </Link>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600"></p>
          </div>

          <div className="sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Мы в социальных сетях
            </h3>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">Следите за нашими обновлениями и новостями</p>
            <div className="mt-3 sm:mt-4 flex space-x-4">
              <Link
                href="https://vk.com/susaninteam"
                target="_blank"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label="ВКонтакте"
              >
                <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.49 13.67 13.27 13.67C12.95 13.67 12.87 13.76 12.87 14.18V15.77C12.87 16.1 12.75 16.27 11.81 16.27C10.21 16.27 8.45 15.32 7.18 13.59C5.19 10.97 4.65 9.03 4.65 8.67C4.65 8.45 4.73 8.26 5.15 8.26H6.61C6.96 8.26 7.09 8.41 7.24 8.79C7.96 10.94 9.14 12.8 9.63 12.8C9.83 12.8 9.92 12.71 9.92 12.23V10.11C9.87 9.25 9.36 9.19 9.36 8.86C9.36 8.71 9.48 8.56 9.68 8.56H11.8C12.1 8.56 12.19 8.71 12.19 9.08V11.62C12.19 11.92 12.3 12.01 12.38 12.01C12.57 12.01 12.74 11.92 13.09 11.57C14.18 10.38 14.97 8.59 14.97 8.59C15.07 8.39 15.23 8.21 15.58 8.21H17.04C17.45 8.21 17.54 8.41 17.45 8.71C17.27 9.42 15.58 11.77 15.58 11.77C15.46 11.97 15.42 12.07 15.58 12.26C15.69 12.41 16.1 12.77 16.36 13.08C17.04 13.85 17.54 14.5 17.67 14.89C17.81 15.28 17.62 15.46 17.22 15.46L18.15 16.27Z" />
                </svg>
              </Link>
              <Link
                href="https://t.me/susanintravelapp"
                target="_blank"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label="Телеграм"
              >
                <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.1 13.35 8.72 13.49 8.38 13.48C8.01 13.47 7.3 13.28 6.76 13.11C6.1 12.91 5.58 12.8 5.62 12.44C5.64 12.25 5.9 12.06 6.4 11.87C9.32 10.63 11.32 9.79 12.4 9.34C15.57 7.92 16.2 7.69 16.63 7.69C16.72 7.69 16.93 7.72 17.07 7.83C17.19 7.92 17.22 8.05 17.23 8.14C17.22 8.19 17.25 8.42 16.64 8.8Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t pt-6 sm:pt-8 text-center">
          <div className="mt-4 mb-6 flex justify-center">
            <Link href="https://fasie.ru" target="_blank" aria-label="Фонд содействия инновациям">
              <Image 
                src="/fasie-logo.svg" 
                alt="Фонд содействия инновациям" 
                width={300} 
                height={120} 
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-4">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
          <div className="mt-4 mb-4">
            <Link href="/help" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
              Вопросы и ответы
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">&copy; 2023-2025 Susanin. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
