window.onload = function() {
  let text = document.querySelector('.text');
  text.innerHTML = 'Имя';

  text.addEventListener(`click`, function() {
    text.innerHTML += 1; // Имя11111
  });

  text.addEventListener(`click`, function() {
    text.innerHTML += 2; // Имя1212121212
  });
}

// window.addEventListener('load', function() {
//   let text = document.querySelector('.text');
//   text.innerHTML = 'Имя';

//   text.addEventListener(`click`, function() {
//     text.innerHTML += 1; // Имя11111
//   });

//   text.addEventListener(`click`, function() {
//     text.innerHTML += 2; // Имя1212121212
//   });
// });
