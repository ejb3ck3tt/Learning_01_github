class ClassA {
  static typeName: string;

  constructor() {}

  static getFullName() {
    return 'ClassA ' + ClassA.typeName;
  }
}
const a = new ClassA();
//this fails because typename is a static member of a class
//static members must be called using the className
// console.log(a.typeName);

console.log(ClassA.typeName);

// Another point to be aware of is that inside a class, static members can be called by both static members and instance members. However, static members cannot call instance members.

//why static instead of instance member - it may be useful to share data across class instances

class Runner {
  static lastRunTypeName: string;

  constructor(private typeName: string) {}

  run() {
    Runner.lastRunTypeName = this.typeName;
  }
}

const x = new Runner('x');
const y = new Runner('y');

x.run();
y.run();

console.log(Runner.lastRunTypeName);
