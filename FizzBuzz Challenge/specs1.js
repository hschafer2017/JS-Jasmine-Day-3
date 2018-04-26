function fizzBuzz() {
for (a = 330; a <=340; a++) {
    if ((a / 5) % 1 == 0 && (a / 3) % 1 == 0) {
        console.log( a  +"FizzBuzz");
    }
    else if ((a / 3) % 1 == 0 && (a / 5) % 1 != 0) {
        console.log( a+"Fizz");
    }

    else if ((a / 3) % 1 != 0 && (a / 5) % 1 == 0) {
        console.log(a+"Buzz");
    }    

    else if ((a + "").indexOf("3") >= 0) {
        fizzArray = a.toString().split('')
        let count = 0;
        for (i = 0; i <= fizzArray.length; i++) {
            if (fizzArray[i] == 3) {
                count++
            }
        }

        function repeatString(string, num) { return string.repeat(num); }
        console.log(repeatString(a +"Fizz", count));
    }

    else if ((a + "").indexOf("5") >= 0) {
        console.log("Buzz");
    }
    else {
        console.log(a);
    }
} }

fizzBuzz();
