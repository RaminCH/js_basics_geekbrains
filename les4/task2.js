// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы? Реализуйте такие объекты. Перенести функционал подсчета корзины на объектно-ориентированную базу.


var products = {
    clothes: {
        jeans: {
            gender: 'man',
            color: 'blue',
            size: 50,
            price: 30
        },
        boots: {
            gender: 'woman',
            color: 'black',
            size: 37,
            price: 20
        }
    },
    laptops: {
        gaming: {
            brand: 'asus',
            model: 'rog',
            price: 80
        },
        ultra: {
            brand: 'samsung',
            model: 'flex',
            price: 50
        }
    }
}

products.clothes.jeans.price

var basket = [
    {
        productId: 'clothes',
        amount: 15
    }
]

var basketSum = 0;
for (var i=0; i<basket.length; i++) {
    basketSum += products[basket[i].productId].jeans.price * basket.amount
}

console.log(basketSum)

