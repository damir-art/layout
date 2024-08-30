# flex-grow (жадность), flex-shrink (уступчивость)
Рссмотрим пример из двух col, где в одном коле изображение, а в другом текст. Проблема, при адаптиве когда ширина экрана уменьшается, ширина и высота изображения тоже уменьшаются, а высота текста увеличивается при уменьшении ширины.

Решения:
- можно при адаптиве убрать изображение и сделать его фоном у .col,
- margin и размер шрифта заголовка задавать в `vw`,

Пример решения:

    .row {
      display: flex;
      gap: 30px;
    }

Размер для элементов описывается триадой: `flex-basis` (базовый размер), `flex-shrink` (уступчивость элемента), `flex-grow` (захватить свободное пространство). Переносить элементы лучше не через flex-basis, а через медиа запрос.

    /* 
      flex: flex-grow flex-shrink flex-basis;
      flex: 0 1 auto; /* по-умолчанию */
    */

    .col__image{
      flex: 0 1 470px;
    }

    .col__text{
      flex: 1 1 425px;
    }

    @media screen and (max-width: 800px){
      .row{
        flex-wrap: wrap;
      }
    }

Если элементов 3,6,12 то сетка не нужна.  
Если числа другие или неизвестно, то сетка нужна.
Если лого и меню, то сетка без задания ширин.

## Центровка лого и меню в мобилке
https://habr.com/ru/articles/473186/

Пример лого и меню, в двух колах, в строке. При уменьшении экрана лого и меню соприкасаются и меню переходит вниз и лого с мню становятся по центру. Если в меню добавить пункт, то брейк поинт переноса нужно менять, потому что при переносе меню на следующую строчку она некоторое время бдует находится слева, а не по центру.

- Если у `margin` есть `auto` она занимает всё свободное пространство которое может занять.
- `margin-left: auto` оттолкнет меню к правому краю.
- Меню при переходе на вторую строку будет прижата к правому краю.
- При `flex-grow: 1`, меню прижмется на второй строке к правому краю.
- При `flex-grow: 0.5`, меню встанет по середине. Съедает половину пустого пространства.
- По итогу добавляем `margin-left: auto` только логотипу, `justify-content: flex-end` только меню, и обоим `flex-grow: 0.5`. У обоих элементов отсутствует `flex-basis`.
- Код снизу хорош тем, что без разницы сколько будет пунктов меню. Код от этого останется таким же.

Код:

    body{
      margin: 0;
    }

    img{
      max-width: 100%;
      height: auto;
    }

    .container{
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 15px;
    }

    .section-header{
      background: #232324;
      padding: 15px 0;
    }

    .header-line{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 30px;
    }

    .header-logo{
      margin-left: auto;
      flex-grow: 0.5;
    }

    .header-logo__icon{
      width: 300px;
    }

    .header-menu{
      display: flex;
      gap: 20px;
      flex-grow: 0.5;
      justify-content: flex-end;
    }

    .header-menu__link{
      color: #fff;
      text-decoration: none;
      font-size: 20px;
    }


    /* .header-logo{
      flex-basis: 300px;
    }

    .header-menu{
      display: flex;
      gap: 20px;
    }

    .header-menu__link{
      color: #fff;
      text-decoration: none;
      font-size: 20px;
    }

    @media screen and (max-width: 730px){
      .header-line{
        justify-content: center;
      }

      .header-menu{
        flex-basis: 100%;
        justify-content: center;
      }
    } */

    <section class="section-header">
      <div class="container">
        <div class="header-line">
          <div class="header-logo">
            <img src="img/logo.png" alt="" class="header-logo__icon">
          </div>
          <div class="header-menu">
            <div><a href="#" class="header-menu__link">Item 1</a></div>
            <div><a href="#" class="header-menu__link">Item 2</a></div>
            <div><a href="#" class="header-menu__link">Item 3</a></div>
            <div><a href="#" class="header-menu__link">Item 4</a></div>
            <div><a href="#" class="header-menu__link">Item 5</a></div>
          </div>
        </div>
      </div>
    </section>