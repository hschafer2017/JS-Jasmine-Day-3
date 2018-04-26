function whatCanIDrink(a) {
    if (a == 0) {
        return "Sorry. I can't tell you what to drink because that age is incorrect!";
    }
    else if (a > 0 && a <= 14) {
        return "Drink Toddy";
    }
    else if (a > 14 && a <= 18) {
        return "Drink Coke";
    }
    else if (a > 18 && a <= 21) {
        return "Drink Beer";
    } 
    else if (a > 21 && a < 130) {
        return "Drink Whiskey";
    } else {
        return "Sorry. I can't tell you what to drink because that age is incorrect!"
    }
}

