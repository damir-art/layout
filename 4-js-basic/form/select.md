# select
Работаем с тегом select в JavaScript.

## Создаём select

    <select id="fruits">
      <option value="apple" selected="selected">Яблоко</option>
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

Пример использования события `change`, в консоли появляются значение value у выбранного элемента, а также его текстовая информация помещенная между тегами `option`:

    let selectElement = document.getElementById('fruits');
    selectElement.addEventListener("change", changeOption);

    function changeOption () {
      let selectedIndex = selectElement.selectedIndex;
      let selectedValue = selectElement.options[selectedIndex].value;
      let selectedText = selectElement.options[selectedIndex].text;
      console.log(selectedValue); // value
      console.log(selectedText);  // text

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
    }

## Получение первого элемента списка и вывод информации о нём

    <form name="myForm">
      <select name="language" size="4">
        <option value="JS">JavaScript</option>
        <option value="Java">Java</option>
        <option value="C#">C#</option>
        <option value="C++">C++</option>
      </select>
    </form>

    <script>
      const firstLanguage = document.myForm.language.options[0];
      console.log("Index:", firstLanguage.index); // 0
      console.log("Text:", firstLanguage.text);   // JavaScript
      console.log("Value:", firstLanguage.value); // JS
    </script>

## Динамическое добавление и удаление элементов списка

    <form name="myForm">
      <select name="language" size="5">
        <option value="JS" selected="selected">JavaScript</option>
        <option value="Java">Java</option>
        <option value="CS">C#</option>
        <option value="CPP">C++</option>
      </select>
      <p><input type="text" name="textInput" placeholder="Введите текст" /></p>
      <p><input type="text" name="valueInput" placeholder="Введите значение" /></p>
      <p>
        <input type="button" name="addButton" value="Добавить" />
        <input type="button" name="removeButton" value="Удалить" />
      </p>
    </form>

    const myForm = document.myForm;
    const languagesSelect = myForm.language;
    const addButton = myForm.addButton;
    const removeButton = myForm.removeButton;

    // Обработчик добавления элемента
    function addOption() {

      // Получаем текст для элемента
      const text = myForm.textInput.value;

      // Получаем значение для элемента
      const value = myForm.valueInput.value;

      // Создаём новый элемент, добавляем в массив с индексом длины массива
      const newOption = new Option(text, value);
      languagesSelect.options[languagesSelect.options.length] = newOption;
    }

    // Обработчик удаления элемента
    function removeOption() {
      // Получаем индекс выделенного элемента
      const selectedIndex = languagesSelect.options.selectedIndex;
      // Удаляем выделенный элемент, ставя ему значение null
      languagesSelect.options[selectedIndex] = null;
    }

    addButton.addEventListener("click", addOption);
    removeButton.addEventListener("click", removeOption);

## Обработка события изменения выбранного элемента в списке

    <div class="container">
      <form name="myForm">
        <select name="language" size="5">
          <option value="JS" selected="selected">JavaScript</option>
          <option value="Java">Java</option>
          <option value="CS">C#</option>
          <option value="CPP">C++</option>
        </select>
      </form>
      <div id="selection"></div>
    </div>

    <script>
      const languagesSelect = document.myForm.language;
      const selection = document.getElementById("selection");

      function changeOption() {
        const selectedOption = languagesSelect.options[languagesSelect.selectedIndex];
        selection.textContent = "Вы выбрали: " + selectedOption.text;

        console.log(selectedOption); // Выбранный элемент
        console.log(languagesSelect.selectedIndex); // Индекс выбранного элемента
      }

      languagesSelect.addEventListener("change", changeOption);
    </script>
