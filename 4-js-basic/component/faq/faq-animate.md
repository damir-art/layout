# FAQ ANIMATE
Основное реешение проблемы отсутствия анимации при display: none  
Данный способ используется в транзишен компонентах в реакте и во вью, предполагает анимации по нескольким классам.

Тут нет CSS анимации, только анимация происходящая внутри JavaScript, метод animate().  
Схема для всех анимаций одна, меняются только кей фреймы, строки 88, 89: { opacity: 1, transform: 'translateX(0)' }, { opacity: 0, transform: 'translateX(100px)' }

Код можно упростить создав функцию, отправляя ей лишь кей фреймы в каждом проекте или необходимому элементу на странице см `faq-anim-fn.md`

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
    }


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

    window.addEventListener('load', function(){
      let faq = document.querySelector('.faq');
      
      delegate(faq, '.ask', 'click', function(){
        let answer = this.closest('.item').querySelector('.answer');
        let cl = answer.classList;

        if(cl.contains('open')){
          let animation = answer.animate([
            { opacity: 1, transform: 'translateX(0)' },
            { opacity: 0, transform: 'translateX(100px)' }
          ], { duration: 500 });

          animation.addEventListener('finish', function(){
            cl.remove('open'); // вызываем display: block после завершения анимации
          });
        }
        else{
          cl.add('open');

          answer.animate([
            { opacity: 0, transform: 'translateX(-100px)' },
            { opacity: 1, transform: 'translateX(0)' }
          ], { duration: 500 });
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
