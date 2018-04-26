describe("calculator tests", function(){
  describe("Addition tests", function() {
      it("should return 4", function(){
          expect(addition(2,2)).toBe(4);
      }); 
      it("should not return 4 for different numbers", function(){
          expect(addition(20,22)).toBe(42);
      })
      it("should show an alert for NaN", function(){
          spyOn(window, "alert"); 
          addition("Fish", 22); 
          expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers"); 
      })
     it("should show an alert if we only supply one number", function(){
         spyOn(window, "alert"); 
          addition(42); 
          expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
     })
  })
  describe("Subtraction function", function(){
    it("should return 3", function(){
         expect(subtraction(6,3)).toBe(3);
     });
     it("should not return 3 for all maths", function(){
         expect(subtraction(4,2)).toBe(2);
     }); 
     it("should show an alert for NaN", function(){
          spyOn(window, "alert"); 
          subtraction("Sushi", 12); 
          expect(window.alert).toHaveBeenCalledWith("The Monsters are Coming"); 
      }); 
      it("should show an alert if we only supply one number", function(){
         spyOn(window, "alert"); 
          subtraction(15); 
          expect(window.alert).toHaveBeenCalledWith("The Monsters are Coming");
     });
     it("should not return a negative number", function(){
         spyOn(window, "alert"); 
         subtraction(2,4); 
         expect(window.alert).toHaveBeenCalledWith("The Answer is Negative!");
     })
  })
describe("Multiplication Function", function() {
      it("should return 16", function(){
          expect(multiplication(4,4)).toBe(16);
      }); 
      it("should not always return 16", function(){
          expect(multiplication(20,20)).toBe(400);
      })
      it("should show an alert for NaN", function(){
          spyOn(window, "alert"); 
          multiplication("Cats", 22); 
          expect(window.alert).toHaveBeenCalledWith("Check your facts!"); 
      })
     it("should show an alert if we only supply one number", function(){
         spyOn(window, "alert"); 
          multiplication(42); 
          expect(window.alert).toHaveBeenCalledWith("Check your facts!");
     })
  })
   describe("Division function", function(){
    it("should return 3", function(){
         expect(division(6,3)).toBe(2);
     });
     it("should not return 2 for all maths", function(){
         expect(division(4,4)).toBe(1);
     }); 
     it("should show an alert for NaN", function(){
          spyOn(window, "alert"); 
          division("Dust", 12); 
          expect(window.alert).toHaveBeenCalledWith("You can't divide by zero!"); 
      }); 
      it("should show an alert if we only supply one number", function(){
         spyOn(window, "alert"); 
          division(15); 
          expect(window.alert).toHaveBeenCalledWith("You can't divide by zero!");
     });
     it("should not return a decimal", function(){
         spyOn(window, "alert"); 
         division(2,4); 
         expect(window.alert).toHaveBeenCalledWith("The answer is a decimal!");
     })
     it("should not return a decimal", function(){
         spyOn(window, "alert"); 
         division(5,4); 
         expect(window.alert).toHaveBeenCalledWith("The answer is a decimal!");
     })
  })
})