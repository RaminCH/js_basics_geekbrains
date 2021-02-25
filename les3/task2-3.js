// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


//clothes of web market
var clothes = [];         
var pant1 = "jeans1";
var coat = "coat1";
var boots = "sneakers1"

clothes.push(pant1);
console.log(clothes);

//-----------------------------------------

function bascketTotal() {
    var bascket = [];
    var newArray = bascket.concat(clothes);
    return newArray;
}

//-----------------------------------------

var clothesPrice = [];
var jeans1 = 25;
var coat1 = 35;
clothesPrice.push(jeans1);
clothesPrice.push(coat1);
console.log(clothesPrice);


function countBasketPrice(clothesPrice) {
    var price = null
    for (var i=0; i < clothesPrice.length; i++) {
        price += clothesPrice[i]
    }
    return price
}

var totalCount = bascketTotal(clothes)
console.log(totalCount)

var totalPrie = countBasketPrice(clothesPrice)
console.log(totalPrie)