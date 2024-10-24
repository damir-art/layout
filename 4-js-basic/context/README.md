# Контекст
Контекст в JavaScript

https://youtu.be/0TLnIQbk5qo?feature=shared&t=3604

this - ссылка на текущий контекст вызова функции, где функция вызвана там и её контекст, туда и обращается this. Когда вызывается функция с круглыми скобками на конце, она всегда вызывается в контексте Window, и this у неё равна Window.

Контекст это то на что указывает слово this.

setInterval(foo, time) - setInterval вызывает foo в контексте объекта window (в глобальном контексте).  
Если используется анонимная функция, то в ней тот контекст с которым её вызовут.  
Если используется стрелочная функция, то в ней контекст такой же в котором она написана.  
Реальный смысл от стрелочных функций это контекст.  
Контекст теряется всегда, когда нашу функцию вызывает кто-то другой: setTimeout, setInterval.  
В стрелочной функции this ссылается на то место, где эта стрелочная функция написана.  
Стрел фун используйте только там где нужно сохранить контекст родителя: асинхронные действия, анимации, setTimeout, setInterval, AJAX.

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
