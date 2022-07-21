//allows to "create types" by merging multiple distinct typ4es together
let obj: { name: string } & { age: number } = {
  name: 'tom',
  age: 25,
};

console.log(obj);
//displays {name: 'tom', age: 25}
