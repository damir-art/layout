# Изображения
- если задать размеры тегу img в HTML и выставить адаптивные свойства в CSS, то размеры в HTML будут отвечать за пропорции и резервирование места при загрузке страницы, а не реальные размеры,

Адаптивное изображение:

    img {
      max-width: 100%;
      height: auto;
    }

Фон:

    section {
      background: url(../img/header.jpg) no-repeat center;
      /* padding: 192px 0; */
      text-align: center;
    }

    /* на малых экранах padding будет уменьшаться */
    section .container .wrapComponent {
      padding: 20% 0;
    }
    /* padding рассчитывается от ширины .container */
    /* margin тоже можно поставить вместо padding */
