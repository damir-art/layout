# Стартовый HTML-шаблон
https://htmlacademy.ru/blog/html/free-html-template  
В VS Code можно создать свой начальный шаблон (в Emmet).

    <!DOCTYPE html>
    <html lang="ru-RU">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="style.css">

      <!-- Open Graph -->
      <meta property="og:title" content="Заголовок страницы в OG">
      <meta property="og:description" content="Описание страницы в OG">
      <meta property="og:image" content="https://example.com/image.jpg">
      <meta property="og:url" content="https://example.com/">
    </head>
    <body>

    </body>
    </html>

## Шаблон с семантикой

    <!--
      Вот пример простого HTML шаблона для России, который вы можете использовать как основу для своего сайта:
    -->
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Название вашего сайта</title>
      <link rel="stylesheet" href="./styles/style.css">
      <meta property="og:title" content="Заголовок страницы в OG">
      <meta property="og:description" content="Описание страницы в OG">
      <meta property="og:image" content="https://example.com/image.jpg">
      <meta property="og:url" content="https://example.com/">
      <link rel="icon" type="image/svg+xml" href="favicon.svg">
    </head>
    <body>
      <header>
        <div>Лого</div>
        <p>Сайт сделан на основе готового шаблона</p>
        <nav>
          <ul>
            <li><a href="index.html">Главная страница</a></li>
            <li><a href="catalog.html">Каталог товаров</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <h1>Название компании</h1>
          <section>
            <h2>О компании</h2>
            <p>Здесь вы можете узнать больше о нашей компании, её истории и ценностях.</p>
          </section>
          <section>
            <h2>Наши услуги</h2>
            <p>Мы предлагаем широкий спектр услуг, которые помогут вам достичь ваших целей.</p>
          </section>
          <section>
            <h2>Контакты</h2>
            <p>Если у вас есть вопросы или вы хотите связаться с нами, пожалуйста, заполните форму ниже.</p>
            <form action="/contact" method="post">
              <label for="name">Ваше имя:</label>
              <input type="text" id="name" name="name" required><br>
              <label for="email">Ваш email:</label>
              <input type="email" id="email" name="email" required><br>
              <label for="message">Сообщение:</label>
              <textarea id="message" name="message" rows="10" cols="30" required></textarea><br>
              <input type="submit" value="Отправить">
            </form>
          </section>
        </article>
      </main>
      <footer>
        <p>&copy; 2024 Все права защищены.</p>
      </footer>
      <!-- Сюда можно подключить jQuery или скрипты JavaScript -->
      <!--<script src="scripts/app.js" defer></script>-->
    </body>
    </html>
    <!-- 
      Этот шаблон содержит основные элементы структуры сайта, такие как заголовок, навигация, основное содержание и футер. Вы можете заполнить его своим контентом, добавить изображения и стилизовать с помощью CSS. 
    -->
