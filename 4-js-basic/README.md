# Базовый курс JavaScript
Одна из проблем для понимания новичков изучающих JavaScript это понимание времени в JavaScript, когда и что происходит. Например этот код не стработает, если файл в котором расположен код помесятят в теги `header`, а не перед закрывающим тегом `body`:

    // custom.js
    let text = document.querySelector('.text');
    text.innerHTML = 'Имя';

    // index.html
      <div class="container">
        <div class="text">
          Привет!
        </div>
      </div>

      <script src="custom.js"></script>
    </body>

Например в бэкенде нет моментов времени, вся программа выполняется сверху вниз, любое запущенное дествие тормозит выполнение программы, из-за отсутствия асинхронности.

В JavaScript код работает постоянно, пока открыта страница. Разные куски кода выполняются в разное время. Можно скрипт подключить в `header`, если поставить атрибут `defer`:

    <script src="custom.js" defer></script>

Скрипт еще можно запустить через события `onload` или `DOMContentLoaded`, тогда неважно где и как он подключается в HTML-коде:

    // Первый способ создания обработчика события
    window.onload = function() {
      // всем событиям которые задаются объекту, добавляют префикс on
    }

    // Третий (второй ниже)
    window.addEventListener('load', function() {
      // аналог onload
    });

    // Четвёртый (самый правильный, в цикле не создаёт постоянно функцию, а ссылается на неё)
    window.addEventListener('load', pageLoaded);

    function pageLoaded() {
      let text = document.querySelector('.text');
      text.innerHTML = 'Имя';
    }

    // Еще пример события которое сработает после загрузки страницы
    // Событие load в JavaScript вешается на объект window
    // Событие DOMContentLoaded в JavaScript вешается на объекты window и document
    document.addEventListener('DOMContentLoaded', function() {
  
    });

Когда страница готова к работе, браузер выполняет код `window.onload()`:

    console.log(window.onload); // null
    window.onload = function() {
      let text = document.querySelector('.text');
      text.innerHTML = 'Имя';
    }
    console.log(window.onload); // function

Аналог:

    // Второй способ
    window.onload = pageLoaded;

    function pageLoaded() {
      let text = document.querySelector('.text');
      text.innerHTML = 'Имя';
    }

## Пример, почему addEventListener лучше чем с on

    // Имя22222
    window.onload = function() {
      let text = document.querySelector('.text');
      text.innerHTML = 'Имя';

      text.onclick = function() {
        text.innerHTML += 1; // Имя11111
      }

      // Если к событию onclick добавить второй обработчик, то будет только Имя22222
      text.onclick = function() {
        text.innerHTML += 2; // Имя22222
      }
    }

`text.onclick =` присваивает новое значение (обработчик) событию.

    // Имя1212121212
    window.addEventListener('load', function() {
      let text = document.querySelector('.text');
      text.innerHTML = 'Имя';

      text.addEventListener('click', function() {
        text.innerHTML += 1; // Имя11111
      });

      text.addEventListener('click', function() {
        text.innerHTML += 2; // Имя1212121212
      });
    });

`text.addEventListener('click'` - добавляет к событию еще один обработчик. Он позволяет назначать несколько обработчиков одному событию.
