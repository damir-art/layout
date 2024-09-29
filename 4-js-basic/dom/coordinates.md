# Координаты

## Относительные координаты
Чтобы найти координаты элемента относительно документа (аналогично `offsetTop` в JavaScript), можно использовать следующую функцию:

    function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      var body = document.body;
      var docEl = document.documentElement;
      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
      var clientTop = docEl.clientTop || body.clientTop || 0;
      var clientLeft = docEl.clientLeft || body.clientLeft || 0;
      var top = box.top + scrollTop - clientTop;
      var left = box.left + scrollLeft - clientLeft;
      return { top: top, left: left };
    }

Эта функция сначала получает прямоугольник элемента (getBoundingClientRect()), затем учитывает прокрутку страницы и смещение документа, чтобы вычислить координаты элемента относительно документа.

## Абсолютные координаты
см пример в `example/4-menu-scroll/index.html`

Чтобы получить абсолютные координаты элемента относительно документа, можно использовать следующий подход:
- Получить координаты элемента относительно окна браузера с помощью метода getBoundingClientRect().
- Добавить к этим координатам значения прокрутки документа по вертикали и горизонтали, чтобы получить абсолютные координаты относительно документа.

Пример функции для вычисления абсолютных координат элемента:

    function getAbsoluteCoords(elem) {
      let box = elem.getBoundingClientRect();
      let body = document.body;
      let docEl = document.documentElement;
      let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
      let clientTop = docEl.clientTop || body.clientTop || 0;
      let clientLeft = docEl.clientLeft || body.clientLeft || 0;
      let top = box.top + scrollTop - clientTop;
      let left = box.left + scrollLeft - clientLeft;
      return { top: top, left: left };
    }

Эта функция аналогична предыдущей, но вместо вычисления координат относительно окна браузера, она добавляет значения прокрутки документа, чтобы получить абсолютные координаты относительно документа.

`getBoundingClientRect()` - даёт координаты в относительной системе координат, и покажет координаты в зависимости насколько прокручен курсор, снизу покажет отрицательные координаты или сверху положительные. Например scrollTo всегда показывает координаты сверху.
