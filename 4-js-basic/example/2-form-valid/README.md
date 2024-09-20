# Домашнее задание №2 (валидация формы)
Сделать валидацию формы. 
- Перехватить событие отправки формы и отменить его, если при заполнении полей допущены ошибки.
- Проверку можно поставить простейшую - на пустоту полей.
- При обнаружении ошибки подсветить поле ввода красной рамкой.
- При вводе данных в поле рамка, указывающая на ошибка, сразу исчезает.

Обработать такое событие нужно на уровне формы с помощью всплытия.

Код формы:

    .err{
      outline: 1px solid red;
    }

    <form class="form">
      Имя:<br />
      <input type="text" name="name" class="check"><br />
      Телефон:<br />
      <input type="text" name="phone" class="check"><br />
      Почта:<br />
      <input type="text" name="email" class="check"><br />
      <input type="submit" value="Отправить">
    </form>

Решение:

  window.addEventListener('load', function() {
    let form = document.querySelector('.form');
    let inputs = form.querySelectorAll('.check');

    form.addEventListener('submit', function(e) {
      let hasError = false;
      
      for(let i = 0; i < inputs.length; i++){
        let inp = inputs[i];

        if(inp.value === ''){
          inp.classList.add('err');
          hasError = true; // e.preventDefault(); можно поставить сюда, но лучше вынести,
          // чтобы код не повторялся 3 раза
          // код не повторится 3 раза потому что if(hasError) выполнится уже после отработки всегго цикла
        }
      }

      if(hasError){
        e.preventDefault();
      }
    });

    // Убираем класс предупреждения у элемента
    form.addEventListener('focusin', function(e) {
      if(e.target.classList.contains('check')){
        e.target.classList.remove('err');
      }
    });
  });

  /* 
  // Другой способ решения, единственный мину там два цикла с одной и той же проверкой (дубль)
  // вместо них создаём одну функцию incorrectInp()
  form.addEventListener('submit', function(e){
  let hasError = inputs.some(incorrectInp); // цикл 1

  inputs.forEach(inp => { // цикл 2
    if(incorrectInp(inp)) {
      inp.classList.add('err');
    }
  });

  if(hasError){
    e.preventDefault();
  }
  });

  function incorrectInp(inp){
    return inp.value === '';
  } 
  */

  /*
    for
    for in
    for of a
    [].forEach
  */


## Разное
- при валидации, регулярное выражение берут из data атрибута `data-reg = "/reg/"`
- затем добавляют его в конструктор Reg, чтобы его тип данных не был строкой
- let reg = new RegExp( input.dataset.reg, 'модификатор' );
