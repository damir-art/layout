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

## Преобразуем псевдомассив в Array, 5 способов
Преобразование псевдомассивов в массивы в JavaScript можно осуществить несколькими способами.

Перебор значений псевдомассива в массив:
- Создайте пустой массив.
- Используйте цикл for для перебора элементов псевдомассива и добавления их в массив.

Пример:

    var object = { 0: 'Значение 1', 1: 'Значение 2', 2: 'Значение 3', length: 3 };
    var array = [];
    for ( var i = 0; i < object.length; i++ ) {
      array.push( object[i] );
    }
    console.log( array ); // ['Значение 1', 'Значение 2', 'Значение 3']

Использование функции `Array.from()`:
- Эта функция принимает итерируемый объект (псевдомассив) и возвращает новый массив.

Пример:

    var object = { 0: 'Значение 1', 1: 'Значение 2', 2: 'Значение 3', length: 3 };
    var array = Array.from( object );
    console.log( array ); // ['Значение 1', 'Значение 2', 'Значение 3']

Применение метода `Array.prototype.slice.call()`:
- Этот метод позволяет преобразовать любой итерируемый объект в массив.

Пример:

    var object = { 0: 'Значение 1', 1: 'Значение 2', 2: 'Значение 3', length: 3 };
    var array = Array.prototype.slice.call( object );
    console.log( array ); // ['Значение 1', 'Значение 2', 'Значение 3']

Использование spread оператора `(...)` для корневых псевдомассивов:
- Этот метод работает только с некоторыми типами псевдомассивов, такими как NodeList и HTMLCollection.

Пример:

    var object = document.querySelectorAll('div'); // Корневой псевдомассив
    var array = [...object];
    console.log(array); // Массив элементов div

Изменение свойства `__proto__` объекта на `Array.prototype`:
- Этот метод требует осторожности, так как может привести к неожиданным результатам.

Пример:

    var object = {0: 'Значение 1', 1: 'Значение 2', 2: 'Значение 3', length: 3};
    object.__proto__ = Array.prototype;
    console.log(object); // ['Значение 1', 'Значение 2', 'Значение 3']

Выбор метода зависит от типа псевдомассива и требований к результату.
