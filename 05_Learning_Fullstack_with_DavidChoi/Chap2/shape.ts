// it doesn't matter what the name is,it goes more of the shape
class Person {
  name: string;
}
const jill: { name: string } = {
  name: 'jill',
};
const person: Person = jill;
console.log(person);
