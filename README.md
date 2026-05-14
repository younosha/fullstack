# Fullstack Products App

Monorepo application with:

- React
- TypeScript
- Vite
- Redux Toolkit

- NestJS
- Prisma
- SQLite

Первый запуск(одна команда):
cp apps/api/.env.example apps/api/.env &&
npm install &&
cd apps/web &&
npm install &&
cd ../api &&
npm install &&
npx prisma generate &&
npx prisma migrate dev &&
cd ../.. &&
npm run dev

Дальше просто npm run dev для запуска

BACK: http://localhost:3000
FRONT: http://localhost:5173