// 1.
// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. Продолжить работу с интернет-магазином:

var num = prompt('Please enter the number between 0 and 999 ');

var arr = [];
var i = 1;

while (num > 0 && num < 1000) {
    if (num < 0 && num > 999) {
        console.log('You entered wrong number!');   //doesn't appear in console
        arr = [];
    } else {
        arr.unshift((num % 10) * i);
        num = Math.floor(num / 10);
        i *= 10
    }
}

//Printing results before putting them into the Object (test)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])


//Creating Object
var dictionary = {
    digits: {
        units: arr[2],
        decimals: arr[1],
        hundreds: arr[0]
    }
}

//Printing each number's rank   ex. entered number is: 345
console.log(dictionary.digits.units)                //5
console.log(dictionary.digits.decimals)             //40
console.log(dictionary.digits.hundreds)             //300

//Printing the whole object 
console.log(dictionary.digits)                      //{units: 5, decimals: 40, hundreds: 300}

