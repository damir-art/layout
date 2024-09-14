# CSS 
Работа в JavaScript, со стилями CSS  
- если в JS идет работа со стилями, то обычно меняют CSS-классы
- с инлайн стилями работают крайне редко и для уникализации

Код, создадим список, первый клик на элементе списка делает его активным, второй клик убирает активность:

    .box{
      max-width: 200px;
    }
    .box .item{
      padding: 10px;
      margin: 10px;
      border: 1px solid transparent;
    }
    .box .item.item-active{
      border-color: #ff0;
      box-shadow: 5px 5px 10px #222;
    }
    .box .item.item-active::after{
      content: attr(data-price);
      margin-left: 10px;
      font-size: 10px;
    }

    <div class="box">
      <div class="item" data-price="100" data-color="red">Text 1</div>
      <div class="item" data-price="50" data-color="#0f0">Text 2</div>
      <div class="item" data-price="200" data-color="#0f0">Text 3</div>
      <div class="item" data-price="120" data-color="red">Text 4</div>
      <div class="item" data-price="20" data-color="#f90">Text 5</div>
    </div>

    window.addEventListener('load', function(){
      let items = document.querySelectorAll('.box .item');

      for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', changeState);
      }
    });

    function changeState(){	
      this.classList.toggle('item-active');
      let color = this.classList.contains('item-active') ? this.dataset.color : 'inherit';
      this.style.color = color;
    }

    /*
      HTMLElement
        classList
          .add(classname)
          .remove(classname)
          .contains(classname)
          .toggle(classname)

          // как работает toggle
          if(contains(classname))
            remove(classname)
          else
            add(classname)
    */
