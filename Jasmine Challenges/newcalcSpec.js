describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            areaOfCircle("Dust");
            expect(window.alert).toHaveBeenCalledWith("Must be a number!");
        });
    });

    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            squareRoot("Dust");
            expect(window.alert).toHaveBeenCalledWith("No imaginary numbers!");
        });
        it("should show an alert for imaginary numbers", function() {
            spyOn(window, "alert");
            squareRoot(-1);
            expect(window.alert).toHaveBeenCalledWith("No imaginary numbers!");
        });
    });

    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        it("should return 2 as the square of 4", function() {
            expect(squareMe(2)).toBe(4);
        });
        it("should show an alert for negative numbers", function() {
            spyOn(window, "alert");
            squareMe(-1);
            expect(window.alert).toHaveBeenCalledWith("No negative numbers!");
        });
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            squareMe("Rice");
            expect(window.alert).toHaveBeenCalledWith("No negative numbers!");
        });
    });
    describe("Cube Me function", function() {
        it("should return 8 as the square of 2", function() {
            expect(cubeMe(2)).toBe(8);
        });
        it("should return 21 as the cube of 3", function() {
            expect(cubeMe(3)).toBe(27);
        });
        it("should show an alert for negative numbers", function() {
            spyOn(window, "alert");
            cubeMe(-1);
            expect(window.alert).toHaveBeenCalledWith("No negative numbers!");
        });
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            cubeMe("Rice");
            expect(window.alert).toHaveBeenCalledWith("No negative numbers!");
        });
    });
    describe("Area of a Triangle function", function() {
        it("should return area of a triangle as 4", function() {
            expect(triangleArea(2,4)).toBe(4);
        });
        it("should return area of a triangle", function() {
            expect(triangleArea(3,2)).toBe(3);
        });
        it("should show an alert for negative numbers", function() {
            spyOn(window, "alert");
            triangleArea(-1, 4);
            expect(window.alert).toHaveBeenCalledWith("Area not valid!");
        });
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            triangleArea("Rice", 4);
            expect(window.alert).toHaveBeenCalledWith("Area not valid!");
        });
    });
});
    describe("How long until 2018?", function(){
        it("should be 3 years until 2018", function(){
            expect(yearCalc(2015)).toBe(3);
        });
        it("should be more than 3 years until 2018", function(){
            expect(yearCalc(2011)).toBe(7);
        });
        it("should show an alert for negative years", function() {
            spyOn(window, "alert");
            yearCalc(-1);
            expect(window.alert).toHaveBeenCalledWith("Invalid Year");
        });
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            yearCalc("Rice");
            expect(window.alert).toHaveBeenCalledWith("Invalid Year");
        });
        it("should show an alert for years greater than 2018", function() {
            spyOn(window, "alert");
            yearCalc(2019);
            expect(window.alert).toHaveBeenCalledWith("Invalid Year");
        });
        
    });
describe("Area of a Cylinder function", function() {
        it("should return area of a cylinder as 75", function() {
            expect(areaCyl(2,4)).toBe(75);
        });
        it("should return area of a cylinder as 4", function() {
            expect(areaCyl(3,5)).toBe(131);
        });
        it("should show an alert for negative input", function() {
            spyOn(window, "alert");
            areaCyl(-1, 9);
            expect(window.alert).toHaveBeenCalledWith("Invalid Area!");
        });
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            areaCyl("Rice");
            expect(window.alert).toHaveBeenCalledWith("Invalid Area!");
        });
        
});