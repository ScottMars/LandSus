"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FaqSection() {
  const animation = useScrollAnimation()

  return (
    <section className="section-spacing">
      <div ref={animation.ref} className={`fade-in-up ${animation.isVisible ? "visible" : ""}`}>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
          Часто задаваемые вопросы
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border rounded-lg mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-2 shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base hover:text-blue-500 transition-colors py-2 sm:py-3">
                Для чего нужен сервис?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-gray-600">
                Наша цель — сделать планирование путешествий удобнее, а путешествия информативнее и ярче. Мы помогаем
                открывать новые места и создавать уникальные маршруты с минимальными усилиями.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-lg mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-2 shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base hover:text-blue-500 transition-colors py-2 sm:py-3">
                Откуда вы берёте контент?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-gray-600">
                Мы сотрудничаем с местными жителями, собираем городские легенды и предоставляем историческую информацию
                из проверенных источников. Каждая локация проходит тщательную проверку нашими редакторами.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-lg mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-2 shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base hover:text-blue-500 transition-colors py-2 sm:py-3">
                Как я могу предложить свою локацию?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-gray-600">
                Вы всегда можете написать нам на почту support@susanin.life. Наша команда рассмотрит ваше предложение и
                свяжется с вами для получения дополнительной информации.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border rounded-lg mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-2 shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base hover:text-blue-500 transition-colors py-2 sm:py-3">
                В приложении нет города, в котором я еду
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-gray-600">
                Команда редакторов ведет свою работу для того, чтобы вы получали качественный контент. О появлении новых
                городов мы сообщаем в наших соц.сетях и в новостях в приложении. Вы также можете запросить добавление
                нового города через форму обратной связи.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
