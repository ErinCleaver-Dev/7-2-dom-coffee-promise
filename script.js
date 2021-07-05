console.log('hello!');

class CoffeMachine {
  constructor(coffe = "coffe") {
    this.coffe = coffe;
    this.process = document.getElementById('process');
  }
  // whater Heater()
  waterHeater() {
    const heatWater = new Promise((response, reject) => {
      setTimeout(()=> { response('Heating water')}, 1000)
    });
    heatWater.then((response) => {
      this.display(response)
    }, (error) => {
      this.display("Failed to create coffe")
    })

  }
  // GrindCoffe
  grindCoffe() {
    const grindCoffee = new Promise((response, reject) => {
      setTimeout(()=> { response('Grinding Coffe')}, 3000)
    });
    grindCoffee.then((response) => {
      this.display(response)
    }, (error) => {
      this.display("Failed to create coffe")
    })
  }

  display(msg) {
    this.process.innerHTML = msg;
  }
  brewCoffee() {
    this.waterHeater();
    this.grindCoffe();
    setTimeout(() => {
      this.display(`Your ${this.coffe} Coffe is READY!`)
    }, 6000);
  }
}

function brewCoffeeClick(coffe) {
  
  const coffeMaker = new CoffeMachine(coffe.id);
  //console.log(coffeMaker);
  coffeMaker.brewCoffee();
}

