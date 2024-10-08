# Содание SPA
Создание первого файла SPA на чистом JavaScript.

Для создания SPA на чистом JavaScript без использования фреймворков, таких как React, Vue или Angular, вам потребуется использовать базовые возможности JavaScript, HTML и CSS. Вот основные шаги.

Создайте новый проект (можно просто создать папку и разместить там пустой файл `index.html`):
- Откройте терминал или командную строку.
- Введите команду для создания нового проекта:

Код:

    mkdir my-spa && cd my-spa
    touch index.html

Это создаст новый каталог my-spa и файл index.html.

## Добавьте HTML-код в файл index.html
В index.html добавьте базовую структуру HTML:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SPA</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <div id="app"></div>
      <script src="app.js"></script>
    </body>
    </html>


Здесь мы создаем пустой `<div>` с идентификатором `app`, который будет использоваться для рендеринга нашего SPA.

## Напишите JavaScript
Создайте файл `app.js` в корне проекта со следующим содержимым:

    const app = document.getElementById('app');
    function showPage1() {
      app.innerHTML = '<h1>Страница 1</h1>';
    }
    function showPage2() {
      app.innerHTML = '<h1>Страница 2</h1>';
    }
    function showPage3() {
      app.innerHTML = '<h1>Страница 3</h1>';
    }
    showPage1(); // Показываем страницу 1 по умолчанию

Этот код создает три функции для отображения разных страниц и вызывает первую функцию по умолчанию.

## Добавьте кнопки навигации:
В index.html добавьте кнопки навигации:

Код:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SPA</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <div id="app"></div>
      <button onclick="showPage1()">Страница 1</button>
      <button onclick="showPage2()">Страница 2</button>
      <button onclick="showPage3()">Страница 3</button>
      <script src="app.js"></script>
    </body>
    </html>

Эти кнопки вызывают соответствующие функции в app.js.

## Протестируйте
Откройте index.html в браузере и нажмите на кнопки навигации, чтобы увидеть переключение между страницами.

Этот пример демонстрирует создание простого SPA на чистом JavaScript без использования фреймворков. Вы можете расширить его, добавив больше страниц и улучшив взаимодействие с пользователем.
