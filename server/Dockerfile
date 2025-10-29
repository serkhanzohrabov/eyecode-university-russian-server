# Указываем базовый образ с Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# КОПИРУЕМ package.json и package-lock.json
COPY package*.json ./
#  Устанавливаем только production зависимости
RUN npm install --production

# КОПИРУЕМ ВСЕ ФАЙЛЫ ПРОЕКТА В КОНТЕЙНЕР
COPY . .


# ЗАПУСКАЕМ ПРИЛОЖЕНИЕ
CMD ["npm", "start"]