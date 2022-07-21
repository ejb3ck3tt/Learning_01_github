//similar to intersection type
// instead of merging, it's using OR

//null or a string
let unionObj: null | { name: string } = null;
unionObj = { name: 'jon' };

console.log(unionObj);
//displays: { name: 'jon}
