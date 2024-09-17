# Разное об event

Если обратиться к event без указания в параметре функции, то вы будете работать с глобальным window.event, так делать нельзя, нужно всегда работать только локальным event:

    elem.addEventListener('click', function() {
      console.log( event );
    });
