
//Part One
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}
adventurer.inventory.forEach((each)=>
console.log(each));
console.log(`${adventurer.name}\n ${adventurer.health}`);
console.log(adventurer.roll());

//Part 2
class Character {
    static MAX_HEALTH = 100;
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
  }
  
  class Adventurer extends Character{
    static ROLES = ["Fighter","Healer", "Wizard"];
    constructor (name, role, companion) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      this.companion= companion;
      if(Adventurer.ROLES.includes(this.role)===false){
        Adventurer.ROLES.push(this.role);
        console.log("the array doesn't contain this role"+this.role)
      }
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
     
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    //override
    toString(){
        console.log(`name = ${this.name} , role = ${this.role}, companion =${this.companion.toString()}`);
        this.inventory.forEach((each)=>{
            console.log(each);
        })
       
    }
  }
    class Companion extends Character{
        constructor(name, type) {

            super(name);
            this.type = type;
        }
        toString(){
          console.log(`${this.name} , ${this.type}`)
        }

    }
const robinCompanion=new Companion("Leo","cat");
const duaaCompanion=new Companion("Jood","baby");
const robin2 = new Adventurer("robin","swimmer",robinCompanion);
const duaa = new Adventurer("duaa","climber",duaaCompanion);
const Anne = new Adventurer("Anne","engineer");


//Part 4
console.log(Character.MAX_HEALTH);
Adventurer.ROLES.forEach((each)=>{
  console.log(each)
})

