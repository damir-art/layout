window.addEventListener('load', function(){
  makeSlider('.gallery-1');
  makeSlider('.gallery-2');
});

// Функция обслуживающая множество разных слайдеров на странице
function makeSlider(selector){
  let rootElem = document.querySelector(selector); // получаем селектор слайдера
  let btnPrev = rootElem.querySelector('.buttons .prev'); // в слайдере ищем кнопки
  let btnNext = rootElem.querySelector('.buttons .next');
  
  let images = rootElem.querySelectorAll('.photos img'); // в слайдере ищем изображения
  let i = 0;

  // анимация как у кей фреймов
  let animMoveToLeft = [
    { transform: 'translateX(0) scale(1)' },
    { transform: 'translateX(-100%) scale(0.3)' }
  ];

  let animMoveToRight = [
    { transform: 'translateX(0) scale(1)' },
    { transform: 'translateX(100%) scale(0.3)' }
  ];

  btnPrev.addEventListener('click', function(){
    let imgHide = images[i];
    i--;

    if(i < 0){
      i = images.length - 1;
    }

    toggleSlides(imgHide, images[i], false);
  });

  btnNext.addEventListener('click', function(){
    let imgHide = images[i];
    i++;

    if(i >= images.length){
      i = 0;
    }

    toggleSlides(imgHide, images[i], true);
  });

  function toggleSlides(imgHide, imgShow, isNext){
    imgHide.classList.remove('showed');
    imgHide.animate(isNext ? animMoveToLeft : animMoveToRight, { duration: 500 });

    imgShow.classList.add('showed');
    imgShow.animate(isNext ? animMoveToRight : animMoveToLeft, { duration: 500, direction: 'reverse' });
  }
}
