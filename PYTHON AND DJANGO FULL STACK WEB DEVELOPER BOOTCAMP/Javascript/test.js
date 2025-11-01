// School Cafeteria Sales System
//1 Ask how many students bought lunch today
let numStudents = parseInt(prompt("How many students bought lunch today?"));
let totalSales = 0;
// 2 Use a loop to record each student’s order.
for (let i = 1; i <= numStudents; i++) {
    //3 Inside the loop:
    // Ask how many sandwiches and drinks were bought.
    // Ask for the price of each item.
    // Calculate the total amount the student paid.
    let sandwiches = parseInt(prompt(`Student ${i}: How many sandwiches did you buy?`));
    let drinks = parseInt(prompt(`Student ${i}: How many drinks did you buy?`));

    let sandwichPrice = parseFloat(prompt("Enter the price of one sandwich:"));
    let drinkPrice = parseFloat(prompt("Enter the price of one drink:"));

    let studentTotal = (sandwiches * sandwichPrice) + (drinks * drinkPrice);
    totalSales += studentTotal;
    // 4 Display the result using template literals.
    console.log(`Student ${i} paid $${studentTotal.toFixed(2)}.`);
} //5 After the loop, display the total sales for the day.
console.log(`\nTotal sales for the day: $${totalSales.toFixed(2)}.`);
// 6 If the total sales exceed $150, display a congratulatory message. Otherwise, encourage more sales.
if (totalSales > 150) {
    console.log("Great job! The cafeteria did well today!");
} else {
    console.log("Try to attract more students tomorrow!");
}