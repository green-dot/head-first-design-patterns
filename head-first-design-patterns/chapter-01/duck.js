class Duck {
  constructor(){
    let flyBehavour; // object that impliments fly
    let quackBehaviour; // object that impliments quack
  }

  display() {}

  performFly(){
   this.flyBehavour.fly();
  }

  performQuack() {
    this.quackBehaviour.quack();
  }

  setFlyBehaviour(fb) {
    this.flyBehavour = fb
  }

  setQuackBehaviour(qb) {
    this.quackBehaviour = qb
  }

  swim() {
    console.log('All ducks float, even decoys!')
  }
}

class DuckCall {
  constructor(){
    this.callBehaviour;
  }

  performCall(){
    this.callBehaviour.quack();
  }
}

class MallardCall extends DuckCall {
  constructor(name){
    super(name)
    this.callBehaviour = new Quack();
  }
}

class FlyWithWings {
  fly() {
    console.log("I'm flying!")
  }
}

class FlyNoWay {
  fly() {
    console.log("I can't fly!")
  }
}

class FlyRocketPowered {
  fly() {
    console.log("I'm flying with a rocket")
  }
}

class Quack {
  quack() {
    console.log('Quack!')
  }
}

class MuteQuack {
  quack() {
    console.log('<<Silence>>')
  }
}

class Squeak {
  quack() {
    console.log("Squeak!")
  }
}

class MallardDuck extends Duck {
  constructor(name){
    super(name);
    this.quackBehaviour = new Quack();
    this.flyBehavour = new FlyWithWings();
  }

  display() {
    console.log("I'm a real Mallard duck!")
  }
}

class DecoyDuck extends Duck{
  constructor(name){
    super(name)
    this.quackBehaviour = new MuteQuack();
    this.flyBehavour = new FlyNoWay();
  }
}

class ModelDuck extends Duck {
  constructor(name){
    super(name);
    this.flyBehavour = new FlyNoWay();
    this.quackBehaviour = new Quack();
  }

  display() {
    console.log("I'm a model duck!")
  }
}

let d = new MallardDuck()
d.performFly()
d.performQuack()

const model = new ModelDuck();
model.performFly();
model.setFlyBehaviour(new FlyRocketPowered());
model.performFly();

console.log('call')
const mallardDuckCall = new MallardCall();
mallardDuckCall.performCall();
