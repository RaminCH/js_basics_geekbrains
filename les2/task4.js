// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

for (var a = 0;a < 16; a++) {
    switch (a){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: 
            alert(a);
            break;
        //    case a+=1:
        //        alert(a);
        //        break;
        // default:
        //     alert('error')
        //     break;
    }
}