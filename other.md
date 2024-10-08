# Разное
- SVG-код тоже делать блочным или обертке присвоить flex-display, чтобы не было пробела после SVG-кода, как от inline-block у img,
- фиксированные размеры `height` и `width` практически никогда не используются, но можно ставить фиксированную ширину если ширина меньше самого маленького экрана,
- div и span это блочный и строчный теги, не имеют семантики,
- блочные теги нельзя оборачивать строчными (можно ссылкой),
- блочные теги нельзя оборачивать блочными (кроме div или семантическими),
- что куда можно вкладывать можно посмотреть в content-categories.md, а также сообщит валидатор: https://validator.w3.org/,
- тег div ставится там, где нужна не смысловая (семантическая) обертка, а стилистическая,
- атриубуты в тегах могут располагаться в любом порядке,
- геометрические фигуры на CSS: https://habr.com/ru/articles/126207/,
- `margin: 5%` для элемента, даст 5% от ширины родителя а не элемента, можно поставить `width` элемента тоже в процентах,
- у веб-дизайнера (Figma, Photoshop) размеры отступов зависят от базового размера шрифта,
- 4k мониторы это не 4к пикселей в ширину, это обычно плотность пикселей 2x, нужны более качественные изображения,
- `./image` аналогичен `image`
- выравнивание иконки в центре дива (если див круг): `flexbox` - justify-content: center; align-items: center;, `display: inline-block` - text-align: center; line-height: равный высоте дива;,

Еще пример с `display: inline-block`, центрирование иконки внутри квадрата:

    .square {
      /* div */
      width: 128px;
      height: 128px;
      text-align: center;
      line-height: 128px;
    }
    .icon {
      /* img */
      vertical-align: middle;
    }

- отступы между блоками завосят от иерархии блоков, например отступы между карточками товара должны быть больше чем отступы между текстом и изображением внутри карточки товара,
- двигать иконки, изображения, элементы относительно себя, можно с помощью `position` или `transform`,
- ширина пробела равна примерно 4 пикселя, зависит от шрифта,
- пиксель перфект (pixel perfect) делают только для основного экрана, для мобильных уже не делают,
- `gap` можно проставить только по горизонтали, а по вертикали использовать `margin`,
- высота родительского элемента, определяется суммой высот вложенных элементов,
- при mobile first мы в адаптиве не отменяем свойства а добавляем,
- в JavaScript только одна единица измерения, это пиксели, получая данные от CSS в JaavScript они переводятся в пиксели и строкой.

## Разница между end и flex-end
Если вы хотите выровнять элементы вдоль главной оси flex-контейнера так, чтобы они располагались в конце этой оси, вам следует использовать `justify-content: flex-end`. Это свойство специально предназначено для выравнивания элементов вдоль главной оси, обеспечивая их размещение в конце этой оси.

`justify-content: end` также может работать в некоторых ситуациях, но его поведение может отличаться от ожидаемого. В контексте flexbox, `justify-content: end` может не всегда приводить к желаемому результату, особенно если вы хотите точно контролировать расположение элементов вдоль главной оси.

Поэтому, для точного выравнивания элементов в конце главной оси flex-контейнера, рекомендуется использовать `justify-content: flex-end`.
