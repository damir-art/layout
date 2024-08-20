# Анимации в CSS

## transition
`transition` - плавное изменение некоторых свойств (которые имеют промежуточное значение): прозрачность, цвет, длина, ширина, положение, расстояние, размер и т.п.

    elem:hover subelem {
      transition: opacity 0.3s; // вместо opacity можно написать all или через запятую другие свойства
      opacity: 0;
    }

    subelem {
      opacity: 1;
    }

## transform
`transform` - различные трансформации элемента: rotate (вращение), scale (масштабирование), translate (перемещение), skew (скашивание, наклон).

    .bmw__link:hover::before{
      transform: translateX(-16px) rotate(180deg);
    }
    .bmw__link:hover::after{
      transform: translateX(16px) rotate(-180deg);
    }

    .bmw__link::before, .bmw__link::after  {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      opacity: 0;
      transition: opacity 0.5s, transform 0.5s;
    }
    .bmw__link::before {
      border-right: 16px solid #ecf0f1;
      transform: translateX(-16px);
    }
    .bmw__link::after {
      border-left: 16px solid #ecf0f1;
      transform: translateX(16px);
    }
