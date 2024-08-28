# Псевдоэлементы
Псевдоклассы это state. Псевдоэлементы это возможность добавить в разметку новые элементы через CSS, которые видны визуально но отсутствуют семантически. Псевдоэлементы по-умолчанию строчные.

Не связаны с состоянием (возможность для элемента добавить разметки, до или после него):
- ::after
- ::before

Пример:

    li::before {
      content: '<-';
    }
    li::after {
      content: '->';
    }

after и before можно применять при обтекании элементов или в магазине для товаров ставить: новика, скидка и т.п.

Задаём стили созданному элементу:

    li::after {
      content: '->';
      color: #ecf0f1;
      background-color: #333333;
      display: inline-block;
      padding: 4px 8px;
    }

## Задаём иконку списку

Первый способ через `background`:

    .elem::before {
      content: '';
      display: block;
      width: 50px;
      height: 50px;
      background
    }

Второй способ через `url`:

    .elem::before {
      content: url(../img/icon.png);
    }

## Создаём треугольник
Создаём треугольник и вставляем его перед строчным элементом. Созданному треугольнику добавляем `displaу: inline-block`.

    .bmw__link::before {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-right: 16px solid #ecf0f1;
      border-bottom: 8px solid transparent;
    }

## Задаём полупрозрачный фон поверх изображения
У section есть изображение, наложим на это изображение полупрозрачный фон:

    section {
      background: url("../img/header__background.jpg") no-repeat center;
      padding: 128px 0;
      position: relative;
    }
    section::before {
      content: '';
      display: block;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .container {
      position: relative;
      z-index: 2;
    }

По-умолчанию у элементов с `position` z-index = 1. Положительные числа ближе к человеку, отрицательные дальше. Контейнеру с текстом задайте `position: relative` и `z-index: 2`. У браузеров также есть еще цветовые CSS фильтры.
