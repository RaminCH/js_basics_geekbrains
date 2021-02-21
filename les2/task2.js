var a = 2;
var x = 1 + (a *= 2);

alert(x)    //5 -> because '*=' means a = a * 2, where a = 2 -> hence var x = 1 + (a = 2 * 2) = 5