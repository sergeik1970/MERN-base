# MERN-base project
Написать mkdir название проекта

Переходим в проект

Полезные команды
``` bash
mkdir название

touch название - создать файл

code назв - открыть файл в коде
```

создать backend
mkdir backend
cd backend
npm i express mongoose dotenv cors
ls
ls -a
ls -l node_modules
 - express - веб-фреймворк для Node js (веб-сервер)
 - mongoose - библиотека для работы с mongoDB
 - dotenv - загрузка переменных окружения из файла .env
 - cors - включение cross origin resource sharing, для определения допустимых адресов запросов

code .env
cmd + S

создать gitignore

создать server.js

node server.js

создать frontend с помощью vite

npm create vite frontend

выбрать react

выбрать js

cd backend

npm i

npm run dev

удалить все из index.css

удалить app.css

потом чтобы все вместе совместить npm init -y

внутри package.json в scripts "server": "cd backend && nodemon server.js"
nodemon чтобы был автоперезапуск
"client": "cd frontend && npm run dev"

чтобы запустить backend ввести в корневой папке npm run backend
чтобы frontend - npm run client

создать папку styles в src и добавить туда index.css
поменять путь к файлу в main.jsx
import './styles/index.css'

скопировать с https://cdn.jsdelivr.net/npm/water.css@2/out/water.css в water.css в src/styles

написать @import url("water.css"); в index.css

можно написать в index.css что надо изменить в water.css

В package.json
"scripts": {
    <!-- запуск для разработки -->
    "server": "cd backend && nodemon server.js",
    "client": "cd frontend && npm run dev",
    <!-- сборка frontend -->
    "build-client": "cd frontend && npm install && npm run build",
    <!-- backend -->
    "build-server": "cd backend && npm install",
    "start-server": "cd backend && node server.js"
  }

если написать build-client то появятся 3 файла в dist

