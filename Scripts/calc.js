function addition(a, b) {
    if (typeof(a) == "number" && typeof(b) == "number") {
        return a + b;
    }
    else {
        alert("Arguments must both be numbers");
    }
}

// function subtraction(a,b){
//     return 3;
// }
// function subtraction (a,b){
//     return a-b;
// }
function subtraction(a, b) {
    if (a < b) {
        alert("The Answer is Negative!");
    }
    if (typeof(a) == "number" && typeof(b) == "number") {
        return a - b;
    }
    else {
        alert("The Monsters are Coming");
    }
}


// function addition(a,b){
//     return 4;}
function multiplication(a, b) {
    if (typeof(a) == "number" && typeof(b) == "number") {
        return a * b;
    }
    else {
        alert("Check your facts!");
    }
}

function division(a, b) {
    if ((a / b) % 1 != 0) {
        console.log((a / b) % 1);
        alert("The answer is a decimal!");
    }
    if (typeof(a) == "number" && typeof(b) == "number") {
        return a / b;
    }
    else {
        alert("You can't divide by zero!");
    }
}
