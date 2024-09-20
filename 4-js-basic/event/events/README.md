# События по названиям
Рассматриваем каждое событие JavaScript, с примерами.

## Разное
click всплывает, focus не всплывает:

    form.addEventListener('click', function(evt) {
      console.log(evt); // если кликнуть по текстовоу полю в форме, то покажет ёё
      console.log(evt.target); // по какому полю произошел клик
    });

    form.addEventListener('focus', function(evt) {
      console.log(evt); // если кликнуть по текстовоу полю в форме, то ничего не покажет
    });

Если хотите использовать `focus` со всплытием, используйте `focusin` - focus и `focusout` - blur.
