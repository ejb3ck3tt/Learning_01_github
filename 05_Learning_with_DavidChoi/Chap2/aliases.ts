//Type aliases - a method to give a different name to a type and most of the time it is used to provide a shorter simpler name to some complex type

//example
type points = 20 | 30 | 40 | 50;
let score: points = 20;

console.log(score);

//object literal
type ComplexPerson = {
  name: string;
  age: number;
  birthday: Date;
  married: boolean;
  address: string;
};
