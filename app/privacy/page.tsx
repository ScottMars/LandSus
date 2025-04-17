import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Пользовательское соглашение | Susanin",
  description: "Пользовательское соглашение сервиса Susanin",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Пользовательское соглашение</h1>

        <div className="prose prose-blue max-w-none">
          <p>
            Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между ООО «СУСАНИН ПУТЕШЕСТВИЯ» (далее — «Компания») и физическим лицом (далее — «Пользователь») по использованию сервиса «Сусанин» (далее — «Сервис»).
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">1. Общие положения</h2>
          <p>
            1.1. Сервис представляет собой платформу для доступа к аудиогидам и туристическим маршрутам в различных городах России и мира.
          </p>
          <p>
            1.2. Используя Сервис, Пользователь подтверждает, что полностью ознакомился с настоящим Соглашением, принимает его условия и обязуется их соблюдать.
          </p>
          <p>
            1.3. Компания оставляет за собой право в одностороннем порядке изменять условия настоящего Соглашения. Изменения вступают в силу с момента их публикации на Сервисе.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">2. Регистрация и аккаунт</h2>
          <p>
            2.1. Для полноценного использования Сервиса Пользователю необходимо пройти процедуру регистрации. Регистрация осуществляется с использованием номера телефона.
          </p>
          <p>
            2.2. Пользователь обязуется предоставлять достоверную информацию при регистрации и поддерживать эту информацию в актуальном состоянии.
          </p>
          <p>
            2.3. Пользователь несет полную ответственность за сохранность своих учетных данных и за все действия, совершенные с использованием его аккаунта.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">3. Условия использования Сервиса</h2>
          <p>
            3.1. Сервис предлагает как бесплатный, так и платный контент. Условия приобретения платного контента указываются непосредственно на Сервисе.
          </p>
          <p>
            3.2. Оплата производится в рублях РФ согласно установленным тарифам. Все взаиморасчеты производятся через официальные платежные системы.
          </p>
          <p>
            3.3. Компания не гарантирует абсолютную точность, полноту или актуальность контента, размещенного на Сервисе, и не несет ответственности за любые ошибки или упущения в нем.
          </p>
          <p>
            3.4. Пользователь соглашается использовать Сервис на свой страх и риск. Компания не несет ответственности за любые убытки, возникшие в результате использования Сервиса.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">4. Права интеллектуальной собственности</h2>
          <p>
            4.1. Все права на Сервис и его контент (включая, но не ограничиваясь: аудиозаписи, тексты, изображения, дизайн) принадлежат Компании или её партнерам и защищены законодательством об интеллектуальной собственности.
          </p>
          <p>
            4.2. Пользователю предоставляется ограниченное, неисключительное, непередаваемое право доступа к контенту Сервиса исключительно для личного некоммерческого использования.
          </p>
          <p>
            4.3. Запрещается копирование, распространение, передача, публичное воспроизведение или создание производных работ на основе контента Сервиса без письменного разрешения Компании.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">5. Обработка персональных данных</h2>
          <p>
            5.1. При использовании Сервиса Пользователь соглашается на обработку своих персональных данных в соответствии с Политикой конфиденциальности Компании.
          </p>
          <p>
            5.2. Обработка персональных данных осуществляется в соответствии с законодательством РФ о персональных данных.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">6. Прекращение действия Соглашения</h2>
          <p>
            6.1. Пользователь вправе в любой момент прекратить использование Сервиса.
          </p>
          <p>
            6.2. Компания оставляет за собой право ограничить или прекратить доступ Пользователя к Сервису в случае нарушения условий настоящего Соглашения без предварительного уведомления.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">7. Заключительные положения</h2>
          <p>
            7.1. Настоящее Соглашение регулируется и толкуется в соответствии с законодательством Российской Федерации.
          </p>
          <p>
            7.2. Любые споры, возникающие из настоящего Соглашения или в связи с ним, подлежат разрешению в соответствии с законодательством РФ по месту нахождения Компании.
          </p>
          <p>
            7.3. Если какое-либо положение настоящего Соглашения будет признано недействительным или неисполнимым, это не влияет на действительность или исполнимость остальных положений.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">8. Реквизиты компании</h2>
          <p>
            <strong>Полное наименование:</strong> ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «СУСАНИН ПУТЕШЕСТВИЯ»<br />
            <strong>Краткое наименование:</strong> ООО «СУСАНИН ПУТЕШЕСТВИЯ»<br />
            <strong>Дата регистрации:</strong> 15.11.2023 г.<br />
            <strong>ОГРН:</strong> 1235000144059<br />
            <strong>ИНН:</strong> 5047283032<br />
            <strong>КПП:</strong> 504701001<br />
            <strong>Юридический адрес:</strong> обл. Московская, г. Долгопрудный, пер. Научный, д. 4, стр. 2, помещ. 29
          </p>

          <p className="mt-8 text-sm text-gray-500 italic">Обновлено 15.04.2025</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
