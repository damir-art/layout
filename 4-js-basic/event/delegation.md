# Делегирование событий
Пример с делегированием и всплытием событий, так делать правильно, в отличии от примера в `target.md`.
Есть небольшая побочка, что вы можете мышкой попасть не по нужным элементам а по контейнеру или другому элементу, поэтому нужно всегда проверять, по нужному ли элементу был произведён клик (или другое событие) или нет:

    // Пример с проверкой на класс, можно использовать и другие фильтрации
    // Однако если клик произойдёт по span внутри .item то событие не сработает (как исправить см delegation-2.md)
    // как решить эту проблему узнаем в след уроке
    if(evt.target.classList.contains('item')) {
      changeColor(evt.target);
    }

Весь пример:

    <style>
      .item{
        margin: 5px 0;
      }
    </style>

    <button type="button" class="btnAdd">Add item</button>
    <hr>
    <div class="box">
      <div class="item">Text 1</div>
      <div class="item">Text <span>2</span></div>
      <div class="item">Text 3</div>
      <div class="item">Text 4</div>
      <div class="item">Text 5</div>
    </div>

    <script>
    window.addEventListener('load', function() {
      let btnAdd = document.querySelector('.btnAdd');
      let box = document.querySelector('.box');

      // При клике внутри контейнера, обрамляющего элементы
      // Мы проверяем есть ли элемента в районе которого произошел клик, класс .item
      // Если да, то этот элемент передаём в обработчик
      box.addEventListener('click', function(evt) {
        // console.log(this); // элемент .box, событие в контексте .box
        // console.log( evt.target ); // элемент по которому произошел клик (кто породил событие), div или span, при этом контекстом всё равно является .box

        if(evt.target.classList.contains('item')) {
          changeColor(evt.target);
        }
      });

      btnAdd.addEventListener('click', function(){
        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = 'Text ' + (box.children.length + 1);
        box.appendChild(div);
      });
    });

    function changeColor(elem) {
      let colors = ['#f00', '#ff0', '#0f0'];
      let num = Math.floor(Math.random() * colors.length);
      elem.style.color = colors[num];
    }
    </script>

## Разное
От мелких элементам к более крупным, события всплывают. При обрабоке на каждом элементе this ссылается на контейнер к которому привязано событие, а event.target ссылается на элемент на котором произошло событие, например клик.
