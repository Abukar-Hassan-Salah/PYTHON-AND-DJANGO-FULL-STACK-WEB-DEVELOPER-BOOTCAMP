//user input
var firstname = prompt("What is your fname :?");
var lasttname = prompt("What is your lname :?");
var age = prompt("How old are you :?");
var height = prompt("How tall are you in inches :?");
var petname = prompt("Do you have a pet? If so, what is its name? If not, type no. :");
alert("Thank you for your answers. Click OK to see if you are a spy.");



///four codition
var namecondition = null;
var agecond = null;
var heightcond = null;
var petcond = null;



//name codition
if (firstname[0] === lasttname[0]) {
    namecond = true;
} else {
    namecond = false;
}

//age conditon
if (age > 20 && age < 30) {
    agecond = true;
} else {
    agecond = false;
}

//height condition
if (height >= 170) {
    heightcond = true;
} else {
    heightcond = false;
}

//pet condition
if (petname[petname.length - 1] === 'y') {
    petcond = true;
} else {
    petcond = false;
}


//check if all conditions are true
if (namecondition && agecond && heightcond && petcond) {
    console.log("Welcome Spy");
} else {
    console.log("Nothing to see here");
}