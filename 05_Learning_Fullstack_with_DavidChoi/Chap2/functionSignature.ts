//the run type is an alias to make it easier to reuse the long function signature
//the actual function type is (miles: number) => boolean

type Run = (miles: number) => boolean;
//runner variable as the run Type which is a function
//simply checks if the person has run more than 10miles
let runner: Run = function (miles: number): boolean {
  if (miles > 10) {
    return true;
  }
  return false;
};

console.log(runner(9));
