/* Function 1 - hello world

Make a simple function called greet that returns the most-famous "hello world!".


Parameters 
- function has one arguement 

return
- when you call greet it should return hello world

example

  it("Is it a function?", function() {
    assert.strictEqual(typeof greet, "function", "greet should be a function");
  });
  it("Correct return-value?", function() {
    assert.strictEqual(greet(), "hello world!");
  });
});

Pseudo code

- arrow syntax with the () empoty parentheses since its taking in  0  arguement */

const greet = () => "hello world!";