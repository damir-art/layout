# Простые флексы
Самая правильна сетка offset = 16px:

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--offset); /* не дают подходить к краям экрана */
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 calc(var(--offset) * -1); /* маржин положительный от .col проваливается в маржин отрицательны от .row */
      /* 
        justify-content: space-between;
        gap: 24px;
        align-items: center;
      */
    }
    .col {
      padding: 0 var(--offset);
      /* margin: 0 var(--offset); */
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

Где вместо `1` ставят количество колонок. В медиазапросах меняем только `1` на другое число.

## Что не так с gap?
Нечего вычитать: width: calc( 100% / 12 * 3 - `var(--offset) * 2`); - элемент не сможет например тут занять ровно четверть экрана. Надо в этом случае начинать думать сколько элементов в строке и сколько между ними зазоров.

Если элементов 4 и между ними по 30px, то надо 90 / 4 = 22,5

    calc( 100% / 12 * 3 - 22.5px);
    (n - 1) * 12 / n - эту формулу можно использовать в Sass
    n - количество колонок
    n - 1 - количество зазоров между колонками

gap используют в гридах и там где не задают резиновый width через calc(), где col не заполняют всё пространство row. Например лого + меню, в этой строке можно использовать gap.

    calc( 100% / 12 * 5 - 30px); // col занимает 5 колонок из 12
    calc( 100% / 12 * 7 - 30px); // col занимает 7 колонок из 12
