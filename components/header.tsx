"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <div className="flex items-center">
              <div className="relative h-8 w-8 mr-2 transition-transform group-hover:scale-110">
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
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about-app" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            О приложении
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Возможности
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 btn-hover">
            Вход для авторов
          </Button>
          <div className="ml-2">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            className="transition-transform active:scale-90"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden border-t overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-3">
          <Link
            href="#about-app"
            className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            О приложении
          </Link>
          <Link
            href="#"
            className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Возможности
          </Link>
          <Link
            href="#"
            className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Button
            variant="outline"
            className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 btn-hover"
            onClick={() => setIsMenuOpen(false)}
          >
            Вход для авторов
          </Button>
          <div className="pt-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
