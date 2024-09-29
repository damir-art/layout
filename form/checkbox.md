# Чексбокс
Работаем с чекбоксами.

## Стилизация чекбоксов
Чтобы стильно оформить чекбоксы в HTML с использованием CSS, можно использовать следующий подход.

Скрыть стандартный чекбокс:
- Сначала создайте скрытый чекбокс с помощью атрибута `hidden`

Код:

    <input type="checkbox" id="cb" hidden />

Создать стилизованный элемент:
- Затем создайте элемент `<label>` с классом `.custom-cb`, который будет служить оболочкой для стилизованного чекбокса

Код:

    <label for="cb" class="custom-cb"></label>

Настроить стиль:
- В вашем CSS-файле определите стиль для класса `.custom-cb`

Код:

    .custom-cb {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: #ddd;
    }

Добавить псевдоэлемент для отображения галочки:
- Используйте псевдоэлемент :before для отображения галочки при активации чекбокса

Код:

    .custom-cb::before {
      content: '';
      display: none;
      position: absolute;
      width: 12px;
      height: 12px;
      background: white;
    }

Отображение галочки при активации чекбокса:
- Примените правило, чтобы отображать галочку при активации чекбокса

Код:

    #cb:checked + .custom-cb::before {
      display: block;
    }

Добавление контента для галочки:
- Добавьте контент для галочки с помощью псевдоэлемента :after

Код:

    .custom-cb::after {
      content: '✔';
      display: none;
      color: green;
      font-size: 18px;
      position: absolute;
      top: 0;
      left: 4px;
    }

Отображение галочки при активации чекбокса:
- Аналогично предыдущему шагу, примените правило для отображения галочки при активации чекбокса

Код:

    #cb:checked + .custom-cb::after {
      display: block;
    }

Интерактивность:
- Добавьте стили для состояний `:hover`, `:focus` и `:disabled` для обеспечения интерактивности

Код:

    .custom-cb:hover {
      box-shadow: 0 0 3px #666; /* Тени дают ощущение глубины */
    }
    .custom-cb:focus {
      outline: 2px solid blue; /* Это невозможно пропустить! */
    }
    #cb:disabled + .custom-cb {
      opacity: 0.5; /* Мягкое "исчезновение", если элемент недоступен */
    }

Использование SVG для создания высококачественной графики:

    input[type="checkbox"]:checked {
      background: url('checkmark.svg') no-repeat center center;
      background-size: contain;
    }

Этот подход позволяет использовать SVG-графику вместо растровых изображений, обеспечивая высокое качество и масштабируемость.
