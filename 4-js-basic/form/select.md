# select
Работаем с тегом select в JavaScript.

## Создаём select

    <select id="fruits">
      <option value="apple">Яблоко</option>
      <option value="banana">Банан</option>
      <option value="orange">Апельсин</option>
    </select>

Этот код создаст выпадающий список с тремя опциями: "Яблоко", "Банан" и "Апельсин". При выборе опции её значение (value) будет отправлено на сервер или обработано на клиентской стороне.

## Получаем значение option

    let yourSelect = document.getElementById( "your-select-id" );
    console.log( yourSelect.options[ yourSelect.selectedIndex ].value )

Чтобы получить доступ к значению выбранного элемента `option` в JavaScript, вам нужно сначала получить элемент `select` с помощью метода `document.getElementById()`. Затем, используя свойство `selectedIndex` этого элемента, вы можете получить выбранный элемент из массива `options`. Затем получить значение выбранного элемента через свойство `value`.

Что такое `selectedIndex` смотри ниже.

Вот пример кода, который демонстрирует этот процесс:

    let selectElement = document.getElementById('fruits');
    // console.log(selectElement.options); // HTMLOptionsCollection
    // console.log(selectElement.options[1]); // <option value="banana">
    // console.log(selectElement.options[1].value); // banana
    // selectElement.selectedIndex = 1; // устанавливаем по-умолчанию чтобы выбирался banana

    // получаем доступ к value у выбранного элемента
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedValue);

    // Можно сократить
    // let selectedIndex = selectElement.selectedIndex;
    // let selectedValue = selectElement.options[selectedIndex].value;

## Что такое selectedIndex в JavaScript?
Свойство `selectedIndex` в JavaScript используется для работы с элементами `<select>` (раскрывающимися списками) и относится к HTML DOM. Оно позволяет устанавливать или возвращать индекс выбранного элемента `<option>` в списке. Индекс начинается с 0, что означает, что первый выбранный элемент будет иметь индекс 0.

Если раскрывающийся список допускает множественный выбор, свойство selectedIndex вернет индекс только первого выбранного элемента. Также стоит отметить, что установка значения `-1` для свойства `selectedIndex` отменяет выбор всех элементов (если таковые имеются). Если ни один элемент не выбран, свойство `selectedIndex` вернет значение `-1`.

Это свойство поддерживается всеми основными браузерами и может быть использовано как для установки индекса выбранного элемента, так и для получения текущего индекса выбранного элемента.

Вот пример кода на JavaScript, который демонстрирует использование свойства `selectedIndex` для установки выбранного индекса элемента `<option>` в раскрывающемся списке:

    // Получаем ссылку на раскрывающийся список
    const selectElement = document.getElementById('fruits');

    // Устанавливаем выбранный индекс на второй элемент списка
    selectElement.selectedIndex = 1;

## Добавляем в пример оператор switch

    let selectElement = document.getElementById('fruits');
    let selectedIndex = selectElement.selectedIndex;
    let selectedValue = selectElement.options[selectedIndex].value;

    switch (selectedValue) {
      case 'apple':
        console.log('Вы выбрали яблоко.');
        break;
      case 'banana':
        console.log('Вы выбрали банан.');
        break;
      case 'orange':
        console.log('Вы выбрали апельсин.');
        break;
      default:
        console.log('Вы выбрали неизвестный фрукт.');
    }

## Какие события JavaScript работают с тегом select?
Тег `<select>` в JavaScript поддерживает следующие события:
- `blur` - происходит, когда элемент теряет фокус,
- `focus` - происходит, когда элемент получает фокус,
- `change` - происходит, когда выбранный элемент в списке изменяется. Это событие особенно полезно для отслеживания изменений в выборе пользователя.

Пример использования события `change`:

