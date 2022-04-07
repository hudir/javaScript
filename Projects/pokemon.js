console.log("welcome to our project");

class Pokemon {
  constructor(name, health, magic, skills=[]) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = skills; // this is an array

    this.maxMagic = magic; // 80
    this.maxHealth = health; // 120
  };

  learnAttackSkill(...arr){
      this.skills.push(...arr);
      arr.forEach((el,i)=>{
        console.log(`-------- ${this.name} now can use ${el.nameOfAttack} with index ${i}`);
      })
      
  };

  showStatus(){
    this.health > 0 ? console.log(`Status: ${this.name}'s health: ${this.health} and magic: ${this.magic}`) : console.log(`${this.name} is already dead!`)
   
  };

   //   -------------------------------------------------------------
  attack(index , who){
    let attObj = this.skills[index];

    // check if pokemon it self is alive
    if (this.health <= 0) {
        console.log(`${this.name} is already dead!`);
        return;
    }

    // check if who is dead already
    if (who.health <= 0) {
        console.log(`${who.name} is already dead!`);
        return;
    }

    // check if there is element with this index in skills array
    if (!attObj) {
        console.log(`There is no such skill, pls try with ohter index`);
        return;
    };

    // check if this pokemon has enough magic for attack
    if (attObj.requiredMagic > this.magic) {
        console.log(`${this.name} has only ${this.magic} magic, and ${attObj.nameOfAttack} need ${attObj.requiredMagic} magic, ${this.name} need mana!!!`);
        return;
    };
    

    // update magic
    this.magic = this.magic - attObj.requiredMagic;

    // update who's health
    who.health = who.health - attObj.damage;

    // show the attack status
    console.log(`${this.name} launched skill '${attObj.nameOfAttack}' successfully!`)

    // check if who is killed by the attack
    if (who.health <= 0) {
        console.log(`${who.name} is killed!`);
    } else {
        console.log(`${who.name} got ${attObj.damage} damage`)
    };   
  };


  getMagic(drink = 'Milk'){ // get random magic point
      let get = Math.round(Math.random() * (this.maxMagic-this.magic))
      this.magic += get;
      console.log(`${this.name} drinks some ${drink} get ${get} magic`);
  };

  getHealth(food = 'Sushi'){ // get random magic point
    let get = Math.round(Math.random() * (this.maxHealth-this.health))
    this.health += get;
    console.log(`${this.name} eats some ${food} get ${get} health`);
  ;}
};





class AttackSkill {
    constructor(nameOfAttack, damage, requiredMagic) {
      this.nameOfAttack = nameOfAttack;
      this.requiredMagic = requiredMagic;
      this.damage = damage;
    };

    help(){
        console.log(`
        Skill Name: ${this.nameOfAttack}
        Required Magic: ${this.requiredMagic}
        Damage: ${this.damage}
        `);
    } 
  };
  

// use random skill will save 33% of requiredMagic
Pokemon.prototype.attackWithRandomSkill = function(who){ 
    let index = Math.round(Math.random()*(this.skills.length-1));
    let attObj = this.skills[index];
    // check if pokemon it self is alive
    if (this.health <= 0) {
        console.log(`${this.name} is already dead!`);
        return;
    };
    // check if who is dead already
    if (who.health <= 0) {
        console.log(`${who.name} is already dead!`);
        return;
    };
    // check if there is element with this index in skills array
    if (!attObj) {
        console.log(`There is no such skill, pls try with ohter index`);
        return;
    };
    // check if this pokemon has enough magic for attack
    if (attObj.requiredMagic > this.magic) {
        console.log(`${this.name} has only ${this.magic} magic, and ${attObj.nameOfAttack} need ${attObj.requiredMagic} magic, ${this.name} need mana!!!`);
        return;
    };
    
    // update magic
    this.magic = this.magic - Math.ceil(attObj.requiredMagic*0.67) ;
    // update who's health
    who.health = who.health - attObj.damage;
    // show the attack status
    console.log(`${this.name} launched random skill: '${attObj.nameOfAttack}' successfully and saved ${attObj.requiredMagic - Math.ceil(attObj.requiredMagic*0.67)} magic`)
    // check if who is killed by the attack
    if (who.health <= 0) {
        console.log(`${who.name} is killed!`);
    } else {
        console.log(`${who.name} got ${attObj.damage} damage`)
    };   
  };




let pikachu = new Pokemon("pikachu", 120, 90);
let bulbasaur = new Pokemon("bulbasaur", 120, 105);

let lightning = new AttackSkill("lightning", 35, 30);
let poisonSeed = new AttackSkill ("poison seed", 35, 20);
let fireBall = new AttackSkill('fire Ball', 30, 25);
let waterBall = new AttackSkill('water Ball', 20, 10);

pikachu.learnAttackSkill(lightning,fireBall,waterBall);
bulbasaur.learnAttackSkill(poisonSeed,fireBall,waterBall);

// console.log(pikachu)

console.log('----round 1------')
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);

pikachu.showStatus();
bulbasaur.showStatus();

console.log('-----round 2-----')

pikachu.attackWithRandomSkill(bulbasaur);
bulbasaur.attackWithRandomSkill(pikachu);

pikachu.showStatus();
bulbasaur.showStatus();

console.log('-----round 3-----')

pikachu.attackWithRandomSkill(bulbasaur);
bulbasaur.attackWithRandomSkill(pikachu);

pikachu.showStatus();
bulbasaur.showStatus();

console.log('----round 4------')

pikachu.attackWithRandomSkill(bulbasaur);
bulbasaur.attackWithRandomSkill(pikachu);

pikachu.showStatus();
bulbasaur.showStatus();

console.log('----round 5------')

pikachu.attackWithRandomSkill(bulbasaur);
bulbasaur.attackWithRandomSkill(pikachu);

pikachu.showStatus();
bulbasaur.showStatus();

fireBall.help()