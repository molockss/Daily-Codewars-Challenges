// I love you, a little , a lot, passionately ... not at all

/* Parameters

array of positive integers, we're counting number of petals being teared


Returns

Should return a string with the following 8 Pharases; 
I love you, a little , a lot, passionately ... not at all


Examples

describe("howMuchILoveYou",function() {
  it("Basic tests",function() { 
    assert.strictEqual(howMuchILoveYou(7),"I love you")
    assert.strictEqual(howMuchILoveYou(3),"a lot")
    assert.strictEqual(howMuchILoveYou(6),"not at all")
  });
})


Pseudo

first step is to create a loop that loops through the number of petals being torn
you then want to return a string that correlates with the number of petals */


function howMuchILoveYou(nbPetals) {
    let phrase = {    
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    }
    return phrase[nbPetals%6 ] // you use the modulus to return the remainder. reason why is you want to see how much petals are left if 1 is "i love you"
  }
 
  
