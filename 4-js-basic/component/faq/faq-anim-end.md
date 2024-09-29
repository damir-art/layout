# FAQ ANIM END
https://dmitrylavrik.ru/video/javascript/ponimanie-javascript/javascript-and-css-animations

Реализуем FAQ и решаем проблему с display-none, не основное решение, также есть глюки.  
Тут есть событие `animationend` (подписываемся на момент завершения анимации), еще в JS есть событие транзишен енд.

CSS:

    html, body{
      margin: 0;
      background: #eee;
    }

    .faq{
      padding: 30px;
      max-width: 600px;
      overflow: hidden;
    }

    .faq .item{
      margin: 20px 0;
    }

    .faq .item .ask{
      font-size: 30px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .faq .item .answer{
      background: #ff0;
      overflow: hidden;
      padding: 0 15px;
      display: none;
    }

    .faq .item .answer.open{
      display: block;
      animation: fade 0.5s;
    }

    .faq .item .answer.closing{
      animation: hide 0.5s;
    }

    @keyframes fade{
      from{ opacity: 0; }
      to{ opacity: 1; }
    }

    @keyframes hide{
      from{ opacity: 1; }
      to{ opacity: 0; }
    }

HTML:

    <div class="faq">
      <div class="item">
        <div class="ask">1. Вопрос какой-то №1</div>
        <div class="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="item">
        <div class="ask">2. Вопрос какой-то №2</div>
        <div class="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="item">
        <div class="ask">3. Вопрос какой-то №3</div>
        <div class="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="item">
        <div class="ask">4. Вопрос какой-то №4</div>
        <div class="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="item">
        <div class="ask">5. Вопрос какой-то №5</div>
        <div class="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>

JavaScript:

    window.addEventListener('load', function(){
      let faq = document.querySelector('.faq');
      
      delegate(faq, '.ask', 'click', function(){
        let answer = this.closest('.item').querySelector('.answer');
        let cl = answer.classList;

        if(cl.contains('open')){
          cl.add('closing');

          answer.addEventListener('animationend', function(){
            cl.remove('open'); // удаляем потому что мешает отображать элемент
            cl.remove('closing'); // надо удалить чтобы при повторном отображении, у него запустилась анимация скрытия, потом
          });
        }
        else{
          cl.add('open');
        }
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
