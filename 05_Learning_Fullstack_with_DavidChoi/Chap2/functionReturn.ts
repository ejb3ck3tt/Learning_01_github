//the runMore function takes a parameter of the number type and returns a number
// function runMore(distance: number): number {
//   return distance + 10;
// }

// the two function returns nothing but write their given parameters to the console

//function return type declaration is quite similar to variable declarations.
function eat(calories: number) {
  console.log('I ate ' + calories + 'calories');
}
//nothing to return

function sleepIn(hours: number): void {
  console.log('I slept ' + hours + 'hours');
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
