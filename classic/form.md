# Формы
https://htmlacademy.ru/blog/html/form-template  
https://www.youtube.com/watch?v=sszC4j4Wcpo

## checkbox
У чекбоксов есть состояния: отмечен, не отмечен. К этим состояниям можно привязаться через CSS.

    <input class="menu__toggle" type="checkbox" name="for-menu">

CSS:

    input[name] {
      display: none;
    }
    input[name="for-menu"] {
      display: none;
    }

    // Скрываем меню, если чекбокс отмечен
    .menu__toggle:checked + .menu__list {
      display: none;
    }

## label
Создаём тег label, внутри него прописываем текст, связываем label и checkbox через for и id. Жмём по тексту внутри label и скрываем меню. При этом чекбокс можно скрыть.

    <label for="burger">Бургер</label>
    <input id="burger" class="menu__toggle" type="checkbox" name="for-menu">

## button

    .button {
      display: flex;
      padding: 0;
      width: 200px;
      height: 60px;
      align-items: center;
      justify-content: center;
      border: none;
      font-family: "Rubik", sans-serif;
      font-size: 18px;
      font-weight: 300;
      cursor: pointer;
    }

    /* Тень кнопки при нажатии */
    .button:active {
      box-shadow: 2px 2px 10px rgba(44, 62, 80, 0.5) inset;
    }
