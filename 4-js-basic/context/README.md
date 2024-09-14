# Контекст
Контекст в JavaScript

- Что такое контекст
- Что такое this
- call(), apply() и bind() - подмена контекста при вызове функции

## Пример с контекстом и this
this внутри функции ссылается на объект в котором вызван:

    window.addEventListener('load', function() {
      let some = document.querySelector('.some');
      let other = document.querySelector('.other');

      some.addEventListener('mouseenter', changeColor); // this ссылается но some
      other.addEventListener('click', changeColor); // this ссылается но other
    });

    // Функция запускается в контексте того объекта на котором происходит событие 
    function changeColor() {
      let colors = ['#f00', '#ff0', '#0f0'];
      let num = Math.floor(Math.random() * colors.length);
      this.style.color = colors[num];
    }

Контекст объекта window:

    foo(); // любая функция у которой нет родителя

Контекст объекта:

    const a = { foo(){} } // Метод объекта
    a.foo();

    let c = a.foo;
    c(); // Контекст объекта window
