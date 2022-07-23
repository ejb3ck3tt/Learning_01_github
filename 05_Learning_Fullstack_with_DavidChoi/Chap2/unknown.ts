//unknown type is like a label more than a type, underneath the label is the actual type

// **Error out due to push function** the compiler cannot figure out the type on its own
// let val: unknown = 22;
// val = 'string value';
// val = new Array();
// val.push(33);
// }

// console.log(val);

let val: unknown = 22;
val = 'string value';
val = new Array();
//wrapping it in a test to check if it's an instance of array
if (val instanceof Array) {
  val.push(33);
}

console.log(val);
