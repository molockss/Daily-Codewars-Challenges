/* No Loops 2 - You only need one

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.


Parameters

- array can contain numbers or strings
- no loops allowed

return
- return true if it contains the value x inside the array
- false if it doesnt

examples

describe("Basic tests",() =>{
  it('Sample tests', () => {
    assert.strictEqual(check([66, 101], 66), true);
    assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
    assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

Pseudo code
- to check if something is included in an array we use the method .includes
- this sieves through the array and sees if it can find the value we're looking for */


//Normal way

function check(a,x){
  
    const numbers = [...a]
      
     return numbers.includes(x);
      
    };

    // // slick way using arrow syntax
    // const check = (a,x) => a.includes(x) ;