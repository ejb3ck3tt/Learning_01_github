//in TS classes supports extra features for encapsulation that js does not

//JavaScript
//name of class
// class Person {
//constructor used to initialised any fields that the class might have and do any other setup for the class instance
// constructor() {}
//single variable declared
// msg: string;
//function
// speak() {
// console.log(this.msg);
//   }
// }

// const tom = new Person();
// tom.msg = 'hello world';
// tom.speak();

//Typescript - Encapsulation
//private is a method of declaring a constructor parameter and also adding an access modifier.
//1. tells the compiler the class has a field called msg of a string type that should be private
//2. by setting the field to private, we make it inaccessible from outside of the class
//***Note: access modifiers can be applied to any member field or function */
class Person {
  constructor(private msg: string) {}
  speak() {
    console.log(this.msg);
  }
}

const tom = new Person('Hello');
// tom.msg = "hello";
tom.speak();

//Read only
class Woman {
  constructor(private readonly msg: string) {}

  speak() {
    //intellisense will complain - unable to modify speak function
    // this.msg = 'speak' + this.msg;
    console.log(this.msg);
  }
}

const jane = new Person('hello');
jane.speak();
