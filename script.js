console.log('hello!');

class CoffeMachine {
  constructor(coffe = coffe) {
    let coffe = coffe;
  }
  // whater Heater()
  waterHeater() {}
  // GrindCoffe
  grindCoffe() {}
  brewCoffee() {
    this.waterHeater();
    this.grindCoffe();
    setTimeout(() => {
      console.log(`Your ${this.coffe} is READY!`);
    }, 6000);
  }
}

function brewCoffeeClick() {
  const coffeMaker = new CoffeMachine();
  console.log(coffeMaker);
  coffeMaker.brewCoffee();
}

window.test = test;
