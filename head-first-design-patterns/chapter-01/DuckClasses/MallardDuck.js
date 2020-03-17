// import Duck from './Duck';
// import FlyWithWings from './FlyBehaviour/FlyWithWings';
// import Quack from './QuackBehaviour/Quack';

const {Duck} = require('./Duck')
const {FlyWithWings} = require('./FlyBehaviour/FlyWithWings')
const {Quack} = require('./QuackBehaviour/Quack')


class MallardDuck extends Duck {
  constructor(name){
    super(name)
    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new Quack();
  }
}

const md = new MallardDuck();
md.performQuack();
md.performFly();
