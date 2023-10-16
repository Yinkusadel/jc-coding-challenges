# Use class Syntax to Define a Constructor Function

**ES6 provides a new syntax to create objects, using the class keyword.**

**In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.**

**In ES6, a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.**

> // Explicit constructor

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log('To ' + this.targetPlanet + '!');
  }
}
```

> // Implicit constructor

```js
class Rocket {
  launch() {
    console.log('To the moon!');
  }
}

const zeus = new SpaceShuttle('Jupiter');
```

> // prints To Jupiter! in console

```js
zeus.takeOff();

const atlas = new Rocket();
```

> // prints To the moon! in console

```js
atlas.launch();
```

**It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.**

**Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.**

**The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.**

**Use the class keyword and write a constructor to create the Vegetable class.**

**The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.**

### Tests

`Passed:Vegetable should be a class with a defined constructor method.`

`Passed:The class keyword should be used.`

`Passed:Vegetable should be able to be instantiated.`

`Passed:carrot.name should return carrot.`
