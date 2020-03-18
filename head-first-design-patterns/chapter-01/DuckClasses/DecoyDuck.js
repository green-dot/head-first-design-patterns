const { Duck } = require('./Duck')
const { FlyNoWay } = require('./FlyBehaviour/FlyNoWay')
const { NoQuack } = require('./QuackBehaviour/NoQuack')

class DecoyDuck extends Duck {
  constructor(name){
    super(name)
    this.flyBehaviour = new FlyNoWay();
    this.quackBehaviour = new NoQuack(); 
  }
}

const dd = new DecoyDuck();
dd.performFly();
dd.performQuack();