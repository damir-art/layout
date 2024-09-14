# Функция constructor

Функция-конструктор в JavaScript – это специальная функция, которая используется для создания новых объектов. Она отличается от обычных функций тем, что её вызывают с ключевым словом `new`, что позволяет инициализировать новый объект и установить его свойства.

## Пример 1: Создание объекта "Продукт"

    function Product(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }

    // Создание новых продуктов
    const phone = new Product("Смартфон", 1000, "Мощный смартфон с большим экраном");
    const laptop = new Product("Ноутбук", 1500, "Портативный компьютер для работы и развлечений");

    console.log(phone.name); // Смартфон
    console.log(laptop.price); // 1500

В этом примере мы создали функцию-конструктор `Product`, которая принимает три параметра: `name`, `price` и `description`. Внутри конструктора мы используем ключевое слово `this` для установки свойств объекта. Затем мы создаем два новых объекта `phone` и `laptop`, передавая соответствующие параметры в конструктор.

## Пример 2: Создание счетчика

    function Counter() {
      this.count = 0;
      this.increment = function() {
        this.count++;
      };
    }

    var counter1 = new Counter();
    var counter2 = new Counter();

    counter1.increment();
    console.log(counter1.count); // 1
    console.log(counter2.count); // 0

В этом примере мы создали функцию-конструктор Counter, которая устанавливает начальное значение счетчика в 0. Также мы добавили метод increment, который увеличивает счетчик на единицу. Затем мы создаем два новых объекта counter1 и counter2, каждый из которых имеет свой собственный счетчик.
