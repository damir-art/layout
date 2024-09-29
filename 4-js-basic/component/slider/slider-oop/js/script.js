window.addEventListener('load', function(){
  new Slider('.gallery-1');
  let s2 = new Slider('.gallery-2');

  // добавляем функционал из вне
  setInterval(function(){
    s2.next();
  }, 3000);
});

class Slider{
  constructor(selector){
    // this добавляем переменным если их используем в методах
    // хотя по идее, this добавляют всем переменным
    let rootElem = document.querySelector(selector);
    let btnPrev = rootElem.querySelector('.buttons .prev');
    let btnNext = rootElem.querySelector('.buttons .next');
  
    this.images = rootElem.querySelectorAll('.photos img');
    this.i = 0;
  
    this.animMoveToLeft = [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-100%)' }
    ];
  
    this.animMoveToRight = [
      { transform: 'translateX(0)' },
      { transform: 'translateX(100%)' }
    ];
  
    btnPrev.addEventListener('click', () => this.prev());
    btnNext.addEventListener('click', () => this.next());
  }
  
  prev(){
    // console.log(this) // что покажет без стрелочной в 31 строке "this.prev"
    let imgHide = this.images[this.i];
    this.i = ( this.i > 0 ) ? this.i - 1 : this.images.length - 1;
    this.toggleSlides(imgHide, this.images[this.i], false);
  }

  next(){
    let imgHide = this.images[this.i];
    this.i = ( this.i < this.images.length - 1 ) ? this.i + 1 : 0;
    this.toggleSlides(imgHide, this.images[this.i], true);
  }

  toggleSlides(imgHide, imgShow, isNext){
    imgHide.classList.remove('showed');
    imgHide.animate(isNext ? this.animMoveToLeft : this.animMoveToRight, { duration: 500 });

    imgShow.classList.add('showed');
    imgShow.animate(isNext ? this.animMoveToRight : this.animMoveToLeft, { duration: 500, direction: 'reverse' });
  }
}
