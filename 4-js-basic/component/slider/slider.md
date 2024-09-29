# Слайдер
Создание простого слайдера на JavaScript, от Яндекс GPT.

HTML:

    <div class="slider">
      <div class="slide">Slide 1</div>
      <div class="slide">Slide 2</div>
      <div class="slide">Slide 3</div>
    </div>

CSS:

    .slider {
      display: flex;
      width: 100%;
      height: 200px;
      overflow: hidden;
    }

    .slide {
      flex: 0 0 auto;
      width: 100%;
      height: 100%;
      transition: all 0.5s ease;
    }

    .slide:first-child {
      order: 1;
    }

    .slide:nth-child(2) {
      order: 2;
    }

    .slide:nth-child(3) {
      order: 3;
    }

JavaScript:

    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    let slideIndex = 0;

    // Функция для обновления слайдера
    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.style.order = index + 1;
      });
    }

    // Обработчик события клика на кнопки prev/next
    function handleClick(event) {
      if (event.target.classList.contains('prev-button')) {
        if (slideIndex > 0) {
          slideIndex--;
        }
      } else if (event.target.classList.contains('next-button')) {
        if (slideIndex < slides.length - 1) {
          slideIndex++;
        }
      }

      updateSlider();
    }

    // Инициализация слайдера
    updateSlider();
    slider.addEventListener('click', handleClick);

Этот код создает слайдер с тремя слайдами, которые автоматически обновляются при нажатии на кнопки prev/next. Вы можете легко изменить количество слайдов и добавить дополнительные функции, такие как анимация или автоматическое переключение слайдов.
