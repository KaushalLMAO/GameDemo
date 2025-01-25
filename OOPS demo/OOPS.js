let output = document.getElementById("output");
class name2 {
  constructor(name) {
    this.donkey = name;
  }
}

let name1 = new name2("Kaushal");
console.log(name1.donkey);
output.textContent += `Name is ${name1.donkey} \n, `;

function makeclass() {
  class thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
  }
  return thermostat;
}
let func = makeclass();
let temp = new func(-40);
console.log(temp.temperature);
output.textContent += `Temperature is ${temp.temperature} \n`;
