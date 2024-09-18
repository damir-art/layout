# target
target - даёт дорогу к теме со всплытиями событий и делегированию.

Target в JavaScript - это свойство объекта события (event), которое указывает на элемент, на котором произошло событие. Проще говоря, это элемент на веб-странице, который вызвал определенное действие, например, клик по кнопке или ввод текста в поле формы.

Пример использования target:

    const button = document.querySelector('button');
    button.addEventListener('click', function(event) {
      // Получаем элемент, на который был произведен клик
      const clickedElement = event.target;
      // Добавляем класс 'active' к этому элементу
      clickedElement.classList.add('active');
    });

В этом примере мы добавляем класс active к элементу, на который был произведен клик, используя свойство target объекта события. Это позволяет нам динамически изменять внешний вид элементов в зависимости от действий пользователя.

`evt.composedPath()` - даст список элементов, в виде массива, по которым проходит событие пока доберается до целевого. Например если событие привязано к изображению, то при клике по изображению, событие отправляется от изображения до корня (`window`), всплытие, с погружением практически не работают.

Пример который показывает как не вешать обработчик события на каждый элемент, в котором необходимо событие, а вешать на контейнер этих элементов, это улучшает производительность и называется делегированием и работает от всплытия.

Если изначально элементов 10 и к ним добавлены обработчики событий, то при создании с помомщью JavaScript таких же элементов, у них этих обработчиков не будет. С этой проблеймой тоже поможет делегирование.

При всплытии событий и делегировании, всегда используем фильтрацию проверяя от кого пришло событие к контейнеру.

## Пример без делегирования
Так делать нельзя, как нужно делать смотри в `delegation.md`.

    <button type="button" class="btnAdd">Add item</button>
    <hr>
    <div class="box">
      <div class="item">Text 1</div>
      <div class="item">Text 2</div>
      <div class="item">Text 3</div>
      <div class="item">Text 4</div>
      <div class="item">Text 5</div>
    </div>

    <script>
    window.addEventListener('load', function() {

      // Объявляем переменные привязанные к элементам
      let btnAdd = document.querySelector('.btnAdd');
      let box = document.querySelector('.box');
      let items = document.querySelectorAll('.box .item');

      // Каждому элементу в контейнере вешаем обработчик (так делать неправильно)
      for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', changeColor);
      }

      // По нажатии по кнопке, создаём элемент, у них обработчика уже не будет
      // Почему у созданных элементов не будет обработчиков?
      // Потому что создаются при нажатии по кнопке, а обработчики вешаются сразу при загрузке страницы 
      btnAdd.addEventListener('click', function() {
        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = 'Text ' + (box.children.length + 1);

        // Поэтому нужно снова элементу назначать событие с обработчиком
        // которое дополнительно будет нагружть систему плюс будет дублем
        // div.addEventListener('click', changeColor);
        box.appendChild(div);
      });
    });

    function changeColor() {
      let colors = ['#f00', '#ff0', '#0f0'];
      let num = Math.floor(Math.random() * colors.length);
      this.style.color = colors[num];
    }
    </script>
