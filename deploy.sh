#!/bin/bash
# Скрипт для сборки и развертывания проекта

# Установка зависимостей
echo "Установка зависимостей..."
npm install

# Сборка проекта
echo "Сборка проекта..."
npm run build

# Создание директории для развертывания
echo "Подготовка директории для развертывания..."
mkdir -p deployment
cp -r .next deployment/
cp -r public deployment/
cp package.json deployment/
cp next.config.mjs deployment/

# Установка только production зависимостей в директории развертывания
echo "Установка production зависимостей..."
cd deployment
npm install --production

echo "Проект готов к развертыванию. Директория: ./deployment"
echo "Для запуска используйте: cd deployment && npm start"
