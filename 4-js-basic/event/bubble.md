# Всплытие событий
Правильный пример.  
Исправляем пример из `delegation.md` когда при клике по span, не срабатывало (не всплывало) событие.

Пример функции которая позволяет подписываться на события с помощью всплытия:

    window.addEventListener('load', function() {
      let box = document.querySelector('.box');

      box.addEventListener('click', function(e) {
        let elem = e.target.closest('.item'); // находит родителя с определённым CSS классом, отчет от текущего

        // проверка на null нужна, потому что elem возвращает null, если кликнуть не по элементу
        // вторая проверка это то что elem должен лежать внутри box
        if(elem !== null && box.contains(elem)){
          changeColor(elem);
        }
      });
    });

    function changeColor(el) {
      let colors = ['#f00', '#ff0', '#0f0'];
      let num = Math.floor(Math.random() * colors.length);
      el.style.color = colors[num];
    }

Далее читай delegate-foo.md
