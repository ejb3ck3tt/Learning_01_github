//never type is used to indicate a function that never returns (completes), or a variable that is not set to anything.
function oldEnough(age: number): never | boolean {
  if (age > 59) {
    throw Error('Too Old');
  }
  if (age <= 18) {
    return false;
  }
  return true;
}

console.log(oldEnough(20));
//this function returns a union type that is either never or a boolean
