/*
* Mixins are classes that contain methods that can be used by other classes without inheriting from those  classes
*/

let DifferentRoles = {
  prescribe() {
    console.log('prescribing medicine...')
  },
  getCash() {
    console.log('collecting cash...')
  },
  returnCash() {
    console.log('returning cash...')
  }
}


class Manager {
  constructor(name) {
    this.name = name;
  }
  hire() {
    console.log('hiring people')
  }
}

class Pharmacist {
  constructor(name) {
    this.name = name;
  }
  prescribe() {
    console.log('prescribe medicine')
  }
}

class Cashier {
  constructor(name) {
    this.name = name;
  }
  getCash() {
    console.log('collecting cash...')
  }
  returnCash() {
    console.log('returning cash...')
  }
}

Object.assign(Manager.prototype, DifferentRoles);

let manager = new Manager('John');
let cashier = new Cashier('Lovell');
let pharmacist = new Pharmacist('Amani');



