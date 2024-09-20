# Функция delegate()
Функция delegate() должна давать возможность быстро подписаться на родительском элементе, на обработку событий связанных с дочерними элементами, по технике всплытия.

Многоразовая функция подходит под любой проект и под любую задачу связанную с делегированием.  
Воспринимайте функцию delegate() как библиотечную.

    <div class="item">
      <div class="box">
        <div class="item">Text 1</div>
        <div class="item">Text <span>2</span></div>
        <div class="item">Text 3</div>
        <div class="item">Text 4</div>
        <div class="item">Text 5</div>
      </div>
    </div>

    <script>
      window.addEventListener('load', function() {
        let box = document.querySelector('.box');

        delegate(box, '.item', 'click', function() {
          let colors = ['#f00', '#ff0', '#0f0'];
          let num = Math.floor(Math.random() * colors.length);
          this.style.color = colors[num];
        });
      });

      function delegate(box, selector, eventName, handler) {
        box.addEventListener(eventName, function(evt) {
          let elem = evt.target.closest(selector);

          console.log(this);

          if(elem !== null && box.contains(elem)) {
            handler.call(elem, evt); // без call, handler запустится в контексте объекта window,
            // а так передается в контексте elem
          }
        });
      }

      // function(evt) - функция которая запускается в контексте элемента `box`,  
      // this указывает на box,  
      // evt - описывает событие.
    </script>

## delegate() нам даёт возможность быстро подписаться на группу элементов
Сокращаем с помощью delegate() код из `example/calc-1/`.  
Воспринимайте функцию delegate() как библиотечную.  
Подписались для всей формы на всплытие от любых полей.

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
        let calculator = document.querySelector('.calculator'); // добавили контейнер
        let inp1 = document.querySelector('.num1');
        let inp2 = document.querySelector('.num2');
        let btnRun = document.querySelector('.btnRun');
        let resultBox = document.querySelector('.result');
        let operation = document.querySelector('.operation');

        btnRun.addEventListener('click', function() {
          let num1 = parseInt(inp1.value);
          let num2 = parseInt(inp2.value);
          let total;

          switch(operation.value){
            case 'sum':
              total = num1 + num2;
              break;
            case 'sub':
              total = num1 - num2;
              break;
            case 'mult':
              total = num1 * num2;
              break;
            case 'div':
              total = num1 / num2;
              break;
          }
          
          if(isNaN(total)){
            total = 'Некорректный ввод';
          }

          resultBox.innerHTML = total;
          btnRun.disabled = true;
        });

        // делаем анонимные функции, в именованных уже нет необходимости
        delegate(calculator, 'input,select', 'input', function(){
          btnRun.disabled = false;
        });

        delegate(calculator, '.num1,.num2', 'input', function(){
          this.value = this.value.replace(/[^0-9]/g, '');
        });
      });

      function delegate(box, selector, eventName, handler){
        box.addEventListener(eventName, function(e){
          let elem = e.target.closest(selector);

          if(elem !== null && box.contains(elem)){
            handler.call(elem, e);
          }
        });
      }
    </script>

## Добавляем функцию delegate() в ядро JavaScript
Добавляем функцию delegate() в ядро JavaScript с помощью prototype.

    // Учебеный пример, в реальности стандартные классы трогать нельзя
    HTMLElement.prototype.delegate = function delegate(selector, eventName, handler) {
      let box = this;
      box.addEventListener(eventName, function(e) {
        let elem = e.target.closest(selector);
        if(elem !== null && box.contains(elem)) {
          handler.call(elem, e);
        }
      });
    }

    window.addEventListener('load', function() {
      let calculator = document.querySelector('.calculator');
      let inp1 = document.querySelector('.num1');
      let inp2 = document.querySelector('.num2');
      let btnRun = document.querySelector('.btnRun');
      let resultBox = document.querySelector('.result');
      let operation = document.querySelector('.operation');

      btnRun.addEventListener('click', function() {
        let num1 = parseInt(inp1.value);
        let num2 = parseInt(inp2.value);
        let total;

        switch(operation.value) {
          case 'sum':
            total = num1 + num2;
            break;
          case 'sub':
            total = num1 - num2;
            break;
          case 'mult':
            total = num1 * num2;
            break;
          case 'div':
            total = num1 / num2;
            break;
        }

        if(isNaN(total)) {
          total = 'Некорректный ввод';
        }

        resultBox.innerHTML = total;
        btnRun.disabled = true;
      });

      calculator.delegate('input,select', 'input', function() {
        btnRun.disabled = false;
      });

      calculator.delegate('.num1,.num2', 'input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
      });
    });
