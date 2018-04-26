describe("Drink About", function(){
    describe("Age Check", function(){
        it("Less than zero", function(){
            expect(whatCanIDrink(0)).toBe("Sorry. I can't tell you what to drink because that age is incorrect!");
        });
        it("Drink Toddy", function(){
            expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });
        it("Drink Coke", function(){
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("Drink Beer", function(){
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("Drink Whiskey", function(){
            expect(whatCanIDrink(120)).toBe("Drink Whiskey");
        });
        it("Not a number negative", function(){
            expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell you what to drink because that age is incorrect!");
        });
        it("Not a number", function(){
            expect(whatCanIDrink("Age")).toBe("Sorry. I can't tell you what to drink because that age is incorrect!");
        });
    })
})