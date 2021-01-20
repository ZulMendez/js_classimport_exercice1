import Humain from './humain.js';

class Mage extends Humain {
    constructor(nom, age, magie){
        super(nom, age);
        this.magie = magie;
    }
}

console.log(Mage);