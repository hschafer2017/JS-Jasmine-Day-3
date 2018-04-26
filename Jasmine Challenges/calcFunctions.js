function areaOfCircle(n) {
    if (typeof(n) == "number") {
        let result = 3.1416 * (n * n);
        return Number(result.toFixed(2));
    }
    else {
        alert("Must be a number!");
    }
}

function squareRoot(n) {
    if (n > 0) {
        let result = Math.sqrt(n);
        return Number(result.toFixed(2));
    }
    else {
        alert("No imaginary numbers!");
    }
}

function squareMe(n) {
    if (n > 0) {
        let result = n * n;
        return Number(result.toFixed(2));
    }
    else {
        alert("No negative numbers!");
    }
}

function cubeMe(n) {
    if (n > 0) {
        let result = n * n * n;
        return Number(result.toFixed(2));
    }
    else {
        alert("No negative numbers!");
    }
}

function triangleArea(b, h) {
    if (typeof(b) == "number" && typeof(h) == "number") {
        if (b > 0 && h > 0) {
            let result = (b * h) / 2;
            return Number(result.toFixed(2));

        }
        else {
            alert("Area not valid!");
        }
    }
    else {
        alert("Area not valid!");
    }
}

function yearCalc(b) {
    if (typeof(b) == "number") {
        if (b > 0 && 2018 >= b) {
            let result = 2018 - b;
            return Number(result.toFixed(2));
        }
        else {
            alert("Invalid Year");
        }
    }
    else {
        alert("Invalid Year");
    }
}

// A=2πrh+2πr2
function areaCyl(r,h){
    if(typeof(r) == "number" && typeof(h) == "number"){
        if (r > 0 && h > 0){
            let result = Math.floor((2 * 3.1415 * r * h) + (2 * 3.1415 * r * 2));
            return Number(result.toFixed(2)); 
        } else {
            alert("Invalid Area!")
        }
    } else {
        alert("Invalid Area!")
    }
}
