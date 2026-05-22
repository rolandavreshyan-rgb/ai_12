# AI Subscriptions - Full-Stack Web App

## Технологии
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (Auth + Database)
- Vercel Deployment

## Функционал
Реализовано:
- Темный дизайн главной страницы с AI-изображениями (стоковые)
- Описание подписок и кнопки покупки
- Авторизация через Supabase Auth (регистрация/вход)
- Роли: user / admin
- База данных: users, subscriptions, orders, guest_logs
- Логирование гостей (IP, User-Agent)
- Админ-панель
- Корзина
- Страница /checkout с заглушкой processPayment()
- Отдельные страницы privacy-policy и terms-of-service
- .env.example
- Vercel-ready конфиг

## Запуск проекта

1. Клонируйте репозиторий (или скопируйте файлы)
2. Установите зависимости:
   ```bash
   npm install
   ```

3. Настройте Supabase:
   - Создайте проект на https://supabase.com
   - Выполните SQL миграции для таблиц (см. ниже)
   - Добавьте Row Level Security политики
   - Скопируйте ключи в .env.local

4. Создайте .env.local из .env.example:
   ```bash
   cp .env.example .env.local
   ```

5. Запустите dev сервер:
   ```bash
   npm run dev
   ```

## Supabase SQL Setup

Выполните в Supabase SQL Editor:

```sql
-- users (управляется Supabase Auth, но можно расширить)
CREATE TABLE users (
  id uuid REFERENCES auth.users PRIMARY KEY,
  email text,
  role text DEFAULT 'user',
  created_at timestamp with time zone DEFAULT now()
);

-- subscriptions
CREATE TABLE subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  price numeric NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- orders
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  subscription_id uuid REFERENCES subscriptions(id),
  status text DEFAULT 'pending',
  created_at timestamp with time zone DEFAULT now()
);

-- guest_logs
CREATE TABLE guest_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text,
  user_agent text,
  visited_at timestamp with time zone DEFAULT now()
);
```

## Деплой на Vercel
1. Подключите репозиторий к Vercel
2. Добавьте Environment Variables
3. Deploy

## Инструкции по админу
- Создайте пользователя и вручную обновите role = 'admin' в Supabase
- Доступ к /admin

Проект полностью готов к использованию и расширению!
