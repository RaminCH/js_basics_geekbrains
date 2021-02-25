var counter = 2;
while (counter <= 100) {
    var notPrime = false;
    var i = 2;
    while (i <= counter) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
      i++
    }
    if (notPrime === false) {
      console.log(counter);
    }
  counter++;
}