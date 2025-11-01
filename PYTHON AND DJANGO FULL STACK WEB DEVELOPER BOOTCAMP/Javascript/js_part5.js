// if else control flows
var hot = false
var temp = 60
if (hot => temp) {
    console.log("it is hot")
} else {
    console.log("it not hot")
}
//if true
hot = true
if (temp > 80) {
    console.log("Is Hot Outside!")
} else {
    console.log("It Not Hot Today!")
}
//if else if statements
if (temp > 90) {
    console.log("it is hot outside")
} else if (temp <= 80 && temp >= 50) {
    console.log("it is pretty cool")
} else {
    console.log("it is very Hot")
}


//
var ham = 90
var cheese = 10

var report = "blank"
if (ham > 10 && cheese >= 10) {
    report = "string sales of both ham and cheese!"
} else if (ham == 0 && cheese == 0) {
    report = "Nothing Sold"
} else {
    report = "We Had Some Sales Of Items"
}
console.log(report)