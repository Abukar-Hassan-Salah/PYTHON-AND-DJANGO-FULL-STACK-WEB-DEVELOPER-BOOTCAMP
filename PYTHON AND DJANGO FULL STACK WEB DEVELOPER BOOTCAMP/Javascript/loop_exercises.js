///loop exercises

///write a while loop that prints out 5 times the hello world

var count = 0;
while (count < 5) {
    console.log("hello world with while loop");
    count++;
}

///write a loop that prints out the hello world 5 times
var word = "hello world with for loop";
for (var i = 0; i < word.length; i++) {
    console.log(word)
};



///write a loop that prints out the even numbers between 1-20

for (var i = 2; i <= 20; i += 2) {
    console.log("even number: ")
    console.log(i)
}

//while loop that prints out the even numbers between 1-20
var num = 2;
while (num <= 20) {
    console.log("even number: using while loop")
    console.log(num);
    num += 2;
}