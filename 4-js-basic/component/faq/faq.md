# FAQ
Тут можно вообще ничего не читать кроме последнего примера: `faq-animate.md`

Создаём FAQ на JavaScript, без анимации.

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
      transition: opacity 0.5s;
    }
    .faq .item .answer.open{
      display: block;
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

    window.addEventListener('load', function() {
      let faq = document.querySelector('.faq'); // контейнер для делегате
      
      delegate(faq, '.ask', 'click', function() {
        // console.log(this);
        let answer = this.closest('.item').querySelector('.answer'); // от аск переходим к родителю (айтем), от родителя переходим к ансвер
        answer.classList.toggle('open');
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
