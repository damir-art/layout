# flexbox
https://dmitrylavrik.ru/flexbox-generator  
https://dmitrylavrik.ru/training/process/flexbox-grid - тренажер

`display: flex`
- контейнер
- ячейки контейнера, элементы

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
      padding: 24px 0;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 32px;
    }
    .row {
      margin: 0 -16px;
      display: flex;
      flex-wrap: wrap; /* почти всегда нужен */
      /* justify-content: space-between;
      gap: 24px;
      align-items: center; */
    }
    .col {
      margin-left: 16px;
      margin-right: 16px;
      box-sizing: border-box;
    }
    .col.elem {
      width: calc( 100% / 4 - 32px);
    }
