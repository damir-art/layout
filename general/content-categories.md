# Категории контента
https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories  
https://itchief.ru/html-and-css/content-models

В HTML каждый тег является определённым типом контента.

Большинство HTML-элементов являются членами одной или нескольких категорий контента - эти категории группируют элементы, имеющие общие характеристики. Это свободная группировка (на самом деле она не создает отношения между элементами этих категорий), но они помогают определить и описать общее поведение категорий и связанные с ними правила, особенно когда вы сталкиваетесь с их сложными деталями. Элементы также могут не принадлежать ни к одной из этих категорий: `flow` (всё что в body), `interactive`, `embedded`, `heading`, `metadata`, `phrasing`, `sectioning`, `palpable`.

Пример тега `strong`: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong  
Content categories: Flow content, phrasing content, palpable content.  
Там же можно посмотреть какие теги можно вкладывать, какие оборачивать.

- flow - тег потока, всё что в body
- metadata - метатеги в head, микроразметка в body
- embedded - встраиваемые элементы
- phrasing - фразовый контент, например strong, но не p (абзац)
- interactive - интерактивный контент, например ссылка
- palpable - явный или скрытый, strong явный, ссылка скрытый
- sectioning - секционный контент, например article, aside, nav, section
