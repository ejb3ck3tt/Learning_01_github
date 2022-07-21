class Speaker {
  private message: string;
  constructor(private name: string) {}
  //getter, it's prefixed with the get keyword
  get Message() {
    if (!this.message.includes(this.name)) {
      throw Error("message is missing speaker's name");
    }
    return this.message;
  }
  //setter, prefixed with the set keyword
  //receives a string and adds the speaker's name if needed by checking whether it is missing from the message field
  set Message(val: string) {
    let tmpMessage = val;
    if (!val.includes(this.name)) {
      tmpMessage = this.name + ' ' + val;
    }
    this.message = tmpMessage;
  }
}

const speaker = new Speaker('john');
speaker.Message = 'hello';
console.log(speaker.Message);

//getter - A property that allows modification or validation of a related field before running it

//setter - a property that allows modification or computation of a value before setting to a related field.

//both getter and setter are not a function

//1. message field is available in private field and not constructor, therefore not accessible outside class
//2. the only initializer the constructor takes is the name field

// getters and setters and the includes functions are only available in ES5 and ES6, respectively.  You can tell the typescript that it needs to compile to a newer JS target.
//ex: tsc --target "ES6" get set
//node getSet
