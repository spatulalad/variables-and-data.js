/* 
* Variables, Data Types, and Typing
*/
let wordData = "Word list";

console.log (wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

console.log (totalWithTax);



/*
//Data Types
//primitive: boolean, null, undefined, number, strings ("blah blah541")
//composite: object
*/

let obj = {
  key1: "value",
  key2: 4,
  boolean: true,
  obj2: {
    obj2Key1: "Internal Object Value",
  }
  
};

console.log(obj.key1);

console.log(obj.obj2.obj2Key1)

/*
//Typing Systems
 */
//let variable : string = "string";

/*
let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);
*/

let add = 1 + 2;
let sub = 2 - 1;
let mult = 2*4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "String 2"

console.log(string);
