# data атрибуты
Позволяют задавать уникальные правила для элементов.

    <div class="box">
      <div class="item" data-color="#f00">Text 1</div>
      <div class="item" data-color="#ff0">Text 2</div>
      <div class="item" data-color="#a22">Text 3</div>
      <div class="item" data-color="#00f">Text 4</div>
      <div class="item" data-color="#a9e">Text 5</div>
    </div>

При клике на элемент, задаём ему цвет в зависимости от заданного в дата атрибуте.

    window.addEventListener('load', function() {
      let items = document.querySelectorAll('.box .item');

      for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', changeColor);
      }
    });

    function changeColor() {
      // console.dir( this );
      // console.log( this.getAttribute('data-color') );
      this.style.color = this.dataset.color;
    }

dataset - хранит в себе все дата атрибуты элемента.  
Дата атрибуты обычно заполняются PHP-скриптом при отдаче сервером контента.

## data отрибуты и оптимизация
`optimization/README.md`

## data отрибуты и регулярные выражения
- создайте дата атрибут с названием паттерна
- создайте карту (ассоциативный массив) правил `optimization/README.md`
