# Стек(mongodb, express, node,react)
___
![](assets/presentation.gif)
___
## Пример небольшого сайта, где мы можем создавать и публиковать публикации,загружать изображение,где присутсвует реагистрация и авторизация
Это проект с серверной и клиентской частью, с акцентом на функциональную часть(есть не большие недоработки).
Проект создан с на базе такого стека, как  MERN(Mongodb, Express, React, Node). Также создан на основе Tailwind.css

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Tailwind.css](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

#### Для старта необходимо подключиться к базе данных:
```
git clone https://github.com/deniskots/react-cload.git
yarn
yarn server
yarn start
```
___
## Авторизация и регистрация(Bcrypt, jsonwebtoken)
При первом рендере страницы проверяем авторизован пользователь или нет,что дает нам доступ к удалению, созданию и редактированию публикаций


___
![](./assets/register.gif)
___
## Создание публикаций 
Загрузка изображений с помощью express-fileupload
___
![](./assets/addPost.gif)
