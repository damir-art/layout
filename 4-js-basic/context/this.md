# this
Что такое this в JavaScript.

this - ссылка на текущий контекст вызова (ссылка на текущий объект). Где конкретно вызвана функция.

    function context() {
      console.log(this);
    }

    context(); // Window

В JavaScript ключевое слово `this` относится к объекту, в контексте которого вызывается функция. Проще говоря, это указатель на текущий объект или контекст выполнения функции.

## Пример 1: Использование this в конструкторе

    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    Person.prototype.greet = function() {
      console.log(`Привет, я ${this.firstName} ${this.lastName}`);
    };

    const person = new Person('John', 'Doe');
    person.greet(); // Привет, я John Doe

В этом примере мы создаем объект `person` с помощью конструктора `Person`. Внутри конструктора мы устанавливаем свойства `firstName` и `lastName` объекта, используя `this`. Затем мы вызываем метод `greet`, который выводит приветствие, обращаясь к свойствам объекта через `this`.

## Пример 2: Изменение контекста с помощью this

    const obj1 = {
      name: 'Объект 1',
      showName: function() {
        console.log(this.name);
      }
    };

    const obj2 = {
      name: 'Объект 2',
      showName: obj1.showName
    };

    obj2.showName(); // Объект 2

В этом примере мы создаем два объекта, `obj1` и `obj2`. У каждого объекта есть свойство `showName`, которое является ссылкой на одну и ту же функцию. Однако, когда мы вызываем `showName` на `obj2`, контекст выполнения функции изменяется на `obj2`, поэтому выводится имя этого объекта.
