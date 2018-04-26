describe("FizzBuzz Game", function(){
    describe("The Buzz", function(){
        it("should return FizzBuzz", function(){
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return Fizz", function(){
            expect(fizzBuzz(9)).toBe("Fizz");
        });
        it("should return Fizz 3", function(){
            expect(fizzBuzz(31)).toBe("Fizz");
        });
        it("should return Buzz", function(){
            expect(fizzBuzz(10)).toBe("Buzz");
        });
        it("should return Buzz 5", function(){
            expect(fizzBuzz(52)).toBe("Buzz");
        });
        it("should return input", function(){
            expect(fizzBuzz(4)).toBe(4);
        });
    })
})