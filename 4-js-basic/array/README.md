# Масивы

## Преобразуем псевдомассив в Array
Преобразуем NodeList, HTMLCollection и подобные псевдомассивы в настоящий массив Array.

Использование метода `Array.from()`:

    const paragraphs = document.querySelectorAll('p'); // NodeList
    const paragraphsArray = Array.from(paragraphs);
    console.log(paragraphsArray); // Выведет массив элементов <p>

Применение синтаксиса распространения `(...)`:

    const paragraphs = document.querySelectorAll('p'); // NodeList
    const paragraphsArray = [...paragraphs];
    console.log(paragraphsArray); // Выведет массив элементов <p>

Использование метода `Array.prototype.slice.call()`:

    const paragraphs = document.querySelectorAll('p'); // NodeList
    const paragraphsArray = Array.prototype.slice.call(paragraphs);
    console.log(paragraphsArray); // Выведет массив элементов <p>

Все эти методы позволяют преобразовать NodeList или HTMLCollection, которые являются коллекциями, похожими на массивы, в настоящие массивы JavaScript, что позволяет использовать методы массивов, такие как .map(), .filter(), .sort(), и другие.

### Преобразуем псевдомассив в Array, 5 способов
