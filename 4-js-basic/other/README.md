# Разное
Алгоритм создания скрипта в JavaScript:
- получаем все DOM-элементы, участвующие в скрипте
- проверяем в консоли, правильно ли получили доступ
- подписываем дом элементы к событиям и вешаем на них обработчики

Как писать код:
- Сначала учатся писать код чтобы он работал
- Потом чтобы код был оптимизирован
- Далее добавляют try catch

Многие решения проблем можно нагуглить, но нельзя нагуглить что в какое время запускается в JavaScript (понимание моментов времени в JS).

- весь код должен быть разбит на мелкие функции, каждая функция должна выполнять свою определённую мелкую задачу
- `use strict` в начале кода уже не помещают, нет смысла,
- стрелочные функции созданы для того чтобы сохранять контекст,
- у хорошего программиста всегда срабатывает триггер на повторяющийся или похожий код, чтобы сократить его циклом или ассоциативным массивом, а также если логика повторяющегося кода изменится то его придется исправлять несколько раз во многих местах

## Разница между null и undefined
undefined означает что переменной вообще нет (такой ячейки с таким именем нет). Если к отсутствующей переменной применить какой-нибудь метод, то появится ошибка undefined. Но если к null применить метод, то появится сообщение что у null нет такого метода, например у null есть метод toString().
