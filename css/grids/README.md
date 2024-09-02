# Сетка
Сетку можно создавать несколькими способами:
- Старые: таблица, float, inline-block `component/goods.md`
- Новые: flex, grid

## inline-block
Два `inline-block` стоящих рядом можно выровнять друг относительно дргуга присвоив им `vertical-align: middle`, например изображение высотой 50px и рядом текст высотой 18px.

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 32px;
    }
    .row {
      margin: 0 -16px;
      font-size: 0;
    }
    .col {
      display: inline-block;
      vertical-align: top;
      margin-left: 16px;
      margin-right: 16px;
      box-sizing: border-box;
      font-size: 16px;
    }

Элемент находящийся внутри `col`:

    .elem {
      width: calc( 100% / 4 - 32px);
    }

`32px` - margin * 2

## flexbox vs grid
- grid удобен при верстке внешнего макета: header, aside, main, footer,
- grid удобен при сложно работе по двум осям, например сделать колонку на две строки, а потом её в адаптиве перестроить,
