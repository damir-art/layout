# Описание собятия event
Объект события Event в JavaScript играет ключевую роль в обработке и управлении событиями в браузере. Он создается браузером при возникновении события и передается в функцию-обработчик, предоставляя подробную информацию о произошедшем событии. Основные свойства объекта `Event` включают:

- `type` - строка, указывающая тип события (например, click).
- `target` - элемент, на котором произошло событие.
- `currentTarget` - элемент, к которому был прикреплен обработчик события.
- `eventPhase` - число, указывающее на текущую фазу прохождения события (1 - перехват, 2 - достигло целевого элемента, 3 - всплытие).
- `bubbles` - булево значение, указывающее, может ли событие всплывать.
- `cancelable` - булево значение, указывающее, можно ли отменить стандартное поведение события.
- `defaultPrevented` - булево значение, которое становится истинным, если был вызван метод preventDefault().
- `timeStamp` - время возникновения события в миллисекундах с начала загрузки страницы.

Методы объекта Event позволяют разработчикам управлять поведением событий:

- `preventDefault()` - Отменяет стандартное действие, выполняемое браузером на это событие.
- `stopPropagation()` - Предотвращает дальнейшее распространение текущего события.
- `stopImmediatePropagation()` - Останавливает дальнейшее распространение текущего события и выполнение остальных обработчиков событий на текущем элементе.

В зависимости от типа события, объект события может содержать дополнительные свойства, например, для событий мыши `MouseEvent` доступны информация о позиции курсора `clientX` и `clientY`, а для событий клавиатуры `KeyboardEvent` - о нажатой клавише `key`.

Понимание свойств и методов объекта Event позволяет разработчикам создавать более интерактивные и отзывчивые приложения, точно реагирующие на действия пользователей и условия окружающей среды.

Пример с events:

    <style>
      .gallery img{
        width: 330px;
        border: 10px solid transparent;
      }

      .gallery img.active{
        border: 10px solid rgb(254, 80, 80);
      }
    </style>

    <div class="container">
      <nav class="menu">
        <a href="https://yandex.ru" target="_blank">Яндекс</a>
        <a href="https://google.ru" target="_blank">Гугл</a>
        <a href="https://mail.ru" target="_blank">Мэйл</a>
      </nav>
      <hr>
      <div class="gallery">
        <img src="img/1.jpg">
        <img src="img/2.jpg">
        <img src="img/3.jpg">
      </div>
    </div>

    <script>
    window.addEventListener('load', function() {
      let links = document.querySelectorAll('nav a'); // получаем список ссылок
      let images = document.querySelectorAll('.gallery img'); // получаем список изображений

      // цикл проходит по всем ссылкам и назначаем им событие click и обработчик события linkClicked
      for(let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', linkClicked);
      }

      // цикл проходит по всем изображениям и назначаем им несколько событий и обработчиков
      for(let i = 0; i < images.length; i++){
        images[i].addEventListener('click', imageClicked);
        images[i].addEventListener('contextmenu', cancelEvent); // Запрещает показ контекстного меню
        images[i].addEventListener('mousedown', cancelEvent); //  Запрещает перетаскивать фото
      }

      function imageClicked(evt){
        // console.log(evt.composedPath());
        if(evt.ctrlKey){
          this.classList.toggle('active'); // добавляем/удаляем класс .active если при клике мыши зажата клавиша ctrl
        }
        else{
          for(let i = 0; i < images.length; i++){
            images[i].classList.remove('active'); // удалить у всех изображений класс .active
          }
          this.classList.add('active'); // добавить класс .active изображению по которому кликнули
        }
      }
    });

    function cancelEvent(evt) {
      evt.preventDefault();
    }

    function linkClicked(evt) {
      // confirm - модальное окно, синхронный код, которое останавливает работу последующего кода, до тех пор пока вы не выберете действие
      if(!confirm('Вы уверены?')){
        evt.preventDefault();
      }
    }

    /*
      document.addEventListener('keydown', function(e){
        console.log(e);
      });
    */
    </script>
