console.log("yooooooo");
// string, automatically saved by ts as a string
var myName = "Max";
// when we run the compiler, it will throw an error that we can't reassign a string to a number
// myName = 28;
// number - no difference between float and integer
var myAge = 28;
// will throw error
// myAge = "Max";
// boolean
var hasHobbies = false;
// will throw error
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// will throw error with explicit types
// myRealAge = '27';
// array
// let hobbies = ["Cooking", "Sports"];
// error because of string to number conversion
// hobbies = [100]
// can explicitly define as any and override ts type errors, still must be an arr
var hobbies = ["Cooking", "Sports"];
// no error
hobbies = [100];
// error cause not arr
// hobbies = 100;
// new TS type: tuples - default arr: any[] type
// let address = ["Superstreet", 99]
// can override default by defining string and number types and they must be in that order
var address = ["Superstreet", 99];
// new TS type: emum - creates a new type we can use later on
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2 OR (with assigned value above, it increments up from preceding value) 101
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // returns 1 - the index of the item;
// any - should be an exception and avoided and explicitly define types instead
var car = "BMW";
// no error since defined as type any
car = { brand: "BMW", series: 3 };
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
