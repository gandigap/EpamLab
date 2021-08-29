class Entity {
  constructor(name) {
    this.name = name;
  }
}

class Stuff extends Entity {
  constructor(type, width, length, height) {
    super('stuff');
    this.type = type;
    this.width = width;
    this.height = height;
    this.length = length;
  }

  get volume() {
    return this.countVolume();
  }

  countVolume() {
    return this.width * this.height * this.length;
  }
}

class Box extends Entity {
  constructor(type) {
    super('box');
    this.type = type;
    this.strength = this.setStrength();
    this.arrayStuff = new Set();
  }

  addStuff(stuff) {
    if (this.strength - stuff.volume >= 0)
      this.arrayStuff.add(stuff);
  }

  removeStuff(stuff) {
    this.arrayStuff.delete(stuff);
  }

  printAllStuff() {
    this.arrayStuff.forEach(element => {
      console.log(`Stuff: ${element.type} has volume ${element.volume}.`)
    });
  }

  setStrength() {
    let strength = null;
    switch (this.type) {
      case 'cardboard':
        strength = 50;
        break;
      case 'wood':
        strength = 100;
        break;
      case 'metallic':
        strength = 150;
        break;
      default:
        strength = 0;
        console.log('Type is not correct!')
        break;
    }
    return strength;
  }
}

class User extends Entity {
  constructor(name, lastname, box) {
    super('user');
    this.name = name;
    this.lastname = lastname;
    this.box = box;
  }

  getFullName() {
    return this.name + ' ' + this.lastname;
  }

  getTotalBoxVolume() {
    let totalVolume = null;
    this.box.arrayStuff.forEach(element => {
      totalVolume += element.volume;
    });
    return totalVolume;
  }
}

const box1 = new Box('metallic');
const shirt = new Stuff('shirt', 3, 3, 2);
const toy = new Stuff('toy', 1, 1, 2);
const kettle = new Stuff('kettle', 1, 3, 3);
box1.addStuff(shirt);
box1.addStuff(toy);
box1.addStuff(kettle);
box1.printAllStuff();
const tom = new User('Tom', 'Gatsby', box1);
console.log(`${tom.getFullName().toUpperCase()} has box that total volume is ${tom.getTotalBoxVolume()}.`);