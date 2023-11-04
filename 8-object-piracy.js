// Object Oriented Piracy

/* You begin with writing a generic Ship class / struct:

function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
} 

Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt */

class Ship {
    constructor(draft,crew){
     this.draft = draft;
     this.crew = crew;
    }
     
     isWorthIt(){
       return this.draft - 1.5 * this.crew > 20;
     }
  }