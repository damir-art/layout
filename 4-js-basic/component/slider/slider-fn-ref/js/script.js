window.addEventListener('load', function(){
  makeSlider('.gallery-1');
  makeSlider('.gallery-2');
});

function makeSlider(selector){
  // Конструктор класса
  let rootElem = document.querySelector(selector);
  let btnPrev = rootElem.querySelector('.buttons .prev');
  let btnNext = rootElem.querySelector('.buttons .next');

  let images = rootElem.querySelectorAll('.photos img');
  let i = 0;

  let animMoveToLeft = [
    { transform: 'translateX(0)' },
    { transform: 'translateX(-100%)' }
  ];

  let animMoveToRight = [
    { transform: 'translateX(0)' },
    { transform: 'translateX(100%)' }
  ];

  // Рефакторинг сделали анонимные функции обработчиков событий именованными
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);

  // Методы конструктора класса
  function prev(){
    let imgHide = images[i];
    i--;

    if(i < 0){
      i = images.length - 1;
    }

    toggleSlides(imgHide, images[i], false);
  }

  function next(){
    let imgHide = images[i];
    i++;

    if(i >= images.length){
      i = 0;
    }

    toggleSlides(imgHide, images[i], true);
  }

  function toggleSlides(imgHide, imgShow, isNext){
    imgHide.classList.remove('showed');
    imgHide.animate(isNext ? animMoveToLeft : animMoveToRight, { duration: 500 });

    imgShow.classList.add('showed');
    imgShow.animate(isNext ? animMoveToRight : animMoveToLeft, { duration: 500, direction: 'reverse' });
  }
}
