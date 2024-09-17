# checkbox
Пример кода с использованием чекбоксов в JavaScript (прочитай статью `attr-props/RAEDME.md` и пойми разницу между атрибутом и свойством).

HTML:

    <input type="checkbox" id="myCheckbox">
    <label for="myCheckbox">Check me!</label>

JavaScript:

    const myCheckbox = document.getElementById('myCheckbox');

    // Проверяем состояние чекбокса
    myCheckbox.addEventListener('change', function() {
      console.log(this.checked); // Выводит true, если чекбокс установлен, false - если снят
    });

    // Устанавливаем чекбокс в начальное состояние
    myCheckbox.checked = true;

Вместо props можно использовать setAttribute:

    ch.setAttribute('checked','checked');

## Еще пример

    <div class="container">
      <input type="checkbox" class="agrrement">
      <button type="button" class="send">Send</button>
    </div>

    <script>
    window.addEventListener('load', function(){
      
      let agr = document.querySelector('.agrrement');
      let btn = document.querySelector('.send');
      
      btn.addEventListener('click', function() {
        console.log(agr.getAttribute('checked'));
        console.log(agr.checked);
        //alert('done');
      });

      /*
        Кастомные атрибуты лучше создавать через data

        agr.setAttribute('aaa', '111'); // создали кастомный атрибут
        console.log(agr.getAttribute('aaa')); // получили значение
        console.log(agr.aaa); // кастомное свойство не создалось

        agr.bbb = 1; // создали кастомное свойство
        console.log(agr.bbb); // получили значене
        console.log(agr.getAttribute('bbb')); // кастомный атрибут не создался
      */
      // agr.checked = true;
    });

    /*
    Получив от сервера страницу, браузер строит DOM
    <div class="sample">
      <input type="checkbox" class="agrrement">
    </div>

    DOM {
      body: {
        children: [
          HTMLDivElement div: {
            className: sample,
            chidren: [
              HTMLInputElement input: {
                attributes: [type="checkbox" class="agrrement"]
                type: 'checkbox'
                className: 'agrrement'
                checked: true
                ...
              }
            ]
          }
        ]
      }
    }

    */
    </script>