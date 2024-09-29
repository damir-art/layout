# scroll
Событие scroll всплывает, его вешают либо на window, либо на document, разницы нет. Само событие возникает на `document.documentElement` (HTML).

    document.addEventListener('scroll', function(){
      let cl = btnUp.classList;
      let threshold = window.innerHeight / 2;
      window.scrollY > threshold ? cl.add('btnUp-open') : cl.remove('btnUp-open');
    });

Есть несколько разных способов чтобы узнать насколько прокручена страница:
- pageY
- pageYOffset (устаревший), используйте scrollY
