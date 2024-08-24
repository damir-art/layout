# Товары
Данный компонент создаётся с помощью `display: inline-block`, по-умолчанию инлайн блоки выравниваются через `vertical-align: baseline`.

`aside` и `main` если они `display: inline-block`, нужно выравнивать через `vertical-align: top`.

Элементы внутри категории: посты, товары, предложения и т.п. Ширину элементов обычно задают в процентах.

## HTML

      <div class="goods">
        <div class="goods__item">Товар 1</div>
        <div class="goods__item">Товар 2</div>
        <div class="goods__item">Товар 3</div>
        <div class="goods__item">Товар 4</div>
        <div class="goods__item">Товар 5</div>
        <div class="goods__item">Товар 6</div>
        <div class="goods__item">Товар 7</div>
        <div class="goods__item">Товар 8</div>
      </div>

## CSS
Через `display: inline-block`:

    /* Список товаров */
    .goods {
      margin: 0 auto;
      width: 1200px;
      background-color: #9b59b6;
      font-size: 0; /* чтобы убрать пробелы между элементами */
      overflow: hidden; /* чтобы у крайних элементов не выпадали margin */
    }
    .goods__item {
      background-color: #f1c40f;
      width: 300px;
      display: inline-block;
      font-size: 16px;
    }

Ширину элемента уменьшаем на `margin`, `padding` и `border` минусовать не надо:

    .goods {
      margin: 0 auto;
      padding: 8px 0;
      width: 1200px;
      background-color: #9b59b6;
      font-size: 0; /* чтобы убрать пробелы между элементами */
      /* overflow: hidden; чтобы у крайних элементов не выпадали margin, не нужно если есть padding */
    }
    .goods__item {
      background-color: #f1c40f;
      /* width: 300px; */
      width: 284px; /* минусуем (8px * 2) */
      display: inline-block;
      font-size: 16px;
      margin: 8px;
      padding: 8px;
      border: 4px solid #e67e22;
      box-sizing: border-box;
    }

Делаем адаптивным без медиа-запросов (для большей эффективности можно добавить медиа-запросы):

    .goods {
      margin: 0 auto;
      padding: 8px 0;
      /* width: 1200px; */
      max-width: 1200px;
      background-color: #9b59b6;
      font-size: 0; /* чтобы убрать пробелы между элементами */
      /* overflow: hidden; чтобы у крайних элементов не выпадали margin, не нужно если есть padding */
    }
    .goods__item {
      background-color: #f1c40f;
      /* width: 300px; */
      /* width: 284px; минусуем (8px * 2) */
      width: calc(25% - 16px); /* 25% минус (margin * 2) */
      display: inline-block;
      font-size: 16px;
      margin: 8px;
      padding: 8px;
      border: 4px solid #e67e22;
      box-sizing: border-box;
    }

Не забываем про отрицательные `margin` благодаря которым можно прижать элементы к краям экрана при необходимости.

## media-query
Идеальный адаптив:

    @media ( max-width: 900px ) {
      .goods__item {
        width: calc(100% / 3 - 16px);
      }
    }

    @media ( max-width: 700px ) {
      .goods__item {
        width: calc(100% / 2 - 16px);
      }
    }

    @media ( max-width: 500px ) {
      .goods__item {
        width: calc(100% - 16px);
        /* width: auto; не для inline-block */
      }
    }

Если поставить display: block; то вертикальные margin не будут суммироваться:

    @media ( max-width: 500px ) {
      .goods__item {
        display: block;
        width: auto;
        margin-bottom: 10px;
      }
    }

## section (типа сетка)
Можно контейнер обернуть `section` и дать ему фон, а можно воспользоваться `padding-left and right: calc( 50% - ширина контейнера / 2 )`.

Через `section` и `.container`:

HTML:

    <main>
      <div class="goods-wrap">
        <div class="goods">
          <div class="goods__item">Товар 1</div>
          <div class="goods__item">Товар 2</div>
          <div class="goods__item">Товар 3</div>
          <div class="goods__item">Товар 4</div>
          <div class="goods__item">Товар 5</div>
          <div class="goods__item">Товар 6</div>
          <div class="goods__item">Товар 7</div>
          <div class="goods__item">Товар 8</div>
        </div>
      </div> <!-- .goods-wrap -->
    </main>

CSS:

    /* Список товаров */
    main {
      background-color: #3498db;
    }
    .goods-wrap {
      margin: 0 auto;
      max-width: 1200px;
    }
    .goods {
      padding: 8px 0;
      background-color: #9b59b6;
      font-size: 0; /* чтобы убрать пробелы между элементами */
    }

section, header, nav, main, footer и т.п.:

    main {
      background-color: #3498db;
      /* min-height: 150px; можно не ставить */
    }
    .goods-wrap {
      margin: 0 auto;
      max-width: 1200px;
      padding: 0 32px; /*  поля от края экрана, можно не ставить или уменьшить на малых экранах */
    }

Избавляемся от крайних `margin` у крайних элементов, которые прикасаются к обёртке (.goods), чтобы элементы были выстроены по направляющим страницы, например чтобы логотип в шапке был на таком же расстоянии от края как и товары:

    .goods {
      margin: 0 -8px;
    }
