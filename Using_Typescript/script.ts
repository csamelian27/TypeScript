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
