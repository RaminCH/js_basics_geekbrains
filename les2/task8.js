// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (power == 0) {
        return 1;
    }
    else {
        return val * power(val, pow); 
    } 
}

var x = new power(2, 3);
alert(x);