# Товары
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

    .goods {
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
