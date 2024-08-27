# CSS переменные
- цвета
- отступы

:root добавляем в base.css,  
переменную можно изменить в каком-нибудь section или в медиазапросе,

component/css-template/base.css:

    /* 
      создаём переменные в глобальной зоне видимости,
      к ним можно получить доступ например из другого файла стилей
      расположенного ниже в теге head 
    */
    :root {
      --green: #1D9D73;
      --offset: 15px;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 calc(var(--offset) * -1);
    }

    .col {
      margin: var(--offset);
      box-sizing: border-box;
    }

    .btn-green {
      background: var(--green);
      color: #fff;
    }

    /* переопределяем отступы в переменной внутри конкретного section */
    section {
      --offset: 8px;
    }

    @media screen and (max-width: 400px) {
      /* Переменные можно переопределять, например в медиа запросах */
      :root {
        --offset: 8px;
      }
    }

Пример offset в `calc()`:

    width: calc( 100% / 2 - 30px );
    width: calc( 100% / 2 - var(--offset) * 2 );
