# ООП
Обычно в JavaScript кодят с помощью функций, при верстке сайтов, если что-то сложное, например изучить фреймворки и писать с помощью них, то нужно изучать ООП.

Раньше вместо классов использовали функции конструкторы объектов.

Оглавление:
- Объект - `object.md`
- Prototype - `prototype.md`

JavaScript это один из немногих языков в котором идею ООП можно реализовывать без ООП, за счет принципа замыканий.

Чтобы функцию переписать в ООП, желательно избавиться внутри функции, которые подвисают без возможности к ним обратиться, например анонимные функции обработчиков событий.

Когда проектируется класс, и нет готового работающего кода в виде функции, он сначала проектируется на уровне интерфейса (методы, возможности которые он будет давать). Полезно представлять любой создаваемый класс, в виде объекта реального мира.

Слайдер созданный с помощью ООП можно посмотреть тут: `component/slider/slider-oop.md`

Объект является корнем к понимаюнию JavaScript. Например массив является объектом, также и null.

## Смысл ООП
Зачем например создавать слайдер в виде класса? Чтобы иметь возможность разместить на странице два и более слайдера, которые используют один и тот же код.
