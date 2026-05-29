export const metadata = {
  title: 'Пользовательское соглашение',
  description: 'Публичная оферта и условия использования сервиса AI Subscriptions',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">
          Пользовательское соглашение (Публичная оферта)
        </h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Термины и определения
        </h2>

        <p className="text-zinc-400 mb-3">
          <strong>Оферта</strong> — настоящее Пользовательское соглашение.
        </p>
        <p className="text-zinc-400 mb-3">
          <strong>Сервис</strong> — веб‑платформа «AI Subscriptions», предназначенная
          для предоставления доступа к AI‑инструментам по подписке.
        </p>
        <p className="text-zinc-400 mb-3">
          <strong>Пользователь</strong> — физическое лицо, принявшее условия настоящей Оферты.
        </p>
        <p className="text-zinc-400 mb-3">
          <strong>Подписка</strong> — оплаченный доступ к функционалу сервиса
          на определённый срок.
        </p>
        <p className="text-zinc-400 mb-6">
          <strong>Акцепт Оферты</strong> — факт оплаты подписки через сайт.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. Предмет Оферты
        </h2>

        <p className="text-zinc-400 mb-4">
          Исполнитель предоставляет Пользователю доступ к AI‑инструментам
          в рамках выбранного тарифного плана.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Порядок оплаты
        </h2>

        <ul className="list-disc pl-6 text-zinc-400 space-y-2">
          <li>Оплата осуществляется на условиях 100% предоплаты.</li>
          <li>Стоимость подписки указывается на сайте перед оплатой.</li>
          <li>Доступ предоставляется автоматически после подтверждения оплаты.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Возврат средств
        </h2>

        <p className="text-zinc-400 mb-4">
          Возврат средств возможен только в случае технического сбоя,
          при котором доступ к сервису не был предоставлен.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Права и обязанности сторон
        </h2>

        <p className="text-zinc-400 mb-3">
          Исполнитель обязуется обеспечить работоспособность сервиса.
        </p>
        <p className="text-zinc-400 mb-3">
          Пользователь обязуется использовать сервис в рамках действующего законодательства.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Ответственность
        </h2>

        <p className="text-zinc-400 mb-4">
          Исполнитель не несёт ответственности за невозможность использования
          сервиса по причинам, не зависящим от него.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Разрешение споров
        </h2>

        <p className="text-zinc-400 mb-4">
          Все споры решаются путём переговоров. В случае невозможности
          урегулирования спора он подлежит рассмотрению в суде
          в соответствии с законодательством РФ.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Срок действия Оферты
        </h2>

        <p className="text-zinc-400">
          Настоящая Оферта вступает в силу с момента публикации
          и действует до её отзыва или замены новой редакцией.
        </p>
      </div>
    </div>
  )
}