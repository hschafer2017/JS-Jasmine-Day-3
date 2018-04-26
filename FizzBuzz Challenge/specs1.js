function fizzBuzz(a) {
    if ((a / 5) % 1 == 0 && (a / 3) % 1 == 0) {
        return "FizzBuzz";
    }
    else if ((a / 3) % 1 == 0 && (a / 5) % 1 != 0) {
        return "Fizz";
    }
    else if ((a + "").indexOf("3") >= 0) {
        return "Fizz";
    }
    else if ((a / 3) % 1 != 0 && (a / 5) % 1 == 0) {
        return "Buzz";
    } else if ((a + "").indexOf("5") >= 0) {
        return "Buzz";
    }
else {
    return a;
}
}
