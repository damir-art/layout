# for of
Почему чаще используют for of, а не forEach:
- for of не просто цикл, слишком глубокие знания JavaScript, вредят его использованию,
- цикл for of это перебор итерируемой сущности,
- у того объекта который справа от for of написан, у него запускается symbol.iterator,
- forEach легко внедрялся в браузеры, а for of часто выдавал ошибки,
- на данный момент for of можно использовать без проблем.

1. Привет по ммодулям нужно сделать следующее:
- Портфолио https://mmoduli.ru/portfolio/ (в каждом разделе): сверху чтобы были новые фото (недавно загруженные), снизу старые

2. Привязки разделов каталога (https://mmoduli.ru/catalog/) и портфолио (https://mmoduli.ru/portfolio/):

Снизу этих разделов каталога:
- https://mmoduli.ru/catalog/detskie-domiki/stantsii/
- https://mmoduli.ru/catalog/detskie-domiki/pavilony/
- https://mmoduli.ru/catalog/detskie-domiki/napolnenie/
Должен показываться блок с фотографиями из раздела портфолио: https://mmoduli.ru/portfolio/rolevye-igry/

Снизу этого раздела каталога:
- https://mmoduli.ru/catalog/myagkaya-zony/myagkie-karkasnye/
Должны показываться блоки с фотографиями из разделов портфолио: https://mmoduli.ru/portfolio/rolevye-igry/domiki-razvivayushchie/ и https://mmoduli.ru/portfolio/myagkie-moduli/domiki-porolonovye/

Снизу этого раздела каталога:
- https://mmoduli.ru/catalog/myagkaya-zony/suhie-basseyny/
Должен показываться блок с фотографиями из раздела портфолио: https://mmoduli.ru/portfolio/myagkie-moduli/suhie-basseyny/

Снизу этого раздела каталога:
- https://mmoduli.ru/catalog/myagkaya-zony/soft-ploschadki/
Должен показываться блок с фотографиями из раздела портфолио: https://mmoduli.ru/portfolio/rolevye-igry/razvivayushchie-stancii-myagkie-karkasnye/

Снизу этого раздела каталога:
- https://mmoduli.ru/catalog/myagkaya-zony/ostrovok-prepyatstviy/
Должен показываться блок с фотографиями из раздела портфолио: https://mmoduli.ru/portfolio/myagkie-moduli/ostrovok/

Снизу этого раздела каталога:
- https://mmoduli.ru/catalog/myagkaya-zony/gorki/
Должен показываться блок с фотографиями из раздела портфолио: https://mmoduli.ru/portfolio/myagkie-moduli/spuski-gorki-stupeni-k-suhim-basseynam/

3. Верхнее меню, при наведении на ссылку "Каталог", первой ссылкой должна быть ссылка "Каталог". Как мы делали со ссылкой "Наши работы".

4. Перенести фото из https://mmoduli.ru/portfolio/suhoy-akvapark/kompleks-suhoy-akvapark/, сюда https://mmoduli.ru/portfolio/suhoy-akvapark/ , хотел сам но чот не получилось.

5. На некоторых товарах, например тут https://mmoduli.ru/catalog/labirinty/srednie-labirinty/labirint-mstiteli-430h460h280sm в описание написано "Европейские рукава (яркие, плотные, глянцевые", нужно заменить на "Рукава", без слова "Европейские".
