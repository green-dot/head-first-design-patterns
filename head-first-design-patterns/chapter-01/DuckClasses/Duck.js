class Duck {
  constructor(){
    this.flyBehaviour;
    this.quackBehaviour;
  }

  performFly(){
    this.flyBehaviour.fly()
  }

  performQuack() {
    this.quackBehaviour.quack();
  }
}

module.exports.Duck = Duck;