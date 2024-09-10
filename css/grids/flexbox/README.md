# flexbox
https://dmitrylavrik.ru/flexbox-generator  
https://dmitrylavrik.ru/training/process/flexbox-grid - тренажер

`display: flex`
- контейнер
- ячейки контейнера, элементы
- у флексбокса, элементы по-умолчанию занимают ширину по контенту, `flex-basis: auto;`

Если `inline-block` мы задаем элемнтам внутри контейнера, то `display: flex` мы задаём контейнеру.

- space-around - расстояние между элементами в два раза больше чем по краям,
- space-evenly - расстояние между элементами и по краям одинаково,
- align-items - выравнивание для всех элементов (правило контейнера),
- align-self - выравнивание для конкретного элемента (правило элемента),
- flex-grow - уровень сжатия,
- flex-shrink - уступчивость,
- flex-basis - базовый размер элемета, размер который он не готов отдавать

Чтобы флекс элемент не сжимался, можно еще использовать:

    .left {
      /* не сжимается */
      width: 128px;
    }
    .right {
      /* сжимается */
      width: calc( 100% - 128px + горизонтальный margin если он есть у .left );
    }

## Сетка

    .section {
      padding: 64px 0;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 32px;
    }
    .row {
      display: flex;
      gap: 24px;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 -16px;

    }
    .col {
      padding: 0 16px;
      box-sizing: border-box;
    }
    .col.elem {
      width: calc( 100% / 4 - 32px);
    }

calc() с вычмслением ширины для col, используем только для одинаковых блоков по ширине стоявших в ряд, для меню и логотипа например не используем.

## Прибиваем футер к низу
Прибиваем футер к низу с помощью флексов:

    html или любому контейнеру:
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    Для дива который прибивает футер к низу, например main:
      flex-grow: 1;
    Или футеру: margin-top: auto;
