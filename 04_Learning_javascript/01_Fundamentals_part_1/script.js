//value is a piece of data

//value is Jonas, 23
console.log('Jonas');
console.log(23);

//declaring a variable
// let firstName = 'Jonas';

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// 2 ** 3 means to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// concatonate
const firstName = 'Jonas';
const lastName = 'Smith';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5;
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1 = 101
x--; //
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

//Precedence
//grouping has higher precedence of 21
const current = 2037;
const ageJones = now - 1991;
const ageSandra = now - 2018;

//
console.log(current - 1991 > now - 2018);

//left to right
console.log(25 - 10 - 5);

//left to right and right to left
let z, y;
z = y = 25 - 10 - 5; // x = y = 10, x=10
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJones, ageSandra, averageAge);

const markMass = 78;
const markHeight = 1.69;
const markBmi = markMass / markHeight ** 2;
console.log(markBmi);

const johnMass = 92;
const johnHeight = 1.95;
const johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);
const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

//template literals
const fName = 'Jones';
const job = 'teacher';
const birthYear = 1991;
const year = 2038;

const jones =
  "I'm " + fName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(jones);

//ES6 template literals
const jonesNew = `I'm ${fName}, a ${year - birthYear} year old ${job}!`;
console.log(jonesNew);

const age = 15;

if (age >= 18) {
  console.log('Sema can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sema is too young to drive. Wait another ${yearsLeft} years :)`);
}

//Type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

//type coercion
//js would detect it and turn it into string
console.log('I am ' + 23 + ' Years Old');

//js converted the strings to numbers, the minus operator triggers the opposite conversion.
console.log('23' - '10' - 3); //number
//js converted the strings to numbers, the plus operator triggers left to right conversion
console.log('23' + '10' + 3); //string

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

//truty and falsy values
// 0, '', undefined, null, NAN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
//automatically converted to boolean
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log('YaY! height is undefined');
} else {
  console.log('Height is UNDEFINED');
}

//equality operators
const newAge = 18;
//strict operator
if (newAge === 18) console.log('You just become an adult (strict)');
//loose operator
if (newAge == 18) console.log('You just become an adult (loose)');

//if you remove the Number, it will convert it to string
const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite, typeof favourite);

if (favourite == 23) {
  console.log('23 is cool number');
}

//the switch statement
const day = 'friday';

//without a break it will continue to execute
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('not a valid day!');
}

//statements and expressions;

//this statement doesn't produce any value
//only declares the variable str
if (23 > 10) {
  const str = '23 is bigger'; //this line is expression
}

//expression
const me = 'Jones';
console.log(`I'm ${2037 - 1991} years old ${me}`);

//ternary operator
const myAge = 15;
//has 3 parts - condition, if and else
myAge >= 15
  ? console.log('I Like to drink wine') //if
  : console.log('I like to drink water'); //else

//expression
const drink = myAge >= 18 ? 'wine' : 'water';
console.log(drink);
