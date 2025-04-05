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

создать .gitignore в коренной директории

создать server.js в backend

написать server.js
добавить переменные окружения в .env
добавить .env в .gitignore

node server.js

выводится server started on port (PORT)

создать frontend с помощью vite
npm create vite frontend

выбрать react

выбрать js

cd frontend
npm i
npm run dev

запустился frontend на localhost
на странице есть два значка

удалить все из src/index.css
стили слетели

создать .env в frontend и добавить туда VITE_API_URL="http://localhost:4000/"

удалить app.css

удалить из App.jsx строку import './App.css'

потом чтобы все вместе совместить npm init -y из коренной директории

внутри package.json в коренной папке в scripts "server": "cd backend && nodemon server.js"
nodemon чтобы был автоперезапуск
"client": "cd frontend && npm run dev"
test удалить

чтобы запустить backend ввести в корневой папке npm run server
чтобы frontend - npm run client

создать папку styles в src и добавить туда index.css
поменять путь к файлу в main.jsx на 3 строке
import './styles/index.css'

скопировать с https://cdn.jsdelivr.net/npm/water.css@2/out/water.css в water.css(создать его) в src/styles
дописать    appearance: none; в water.css под 732 строкой чтобы исчезло предупреждение

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

если написать npm run build-client то появятся 3 файла в dist
далее написать npm run build-server и start-server

выложить или закоммитить изменения

перейти на render
dashboard
делаем сначала backend
add new web service
git provider 
выбрать проект из списка
language Node
Branch main(потом можно и другую)
Region Oregon
Build command npm run build-server
Start command npm run start-server
Env vars выбрать add from .env и вставить из него из backend
Добавили
Секретных файлов нет
Deploy Wen service
будут вводиться много команд

дальше добавляем frontend на render
new static site
выбираем тот же проект из списка с github
Build command npm run build-client
Publish directory ./frontend/dist или вместо frontend client
Добавляем env vars из файла .env из frontend(1 в базовом случае)
секретных файлов нет
deploy Static Site

Оба задеплоились
Перейти по ссылке на frontend и должна быть страница со всем контентом