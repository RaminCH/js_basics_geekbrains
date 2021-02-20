//Celsius to farenheit
//Tf - Farenheit
//Tc - Celsius

var Tc = prompt('Please enter Celsius temperature')
if (Tc % 1 == 0) {
    var Tf = (9 / 5) * Tc + 32
}
else {
    alert('You entered non integer value')
}


alert('Farenheit equivalent of entry is: ' + Tf)