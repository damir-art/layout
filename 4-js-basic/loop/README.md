# Циклы
Циклы, итерации, итераторы.

Методы перебора массива: https://www.youtube.com/watch?v=cGA3N5coak4
- forEach
- filter
- map
- every
- some
- reduce
- reduceRight

Проходимся циклом по элементам и вешаем элементам событие и обработчик.

    window.addEventListener('load', function() {
      let items = document.querySelectorAll('.box .item');

      for(let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', changeColor);
      }
    });

    function changeColor() {
      let colors = ['#f00', '#ff0', '#0f0'];
      let num = Math.floor(Math.random() * colors.length);
      this.style.color = colors[num];
    }

    // items.forEach(el => ) - обычно пишут так,

items - коллекция объектов (NodeList, имеет другой прототип нежели array).  
Вешать обработчик еа каждый элемент это затратно по ресурсам, поэтому используют делегирование (всплытие событий). Также на странице дополнительные итемы могут появлятся уже после подписания на событие текущих итемов.
