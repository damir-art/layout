# Оптимизация
Оптимизация кусочков однотипного кода, которые чуть-чуть отличаются друг от друга.

Задача: получает из вне месяц, переводим его на русский язык.  
Обыно создаём ветвление if или switch и проверяем пришедший месяц с 12-ю, при совпадении выдаём перевод.

    let month = 'february';
    let ruMonth;

    if(month == 'january') {
      ruMonth = 'январь';
    }
    else if(month == 'february') {
      ruMonth = 'февраль';
    }
    else if(month == 'march') {
      ruMonth = 'март';
    }
    else if(month == 'april') {
      ruMonth = 'апрель';
    }
    else if(month == 'may') {
      ruMonth = 'май';
    }
    ...

    console.log(month);
    console.log(ruMonth);

Но можно этот код сократить создав не ветвление с проверкой, а объект который по сути является ассоциативным массивом (картой, хэш-таблицей, словарём).

У ассоциативного массива значения не пронумерованы, у них имеются ключи.  
Данный способ используют для очень хорошей оптимизации кода.

    // создаём хэш-таблицу, словарь, карту
    // ключи это то что приходит с бека
    let month = 'february';

    let month2Ru = {
      january: 'январь',
      february: 'февраль',
      march: 'март',
      april: 'апрель',
      may: 'май'
    };

    // console.log(month2Ru.april);
    // let ruMonth = month2Ru.month; // undefined
    // let ruMonth = month2Ru['february']; // февраль

    let ruMonth = month2Ru[month];
    console.log(ruMonth);

Данный способ используют для очень хорошей оптимизации кода. Значением, например вместо `январь` может быть всё что угодно и функция, массив, объект.

Оптимизируем код из `example/1-calc`, например switch в нём:

`let total = mathOps[operation.value](num1, num2);`:
- let v = operation.value;
- let fn = mathOps[operation.value];
- let total = fn(num1, num2);

Оптимизация с объектами, очень хорошо работает с дата атрибутами. Значения дата абрибутов, можно засунуть в переменную, а эту переменную использовать как ключ объекта.

    <div class="container">
      <div class="calculator">
        <input type="text" class="num1">
        <select class="operation">
          <option value="sum">+</option>
          <option value="sub">-</option>
          <option value="mult">*</option>
          <option value="div">/</option>
        </select>
        <input type="text" class="num2">
        <button type="button" class="btnRun">=</button>
        <span class="result"></span>
      </div>
    </div>

    <script>
    window.addEventListener('load', function() {
      let calculator = document.querySelector('.calculator');
      let inp1 = document.querySelector('.num1');
      let inp2 = document.querySelector('.num2');
      let btnRun = document.querySelector('.btnRun');
      let resultBox = document.querySelector('.result');
      let operation = document.querySelector('.operation');
      // Также этот код можно использовать для генерации option в теге select
      let mathOps = {
        sum: (a, b) => a + b,
        sub: (a, b) => a - b,
        mult: (a, b) => a * b,
        div: (a, b) => a / b,
      };

      btnRun.addEventListener('click', function() {
        let num1 = parseInt(inp1.value);
        let num2 = parseInt(inp2.value);
        let total = mathOps[operation.value](num1, num2);

        if(isNaN(total)) {
          total = 'Некорректный ввод';
        }

        resultBox.innerHTML = total;
        btnRun.disabled = true;
      });

      delegate(calculator, 'input,select', 'input', function() {
        btnRun.disabled = false;
      });

      delegate(calculator, '.num1,.num2', 'input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
      });
    });

    function delegate(box, selector, eventName, handler) {
      box.addEventListener(eventName, function(e) {
        let elem = e.target.closest(selector);

        if(elem !== null && box.contains(elem)) {
          handler.call(elem, e);
        }
      });
    }

    /*
      // расшифровка
      let v = operation.value;
      let fn = mathOps[v];
      let total = fn(num1, num2);
    */

    /*
      // Функции от простой к стрелочной
      function sum(a, b) {
        return a + b
      }

      let sum = function(a, b) {
        return a + b
      }

      let sum = (a, b) => {
        return a + b
      }

      let sum = (a, b) => a + b;
    */

    /*
      // при фильтрации массивов со стрелочными функциями, получается короткий код
      [10, 5, 8, 9, 1].filter(num => num > 5)
    */
    </script>
