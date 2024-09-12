# Стартовый CSS-шаблон

    /* FONT */
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    :root {
      --mainColor: #2d3436;
      --mainColorDark: #21292a;
      --mainColorTransparent: rgba(45, 52, 54, 0.6);
      --mainColorSectionTransparent: rgba(45, 52, 54, 0.1);

      --bodyBackground: #ecf0f1;

      --buttonColor: #ae2116;
      --buttonColorHover: rgba(174, 33, 22, 0.8);

      --fontSize: 16px;
      --offset: 16px;
    }

    /* GENERAL */
    body {
      color: var(--mainColor);
      background-color: var(--bodyBackground);
      font-family: "Montserrat", Arial, sans-serif;
      font-size: 16px;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      margin: 0;
      padding: 0;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    h1, h2, h3, h4 {
      margin: 0;
      padding: 0;
    }

    ul, ol {
      list-style: none;
      margin: 0;
      padding: 0;
    }


    /* NAV */
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }

    nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    nav li {
      margin: 0 10px;
    }

    nav a {
      color: #fff;
      text-decoration: none;
    }

    nav a:hover {
      color: #000;
    }

    /* BUTTON */
    .button {
      display: inline-block;
      padding: 8px 16px;
      cursor: pointer;
      text-decoration: none;
      border-radius: 4px;
    }
    .button--green {
      color: var(--bodyBackground);
      background-color: var(--buttonColor);
    }

    /* FORM */
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    input, textarea, select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      outline: none;
    }

    /* IMG */
    .image-block {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .image-block img {
      max-width: 100%;
      height: auto;
    }

    /* TEXT */
    .text-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .text-block p {
      margin: 0;
      padding: 0;
    }

    /* BUTTON */
    .button-block {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .button-block button {
      width: 100%;
      padding: 10px;
      border: none;
      cursor: pointer;
      background-color: #000;
      color: #fff;
      font-weight: bold;
    }

    .button-block button:hover {
      background-color: #333;
    }

    /* GRID */
    .section {
      padding: 64px 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--offset);
    }
    .row {
      display: flex;
      // gap: 24px;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 calc(var(--offset) * -1);
    }
    .col {
      padding: 0 var(--offset);
      box-sizing: border-box;
    }
    .col.col--12 {
      width: calc( 100% / 12 * 12 - var(--offset) * 2);
    }
    .col.col--6 {
      width: calc( 100% / 12 * 6 - var(--offset) * 2);
    }
    .col.col--4 {
      width: calc( 100% / 12 * 4 - var(--offset) * 2);
    }
    .col.col--3 {
      width: calc( 100% / 12 * 3 - var(--offset) * 2);
    }
    .col.col--2 {
      width: calc( 100% / 12 * 2 - var(--offset) * 2);
    }
    .col.col--1 {
      width: calc( 100% / 12 * 1 - var(--offset) * 2);
    }

    .col.elem {
      width: calc( 100% / 12 * 1 - var(--offset) * 2);
    }
