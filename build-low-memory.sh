#!/bin/bash

# Скрипт для сборки проекта в условиях ограниченной памяти

# Останавливаем выполнение скрипта при ошибке
set -e

echo "Начинаем сборку проекта с оптимизацией для серверов с ограниченной памятью..."

# Устанавливаем ограничение памяти для Node.js
export NODE_OPTIONS="--max-old-space-size=2048"

# Очищаем кэш и временные файлы
echo "Очищаем кэш и временные файлы..."
rm -rf .next
rm -rf node_modules/.cache

# Устанавливаем зависимости в production режиме
echo "Устанавливаем зависимости в production режиме..."
pnpm install --prod=false

# Создаем production сборку
echo "Создаем production сборку..."
pnpm run build

echo "Сборка успешно завершена!"
echo "Для запуска приложения выполните: pnpm run start" 