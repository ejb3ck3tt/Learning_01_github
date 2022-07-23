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
var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person('Hello');
// tom.msg = "hello";
tom.speak();
