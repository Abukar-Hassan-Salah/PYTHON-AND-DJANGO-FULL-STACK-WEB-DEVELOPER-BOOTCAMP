var x = 0
while (x < 5) {
    console.log("X is Currently : " + x);
    if (x === 3) {
        console.log("x is equal 3")
        break;
    }
    console.log("x is still less than 10 ,adding 1 to x")
    x += 1
}

///even numbers using while loop
var num = 1
while (num < 11) {
    if (num % 2 == 0) {
        console.log(num)
    }

    num += num
}