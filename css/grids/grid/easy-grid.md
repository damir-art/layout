# grid easy
Основы гридов.

- Строки должны растягиваться по высоте по своему контенту. Колонкам тоже в начале можно не задавать размеры.
- Если элемент в компоненте лежит на первом уровне вложенности, то его можно делатьь гридами, если элементы внутри компонента обернуты дивом (неразрывные элементы, всегда стоящие рядом по одной направляющей) то флексами.
- Если не задавать столбцам размеры, то по-умолчанию у них будет `auto`.
- `grid-template-rows` - практически никогда не используем и не прописываем размеры строкам, обычно строки имеют высоту зависящую от контента или тогда когда высота должна быть жадной и разрастись `1fr` на всё пространство или тогда когда высота константна (постоянна).
- `grid-template-columns` - 

HTML:

    <div class="list">
      <div class="list__item">
        <img src="img/bmw.png" width="400" height="300" alt="БМВ 1">
        <h2>Заголовок 1</h2>
        <p>Имя, имя, имя, имя 1</p>
      </div>
      <div class="list__item">
        <img src="img/bmw.png" width="400" height="300" alt="БМВ 2">
        <h2>Заголовок 2</h2>
        <p>Имя, имя, имя, имя 2</p>
      </div>
      <div class="list__item">
        <img src="img/bmw.png" width="400" height="300" alt="БМВ 3">
        <h2>Заголовок 3</h2>
        <p>Имя, имя, имя, имя 3</p>
      </div>
      <div class="list__item">
        <img src="img/bmw.png" width="400" height="300" alt="БМВ 4">
        <h2>Заголовок 4</h2>
        <p>Имя, имя, имя, имя 4</p>
      </div>
    </div>

## Создаём грид
Кейс с 4мя элементами, пример, но тут по идее гриды не нужны, можно сделать на флексах.

    .list {
      display: grid;
      gap: 16px;
    }

Расписываем сетку гридов, для явного объявления сетки существует два свойства, которые показывают как сетка должна выглядеть:

    .list {
      display: grid;
      gap: 16px;

      grid-template-rows: значения свойства; /* строки обычно не используют */
      grid-template-columns: значения свойства;
    }

Значения свойств объявления сетки `grid-template-rows`, `grid-template-columns` может быть различным.

    .list {
      display: grid;
      gap: 16px;
      grid-template-rows: 200px 400px;
      grid-template-columns: 200px 400px;
    }

- есть еще свойство auto - по контенту, по-умолчанию.
- есть еще свойство max-content.
- grid-template-columns: minmax(25%, 100px) - стремится к максимуму `25%`, опускается не ниже `100px`.
- minmax(25%, 100px) - аналог `flex-basis: 100px` и `width: 25%`.
- grid-template-columns: none - отключить столбцы.

Если не задать `grid-template-rows` то он будет равен `grid-template-rows: 1fr 1fr;`  
Если бы у `list` была высота, то `1fr` работал как `flex-grow` (первая строка в два раза больше второй):

    .list {
      display: grid;
      gap: 16px;
      /* grid-template-rows: 200px 400px; */
      grid-template-rows: 2fr 1fr;
      grid-template-columns: 200px 400px;
      height: 800px;
    }

Правильный вариант, без grid-template-rows и без высоты:

    .list {
      display: grid;
      gap: 16px;
      grid-template-columns: 200px 400px;
    }

Задаём выравнивание элементам грида, например `justify-content: space-evenly`:

    .list {
      display: grid;
      gap: 16px;
      grid-template-columns: 300px 300px;
      justify-content: space-evenly;
      background-color: #3498db;
    }

Еще свойства грида обертки:
- justify-content
- align-content
- align-items
- justify-items

Свойства грида эелемент:
- align-self

Окончательный CSS:

    /* grid */
    .list {
      display: grid;
      gap: 16px;
      grid-template-columns: 300px 300px;
      justify-content: space-evenly;
      background-color: #3498db;
    }
    .list__item {
      background-color: #bdc3c7;
      text-align: center;
    }
    .list__item img {
      display: block;
      margin: 0 auto;
    }
    .list__item h2, .list__item p {
      margin: 0;
    }

## Кейс где нужен грид
Например 6 товаров по два в ряд, занимают всё пространство по 50% в ряду. Добавляем 7 товар, он займет на 4 строке всё пространство 100%. Как сделать чтобы он занял 50%. Нужен вертикальный контроль.

- `grid-template-columns: repeat(3, 300px)` - создать 3 столбца по 300px, в адаптиве снизу появится полоса прокрутки
- `grid-template-columns: repeat(auto-fit, 300px)` - auto-fit в адаптиве снизу не появится полоса прокрутки, есть еще auto-fill в этом кейсе они работают одинаково,
- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` - minmax высчитывает размер элементов на лету в даипазоне, минимум 300px размер элемента, максимум 1fr, идеальный адаптив без медиа запросов,
- 1fr - аналог жадности как во flex-grow, одну часть занимай, но если есть свободное пространство, захватывай,

## Создаём каркас сайта
Создаём каркас сайта, перестраиваем его части.

- `grid-template-columns: 1fr 200px` - main по ширине занимает всё свободное пространство, aside - 200px,
- `grid-template-rows: 50px 150px 1fr 50px` - 50px - высота меню, 150px - высота шапки, 1fr - жадный main, 50px - высота подвала,

Обычно высоты фиксированными не делают, тут только для примера. И `grid-template-rows` не используют.

HTML:

    <div class="layout">
      <nav class="layout__nav">nav</nav>
      <header class="layout__header">header</header>
      <main class="layout__main">main</main>
      <aside class="layout__aside">aside</aside>
      <footer class="layout__footer">footer</footer>
    </div>

CSS:

    .layout {
      display: grid;
      gap: 16px;

      grid-template-rows: 50px 150px 1fr 50px;
      /* grid-template-rows: auto auto 1fr auto; в реальном проекте*/
      grid-template-columns: 1fr 200px;

      max-width: 1280px;
      min-height: 100vh; /* растягиваем layout на всю высоту */
      margin: 0 auto;
      padding: 0 32px;
      color: #ecf0f1;
    }
    .layout__nav {
      background-color: #e74c3c;
    }
    .layout__header {
      background-color: #34495e;
    }
    .layout__main {
      background-color: #2ecc71;
    }
    .layout__aside {
      background-color: #f1c40f;
    }
    .layout__footer {
      background-color: #2c3e50;
    }

Пока макет получается корявым, исправим это.

Есть два варианта сделать это `числовой` (сложнее) или `именованный`.

### Числовой
Например для nav чтобы он встал на своё место, нужно прописать `grid-area: 1 / 1 / 1 / 3`. Для header `grid-area: 2 / 1 / 2 / 3` - начинаем со второй строки первой вертикали, заканчиваем на второй строке третьей вертикали (у двух столбцов три вертикали). Для main `grid-area: 3 / 1 / 3 / 2`. Для aside `grid-area: 3 / 2 / 3 / 3`. Для footer `grid-area: 4 / 1 / 4 / 3`.

    .layout__nav {
      grid-area: 1 / 1 / 1 / 3;
      background-color: #e74c3c;
    }

### Именованный
Вместо чисел можно задать областям произвольные имена, например для nav: `grid-area: nav`, header `grid-area: header` и т.д. Также обёртке надо будет задать свойство `grid-template-areas`:

    grid-template-areas: 
      "nav nav" /* Занять сверху макета два столбца */
      "header header"
      "main aside"
      "footer footer";

    .layout__nav {
      grid-area: nav;
      background-color: #e74c3c;
    }

### Медиазапрос
Перенесли aside под main и задали ему в `grid-template-rows` высоту 100px, добавив новую строчку.

    @media screen and ( max-width: 900px ) {
      .layout {
        grid-template-rows: 50px 150px 1fr 100px 50px;

        grid-template-areas:
          "nav nav" /* Занять сверху макета два столбца */
          "header header"
          "main main"
          "aside aside"
          "footer footer";
      }
    }

Пример с переносом меню в лево. Изначально задаём три столбца где `50px` это пространство для будушего nav. В grid-template-areas этот столбец сначала заполняем nav, header, main, footer:

    .layout {
      display: grid;
      gap: 16px;

      grid-template-rows: 50px 150px 1fr 50px;
      grid-template-columns: 50px 1fr 200px;

      grid-template-areas: 
        "nav nav nav" /* Занять сверху макета два столбца */
        "header header header"
        "main main aside"
        "footer footer footer";

      max-width: 1280px;
      min-height: 100vh; /* растягиваем layout на всю высоту */
      margin: 0 auto;
      padding: 0 32px;
      color: #ecf0f1;
    }

Медиазапрос теперь меню слева на экранах 900px и меньше:

    @media screen and ( max-width: 900px ) {
      .layout {
        /* Убираем первую строку */
        grid-template-rows: 150px 1fr 50px;

        grid-template-areas:
          "nav header header"
          "nav main aside"
          "nav footer footer";
      }
    }
