abstract class Pizza {
  abstract prepare(): void;
  abstract bake(): void;
  abstract cut(): void;
  abstract box(): void;
}

class BasePizza extends Pizza {
  type: string;
  
  constructor(type: string){
    super();
    this.type = type;
  }

  prepare(): void{
    console.log(`${this.type} pizza is prepared`)
  }
  
  bake(): void{
    console.log(`${this.type} pizza is baked`)
  }
  
  cut(): void{
    console.log(`${this.type} pizza is cut`)
  }
  
  box(): void{
    console.log(`${this.type} pizza is boxed`)
  }  
}

class CheesePizza extends BasePizza {
  constructor(){
    super('Cheese')
  }
}

class GreekPizza extends BasePizza{
  constructor(){
    super('Greek')
  }
}

class PepperoniPizza extends BasePizza{
  constructor(){
    super('Pepperoni')
  }
}

enum PizzaTypes {
  'Cheese',
  'Greek',
  'Pepperoni',
}

function unreachable(x: never){
  throw new Error('This shot shouldnt be reachable')
}

class SimplePizzaFactory {
  createPizza(type: PizzaTypes): Pizza {
    let pizza: Pizza;
    
    switch(type){
      case PizzaTypes.Cheese:
        pizza = new CheesePizza();
        break
      case PizzaTypes.Greek:
        pizza = new GreekPizza();
        break
      case PizzaTypes.Pepperoni:
        pizza = new PepperoniPizza();
        break
      default:
        unreachable(type);
    }
    return pizza
  }
}

class PizzaStore {

  factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory){
    this.factory = factory;
  }

  orderPizza(type: PizzaTypes): Pizza {

    let pizza: Pizza;
  
    pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  
    return pizza
  }
}

const pizzaFactory = new SimplePizzaFactory();
const pizzaStore = new PizzaStore(pizzaFactory);
pizzaStore.orderPizza(PizzaTypes.Pepperoni)

