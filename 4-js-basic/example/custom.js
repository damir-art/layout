function init() {
  let x = 100;

  setTimeout(function() {
    console.log(++x);
  }, 3000);

  setTimeout(function() {
    console.log(++x);
  }, 3000);
}

init();
console.log('init function is over');
