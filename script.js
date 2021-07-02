console.log('hello!');

class CoffeMachine {
  constructor() {}
  // whater Heater()
  waterHeater() {}
  // GrindCoffe
  grindCoffe() {}
  brewCoffee() {
    this.waterHeater();
    this.grindCoffe();
    setTimeout(() => {
      console.log('Your Coffee is READY!');
    }, 6000);
  }
}

function brewCoffeeClick() {
  const coffeMaker = new CoffeMachine();
  console.log(coffeMaker);
  coffeMaker.brewCoffee();
}
