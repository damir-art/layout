# Кнопка вверх
Чтобы создать кнопку, которая появляется при прокрутке колесом вниз и возвращает пользователя в начало страницы при клике, вам понадобится следующий код.

## Вставка кнопки в разметку
Вставьте элемент кнопки в конец вашей HTML-разметки:

    <div class="go-top">▲</div>

Символ ▲ можно заменить на любое изображение стрелки или другой подходящий символ.

## Стилизация кнопки
Определите стили для кнопки в вашем CSS-файле.

    .go-top {
      position: fixed;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      display: none;
      font-size: 20px;
      color: rgba(0, 51, 153, 0.5);
      border: 1px solid rgba(0, 51, 153, 0.5);
      background-color: rgba(0, 51, 153, 0.1);
      padding: 15px 10px;
    }

    /* Модификатор для отображения кнопки */
    .go-top--show {
      display: block;
    }

## Скрипт для кнопки
Добавьте скрипт, который будет управлять появлением и поведением кнопки.

    // Считываем кнопку
    const goTopBtn = document.querySelector('.go-top');

    // Обработчик на скролл окна
    window.addEventListener('scroll', trackScroll);

    // Обработчик на нажатие кнопки
    goTopBtn.addEventListener('click', goTop);

    // Функция для отслеживания прокрутки
    function trackScroll() {
      // Вычисляем положение от верхушки страницы
      const scrolled = window.pageYOffset;

      // Считаем высоту окна браузера
      const coords = document.documentElement.clientHeight;

      // Если вышли за пределы первого окна
      if (scrolled > coords) {
        // Кнопка появляется
        goTopBtn.classList.add('go-top--show');
      } else {
        // Иначе исчезает
        goTopBtn.classList.remove('go-top--show');
      }
    }

    // Функция для возврата в начало страницы
    function goTop() {
      // Пока не вернулись в начало страницы
      if (window.pageYOffset > 0) {
        // Прокручиваем наверх
        window.scrollBy(0, -75);

        // Второй аргумент - скорость
        setTimeout(goTop, 0);
      }
    }

В этом скрипте используется метод `scrollBy` для плавного возврата в начало страницы. Значение -75 определяет скорость прокрутки, которую можно изменить для достижения желаемого эффекта.
