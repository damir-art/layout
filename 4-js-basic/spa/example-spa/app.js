import Menu from './components/Menu';

const app = document.getElementById('app');

function showPage1() {
  app.innerHTML = '<h1>Страница 1</h1>';
  const menu = new Menu();
  document.body.appendChild(menu);
}

function showPage2() {
  app.innerHTML = '<h1>Страница 2</h1>';
}

function showPage3() {
  app.innerHTML = '<h1>Страница 3</h1>';
}

showPage1(); // Показываем страницу 1 по умолчанию
