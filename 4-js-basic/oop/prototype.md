# Prototype
Перед тем как изучать прототипы, прочитайте различные моменты языка JavaScript относящиеся к типам данных и объектам.

## Строка как строка, строка как объект
Если вывести в консоли объект и раскрыть его, то в конце будет `<prototype>: Object { ... }`.  
Этого прототипа будут свои свойства. Например cat.toString() или cat.valueOf() эти свойства есть у прототипа объекта.  
Понятие прототипа также есть и у простых переменных, например усзнать длину строки str.length или number.toFixed(2). Это называется неявное объектное преобразование.

Почему так происходит? Потому что мы например строку можем создать двумя способами:

    let str1 = "Строка"; // typeof string (в JS не всё является объектом) // всегда пишут только так
    let str2 = new String("Строка"); // typeof object

Это будет одно и тоже, `new String("Строка")` это класс, некий шаблон по которому будет построен объект.  
typeof string (в JS не всё является объектом), однако если к str1 добавить точку `str1.length`, то эта переменная будет JavaScript-ом восприниматься как объект и будет приведена к объекту.

И не смотря на то что в JS не всё является объектом, то работаем мы всегда только с объектами.  
Если к строкам str1 и str2 добавить свойство, и вывести эти переменные в консоли:

    str1.some = '123';
    str2.some = '123';

str1 выведет строку "Строка", а str2 объект где будет свойство some (строка это массив символов).

## Что такое массив
Классическое определение - массив это кусок оперативной памяти, который разбит на строго заданное количество ячеек и эти ячейки идут по порядку с порядковыми индексами от 0. В JavaScript нет массивов.

    const arr = ['a', 'b'];
    console.log(arr);

При раскрытии массива в консоли он окажется объектом, и будет ссылаться на прототип. Аналог:

    const obj = {
      0: 'a',
      1: 'b',
      length: 2
    };
    console.log(obj);

Только прототипы разные, однако способ хранения данных точно такой же: ключи и значения. Есть целочисленные ключи от 0 и больше, есть строковые ключи `length`. В JavaScript всё хранится в формате объекта, когда есть ключи и значения.

JavaScript делался на коленке за две недели и он поэтому получился кривым. Однако он получился настолько кривым что сейчас захватывает абсолютно всё.

## `__proto__` ссылка на прототипа
Разберёмся что такое `Array []` и `Object { ... }` в строках `<prototype>: Array []` и `<prototype>: Object { ... }`. Они являются прототипами, классами.

Строка `proto Array()` в консоли JavaScript указывает на свойство proto, которое является ссылкой на прототип объекта. В данном случае, так как вы вывели массив, proto ссылается на прототип Array, что означает, что каждый элемент массива наследует методы и свойства от прототипа Array. Это часть механизма наследования в JavaScript, где объекты могут наследовать свойства и методы от своих прототипов.

## Протитоп это аналог класса в JavaScript?
Да, прототип в JavaScript можно рассматривать как аналог класса, но с некоторыми ключевыми отличиями. В JavaScript до введения классов в ECMASCRIPT 6 (ES6) прототипы использовались для имитации классов. Прототип - это объект по умолчанию, прикрепленный к каждой функции и объекту JavaScript, который позволяет добавлять дополнительные свойства и методы, имитируя таким образом классы.

Классы в JavaScript, введенные в ES6, предоставляют более лаконичный и понятный способ объявления классов, используя синтаксис, аналогичный другим объектно-ориентированным языкам программирования. Однако, несмотря на введение классов, прототипы продолжают играть важную роль в наследовании и создании объектов в JavaScript.

Основное различие между прототипами и классами заключается в том, что классы в JavaScript обеспечивают более структурированный и организованный подход к созданию объектов, в то время как прототипы предоставляют более гибкий механизм для расширения объектов дополнительными свойствами и методами.

## Что такое класс
Например у нас есть объект кота и нам надо сделать еще несколько котов, чтобы не плодить код с объектами, достаточно сделать один общий класс для всех котов. Класс это шаблон для создания объекта.

    const cat = {
      length: 0.5,
      age: 10,
      getEat: function() {
        return 'hrumHrumHrum';
      }
    }

Создаём класс:

    class Cat {
      constructor() {
        this.length = 0.5;
        this.age = 10;
      }
      getEat() {
        return 'hrumHrumHrum';
      }
    }

Класс - это также тип данных. Создающий однотипные объекты.  
constructor - в конструкторе класса, устанавливают поля класса. Функция, которая запускается при создании объекта.

Создаём объект от класса:

    const cat = new Cat();
    console.log(cat); // Object { length: 0.5, age: 10 }

## Передача параметров в constructor
В constructor как и в любую функцию можно передавать параметры. Это позволит создавать однотипные объекты с разными характеристиками.

    class Cat {
      constructor(length, age) {
        this.length = length;
        this.age = age;
      }
      getEat() {
        return 'hrumHrumHrum';
      }
    }

    const cat = new Cat(0.5, 7);
    console.log(cat);

    const cat2 = new Cat(0.8, 10);
    console.log(cat2);

У объектов созданных от классов, методы хранятся в прототипе.  
Если создать класс в старом стиле, то метод появится в консоли:

    function Cat(length, age) {
      this.length = length;
      this.age = age;

      this.getEat = function() {
        return 'hrumHrumHrum';
      }
    }

    const cat = new Cat(0.5, 7);
    console.log(cat);

    const cat2 = new Cat(0.8, 10);
    console.log(cat2);

Новый стиль кода выносит методы в прототип.

## Продолжаем работать с массивом

    const arr = ['a', 'b'];
    console.log(arr);

где `<prototype>: Array []`, `Array []` это класс, а arr это объект класса `Array []`. Прототипом у `Array []` является `Object` (базовый объект).

## Прототипы
Класс и прототип это разные вещи. Прототип это объект.  
У каждого объекта в JavaScript есть свойство `__proto__`.  
Рассмотрим два объекта: кота и собаку, у них есть свои свойства `mustache`, `getVoice`.

    const cat = {
      mustache: true,
      getVoice: function() {
        return 'myauMyauMyau';
      }
    }

    const dog = {
      mustache: false,
      getVoice: function() {
        return 'auAuAu';
      }
    }

Создадим объект `animal`, который будет содержать общие для всех животных свойства:

    const animal = {
      age: 10,
      getEat: function() {
        return 'hrumHrumHrum';
      }
    }

Прототипы придуманы для того чтобы делать что-то общее у объектов.
Прототипом кота делаем animal:

    console.log(cat);
    cat.__proto__ = animal;
    console.log(cat);
    console.log( cat.getEat() ); // обращаемся к методу прототипа

В JavaScript наследование идет не от класса к классу, а от объекта к объекту.  
При обращении к какому-нибудь свойству объекта, свойство сначала ищется в объекте, затем если оно не находится, поиск начинается в прототипе, а затем в прототипе прототипа и т.д. до Object  
`__proto__` ссылка на объект animal.  
animal - прототипа кота.  
У каждого объекта есть прототип, можно создавать цепочки из прототипов.  
Прототип это объект.

Object имеет следующие свойства:
- hasOwnProperty()
- isPrototypeOf()
- propertyIsEnumerable()
- toLocaleString()
- toString()
- valueOf()

## Наследование
Наследование не с помощью прототипа а с помощью класса.

    class Animal {
      constructor() {
        this.age = 10;
      }
      getEat() {
        return 'hrumHrumHrum';
      }
    }

    class Cat {
      constructor() {
        this.mustache = true;
      }
      getVoice() {
        return 'myauMyauMyau';
      }
    }

    class Dog {
      constructor() {
        this.mustache = false;
      }
      getVoice() {
        return 'auAuAu';
      }
    }

    const cat = new Cat();
    const dog = new Dog();

    console.log(cat); // прототипом является Object
    console.log(dog);

Чтобы прототипом сделать Animal, нужно прописать слово `extends` и дбавить в конструктор функцию super().

    class Animal {
      constructor() {
        this.age = 10;
      }
      getEat() {
        return 'hrumHrumHrum';
      }
    }

    class Cat extends Animal {
      constructor() {
        super();
        this.mustache = true;
      }
      getVoice() {
        return 'myauMyauMyau';
      }
    }

    class Dog {
      constructor() {
        this.mustache = false;
      }
      getVoice() {
        return 'auAuAu';
      }
    }

    const cat = new Cat();
    const dog = new Dog();

    console.log(cat); // прототипом является Animal
    console.log(cat.age); // 10
    console.log(dog);

Наследование идет на прототип.  
У каждого объекта может быть только один прототип.

## Как это работает?
Как это работает, прототпы и наследование.

Берем простую функцию, если её вызвать, то она будет создавать объект.

    function Animal() {
      this.age = 10;
      this.getEat = function() {
        return 'hrumHrumHrum';
      }
    }

    function Cat() {
      this.mustache = true;
      this.getVoice = function() {
        return 'myauMyauMyau';
      }
    }

    Cat.prototype = new Animal();
    console.log(Cat); // function Cat()
    console.log(Cat.prototype); // Object { age: 10, getEat: getEat() }
    console.log(Cat.prototype.age); // 10

В старом синтакссие нету super(), поэтому к свойствам родителя нужно обращаться через prototype.

## Что делает super()?
super() - вызывает родительский конструктор. Аналог super в PHP это `parent::construct`.  
getEat() -  не в конструкторе, потому что тогда функция будет отнесена не к прототипу, а к объекту (технически так можно сделать см. ниже).

## Передаём параметры

    class Animal {
      constructor(age) {
        this.age = age;
      }
      getEat() {
        return 'hrumHrumHrum';
      }
    }

    class Cat extends Animal {
      constructor(age) {
        super(age);
        this.mustache = true;
      }
      getVoice() {
        return 'myauMyauMyau';
      }
    }

    const cat = new Cat(5);

    console.log(cat);
    console.log(cat.age); // 5

## Добавляем методы в констурктор
`this.getEat = function() {` - теперь при выводе объекта, в консоли эта функция находится в объекте, а не в прототипе, разницы нет никакой. Но лучше эту функцию располагать в прототипе (объект будет ссылаться на функцию), а не конструкторе (иза используемой памяти). Если свойство записать в прототип, то каждому коту будет 10 лет.

    // class Animal {
    //   constructor(age) {
    //     this.age = age;
    //   }
    //   getEat() {
    //     return 'hrumHrumHrum';
    //   }
    // }

    class Animal {
      constructor(age) {
        this.age = age;
        this.getEat = function() {
          return 'hrumHrumHrum';
        }
      }
    }

    class Cat extends Animal {
      constructor(age) {
        super(age);
        this.mustache = true;
      }
      getVoice() {
        return 'myauMyauMyau';
      }
    }

    const cat = new Cat(5);

    console.log(cat);
    console.log(cat.age); // 5

## Разное
Проблема нативного JS в отличии от jQuery это то что в JS для работы с несколькими DOM элементами нужно использовать циклы.

С помощью класса создадим аналог jQuery, который избавит нас от постоянного создания циклов для группы элементов:

https://youtu.be/zWjT_2hFkMw?feature=shared&t=5442
