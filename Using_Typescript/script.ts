console.log("yooooooo");

// string, automatically saved by ts as a string
let myName = "Max";
// when we run the compiler, it will throw an error that we can't reassign a string to a number
// myName = 28;


// number - no difference between float and integer
let myAge = 28;
// will throw error
// myAge = "Max";


// boolean
let hasHobbies = false;
// will throw error
// hasHobbies = 1;


// assign types
let myRealAge: number;
myRealAge = 27;
// will throw error with explicit types
// myRealAge = '27';


// array
// let hobbies = ["Cooking", "Sports"];
// error because of string to number conversion
// hobbies = [100]


// can explicitly define as any and override ts type errors, still must be an arr
let hobbies: any[] = ["Cooking", "Sports"];
// no error
hobbies = [100];
// error cause not arr
// hobbies = 100;


// new TS type: tuples - default arr: any[] type
// let address = ["Superstreet", 99]
// can override default by defining string and number types and they must be in that order
let address: [string, number] = ["Superstreet", 99]


// new TS type: emum - creates a new type we can use later on
enum Color {
  Gray, // 0
  Green = 100, // 1 OR (with assigned value) 100
  Blue // 2 OR (with assigned value above, it increments up from preceding value) 101
}
let myColor: Color = Color.Green;
console.log(myColor); // returns 1 - the index of the item;

// any - should be an exception and avoided and explicitly define types instead
let car: any = "BMW";
// no error since defined as type any
car = { brand: "BMW", series: 3 };


// functions - returns a string
// refers to return value, not to parameters : string
function returnMyName(): string {
  return myName;
  // error because it's a number now that we explicitly defined type string
  // return myAge;
}
console.log(returnMyName());


// void type - no return statement
// throws error if you try to return something
function sayHello(): void {
  console.log("Hello!");
}


// argument types: types of function arguments
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

// return NaN if we don't explicitly define argument types
// once we define :number & :number it will throw an error
console.log(multiply(2, 'Max'));
