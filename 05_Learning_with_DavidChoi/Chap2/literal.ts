// are similar to union types, but they use a set of hardcoded string or number values

//doesn't set a value that is not on the list
let literal: 'tom' | 'Linda' | 'Jeff' | 'Sue' = 'Linda';
literal = 'Sue';

console.log(literal);
