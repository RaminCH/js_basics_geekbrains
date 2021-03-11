var button = document.getElementById("button");
var select = document.getElementById("select");
var basket = document.getElementById("basket");
var totalCost = document.getElementById("total-cost");
 
var myBasket = [];
 
function addToBasket() {
  var item = {
    value: Number(select.options[select.selectedIndex].value),
    name: select.options[select.selectedIndex].text
  };
  myBasket.push(item)
  recalculate();
}
 
function recalculate() {
  printBasket();
  printCost();
}
 
function printCost() {
  var cost = myBasket.reduce(function (acc, item) {
    return acc + item.value;
  }, 0);
  totalCost.innerText = cost;
}
 
function printBasket() {
  basket.innerHTML = '';
  myBasket.forEach(function(item) {
     var li = document.createElement("li");
 li.innerHTML = item.name;
 basket.appendChild(li);
  })
}
 
document.getElementById("remove-button").onclick = function() {
myBasket.pop();
recalculate();
}
 
button.addEventListener("click", addToBasket);