import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Вопросы и ответы | Susanin",
  description: "Ответы на часто задаваемые вопросы о сервисе Susanin",
}

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Вопросы и ответы</h1>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b">
              <AccordionTrigger className="text-left text-base sm:text-lg hover:text-blue-500 py-4">
                Как работает сервис Susanin?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>
                  Susanin — это маркетплейс готовых маршрутов от профессиональных гидов, историков и местных жителей. С
                  помощью приложения вы можете выбрать город, затем интересующий вас маршрут и следовать по нему с
                  помощью встроенной навигации. В каждой точке маршрута вам будет доступен интересный контент,
                  рассказывающий о данной локации.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b">
              <AccordionTrigger className="text-left text-base sm:text-lg hover:text-blue-500 py-4">
                Как стать автором маршрута?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>
                  Чтобы стать автором маршрута, вам необходимо перейти в раздел "Вход для авторов" на нашем сайте и
                  заполнить анкету. После проверки ваших данных мы предоставим вам доступ к администраторской панели,
                  где вы сможете создать собственный маршрут.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b">
              <AccordionTrigger className="text-left text-base sm:text-lg hover:text-blue-500 py-4">
                Платно ли использование приложения?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>
                  Скачивание приложения и использование базовых функций бесплатно. Некоторые премиальные маршруты могут
                  быть платными, стоимость указана непосредственно при выборе маршрута. Авторы сами устанавливают цены
                  на свои маршруты или делают их бесплатными.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b">
              <AccordionTrigger className="text-left text-base sm:text-lg hover:text-blue-500 py-4">
                Работает ли приложение без интернета?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>Нет, не работает</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b">
              <AccordionTrigger className="text-left text-base sm:text-lg hover:text-blue-500 py-4">
                Как я могу предложить добавить новый город?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>
                  Вы можете предложить новый город для добавления в приложение через форму обратной связи в самом
                  приложении или написать нам на электронную почту susanin@susaninapp.ru. Мы рассмотрим ваше предложение
                  и свяжемся с вами для обсуждения деталей.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-b">
              <AccordionTrigger className="text-left text-base sm:text-lg hover:text-blue-500 py-4">
                Как я могу удалить аккаунт?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>
                  Чтобы удалить аккаунт вам необходимо обратиться по адресу delete@susaninapp.ru. Аккаунт будет удален в течении 24-х часов без возможности восстановить его и покупки совершенные на нем
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-base sm:text-lg hover:text-blue-500 py-4">
                Как связаться со службой поддержки?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>Для связи со службой поддержки вы можете:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Написать на электронную почту help@susaninapp.ru</li>
                  <li>Воспользоваться формой обратной связи в приложении</li>
                  <li>Связаться с нами через социальные сети (ссылки в футере сайта)</li>
                </ul>
                <p className="mt-2">Время ответа обычно составляет до 24 часов в рабочие дни.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Не нашли ответа на свой вопрос?</h2>
          <p className="text-gray-600 mb-4">Свяжитесь с нами по электронной почте, и мы обязательно вам поможем.</p>
          <a
            href="mailto:support@susanin.life"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Написать в поддержку
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
