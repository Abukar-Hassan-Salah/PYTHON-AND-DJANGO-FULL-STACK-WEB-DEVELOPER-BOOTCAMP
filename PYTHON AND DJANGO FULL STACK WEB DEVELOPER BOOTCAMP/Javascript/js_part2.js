var bank = prompt("Enter your bank name");
var deposit = prompt("Enter your deposit amount");
var interest = prompt("Enter your interest rate");
var years = prompt("Enter number of years");
var total = deposit * (interest / 100) * years;
alert("Hello, your total interest after " + years + " years will be: " + total);
console.log("Hello, your total interest after " + years + " years will be: " + total);