# Изображения

Адаптивное изображение:

    img {
      height: auto;
      max-width: 100%;
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
