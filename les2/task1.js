var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2   -> pre increment of null value of 'c', while ++a returns after increment value -> hence ++a = 1 + 1
d = b++; alert(d);           // 1   -> post incr. of null value of 'd', while b++ returns value before incr. -> hence b++ still will be 1
c = (2+ ++a); alert(c);      // 5   -> 'a' has already 2 at its address, we add after incr. value of 1 to it -> get 3 and add 2 at the end -> hence 5
d = (2+ b++); alert(d);      // 4   -> after post incr. of 'b' in line 3, that was '1'at that time, after b++ here we receive the value of 2
alert(a);                    // 3   -> while 'a' had pre incr. at line '4' we still get the value of '3' here 
alert(b);                    // 3   -> after last incr. at line '5' which value at that time was 2, here we get post incr. value of 3