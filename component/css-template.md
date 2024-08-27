# Стартовый CSS-шаблон

    @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

    /* CSS переменные: цвета, отступы */
    :root{
      --green: #1D9D73;
      --offset: 15px;
    }

    body {
      margin: 0;
      color: #333333;
      background-color: #ecf0f1;
      font-family: "Rubik", sans-serif;
      font-size: 16px;
      font-weight: 300;
      font-style: normal;
      font-optical-sizing: auto;
    }

    /* reset.css */
    img {
      max-width: 100%;
      height: auto;
    }

    h1, h2, h3, h4, h5, h6, p, ul, li {
      margin: 0;
      font-size: 100%;
      font-weight: normal;
    }

    ul, ol {
      list-style: none;
      padding: 0;
    }

    strong {
      font-weight: normal;
    }

    em {
      font-style: normal;
    }

    /* base.css */
    h1, h2, h3, .h1, .h2, .h3 {
      font-weight: 300;
      color: #333;
    }

    h1, .h1 {
      font-size: 55px;
      margin: 30px 0;
    }

    h2, .h2 {
      font-size: 35px;
      margin: 20px 0;
    }

    h3, .h3 {
      font-size: 26px;
      margin: 16px 0;
    }

    strong, .strong {
      font-weight: 400;
    }

    em, .em {
      font-weight: 300;
      font-style: italic;
    }

    p {
      font-weight: 300;
      margin: 0 16px;
    }

    .button {
      display: inline-block;
      padding: 8px 16px;
      cursor: pointer;
      text-decoration: none;
      border-radius: 4px;
    }

    .button--green {
      color: #ffffff;
      background-color: #1d9d73;
    }

    /* etc */
    /* .content-text класс обёртка редактора в CMS */
    .content-text ul {
      list-style-type: disc;
      padding-left: 50px;
    }

    /* grid */
    .container {
      max-width: 1170px;
      padding: 30px;
      margin: 0 auto;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }

    .col {
      margin: 15px;
      box-sizing: border-box;
    }
