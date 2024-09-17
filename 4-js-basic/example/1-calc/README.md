# Домашнее задание №1 (создание калькулятора)
- Создать калькулятор с 4 операциями (+, -, *, /).
- Для выбора операции используйте тег `select`.
- В калькуляторе после выполнения действия блокировать кнопку `=` до тех пор, пока пользователь не изменит введённые данные.
- При вводе в поля символы, отличные от цифр, моментально удалять их.

Начальный код:

    /* CSS */
    .calculator {
      margin: 20px;
    }

    <!-- HTML -->
    <div class="calc">
      <input type="text" class="num1">
      <select id="calc__list">
        <option value="sum" selected="selected">+</option>
        <option value="min">-</option>
        <option value="mult">*</option>
        <option value="div">/</option>
      </select>
      <input type="text" class="num2">
      <button type="button" class="btnRun">=</button>
      <span class="result"></span>
    </div>

    /* JavaScript */
    let inp1 = document.querySelector('.num1');
    let inp2 = document.querySelector('.num2');
    let btnRun = document.querySelector('.btnRun');
    let resultBox = document.querySelector('.result');

    btnRun.addEventListener('click', function() {
      let total = parseInt(inp1.value) + parseInt(inp2.value);
      resultBox.innerHTML = total;
    });
