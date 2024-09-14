# Контекст
Контекст в JavaScript.

Контекст в JavaScript - это окружение, в котором выполняется код, включая доступные переменные, объекты и функции. Проще говоря, это набор значений, к которым можно обратиться во время выполнения кода.

## Пример 1: Изменение контекста с помощью метода call

    const car = {
      brand: 'BMW',
      model: 'X5',
      startEngine: function() {
        console.log(`Запускаем двигатель ${this.brand} ${this.model}`);
      }
    };

    car.startEngine(); // Запускаем двигатель BMW X5

    const truck = {
      brand: 'Volvo',
      model: 'FH16'
    };

    car.startEngine.call(truck); // Запускаем двигатель Volvo FH16

В этом примере мы используем метод `call` для изменения контекста выполнения функции startEngine с объекта `car` на объект `truck`. Это позволяет нам изменить значения brand и model, которые используются в функции, без изменения самой функции.

## Пример 2: Доступ к контексту через this

    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    Person.prototype.greet = function() {
      console.log(`Привет, я ${this.firstName} ${this.lastName}`);
    };

    const person = new Person('John', 'Doe');
    person.greet(); // Привет, я John Doe

Здесь мы создаем объект `person` с помощью конструктора `Person`, который устанавливает свойства `firstName` и `lastName`. Затем мы используем метод `greet`, который обращается к этим свойствам через ключевое слово `this`. Это позволяет нам получить доступ к контексту объекта `person` внутри метода `greet`.
