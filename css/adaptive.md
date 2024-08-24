# Адаптивность
- у ширины сайта есть обычно максимальный `1920px` размер в пикселях и минимальный `320px`, в процентах ширину сайта не задают,
- `box-sizing: border-box`
- `max-width`
- `calc(25% - 8px)` - позволяет работать с разными единицами измерения, где например `25%` это ширина элемента, а `8px` это отступы у margin, 
- медиа-запросы,
- контейнер в пикселях `max-width`,
- элементы контейнера в процентах,
- прописать `<meta name="viewport" content="width=device-width, initial-scale=1.0">` для смартфонов,
- существует два способа задания адаптивности: `desktop first` - max-width или `mobile first` - min-width,

## calc()
Формула calc():

    calc( 100% / количество элементов - margin * 2 )
    width: auto = calc( 100% - margin * 2 ) /* width: auto; не для inline-block */

Размеры боковой колонки и основного контента. Боковая колонка - фиксированная ширина, основной контент в процентах (инлайн блоки не тянутся по высоте, как флексбоксы):

HTML:

    <section>
      <div class="container">
        <aside class="aside-left">Боковая колонка</aside>
        <main class="main">Основной контент</main>
      </div>
    </section>

CSS:

    .aside-left {
      display: inline-block;
      width: 200px;
    }

    .main {
      display: inline-block;
      width: calc( 100% - 200px );
    }
