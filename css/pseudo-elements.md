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
