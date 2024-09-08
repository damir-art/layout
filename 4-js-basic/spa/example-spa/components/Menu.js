export default function Menu() {
  const menu = document.createElement('nav');
  menu.className = 'menu';
  
  const ul = document.createElement('ul');
  menu.appendChild(ul);
  
  const li1 = document.createElement('li');
  ul.appendChild(li1);
  
  const a1 = document.createElement('a');
  a1.href = '#';
  a1.textContent = 'Главная';
  li1.appendChild(a1);
  
  const li2 = document.createElement('li');
  ul.appendChild(li2);
  
  const a2 = document.createElement('a');
  a2.href = '#';
  a2.textContent = 'О нас';
  li2.appendChild(a2);
  
  const li3 = document.createElement('li');
  ul.appendChild(li3);
  
  const a3 = document.createElement('a');
  a3.href = '#';
  a3.textContent = 'Контакты';
  li3.appendChild(a3);
  
  return menu;
  }