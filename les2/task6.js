// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

import { add } from './task5.js';
import { subtr } from './task5.js';
import { mult } from './task5.js';
import { div } from './task5.js';

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case operation == add:
            add(arg1, arg2);
            break;
        case operation == subtr:
            subtr(arg1, arg2);
            break;
        case operation == mult:
            mult(arg1, arg2);
            break;
        case operation == div:
            div(arg1, arg2);
            break;
    }
    return operation;
}


var x = new mathOperation(1, 2, add);
alert(x);