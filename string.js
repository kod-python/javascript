// // to get the legnt of a string
// let firstword = "hello world"
// console.log(firstword.length)

// // to turn the string to uppercase
// console.log(firstword.toUpperCase())

// // return character at a particular index
// console.log(firstword.charAt(10))

// // string a particular value
// console.log(firstword.substring(6,5))

// // lenght of string it should print
// let p = "dshgdksdksd dsdsldjlsnljdnls sdskdbskd sdkskdsdskdsdlsdsdll dsskddsdsnslndls sldsldnlsndlsdl dlsldlsd"
// console.log(p.substring(0,40))

// // replacing name
// let allNames = "kod deviper"
// console.log(allNames.replace("kod","python"));

// // print an array
let myArray = [7,9,200,45]
let myString = ["cow","dog","sheep","fowl"]
let mixedArray = [4,"string","false", null,[3,6,7],undefined]
let secondArray = myArray[1]

console.log(mixedArray.length);
console.log(secondArray);

console.log(`my array 1 is at ${myArray[1]} and my array 2 is at ${myArray[2]} and my array 3 is at ${myArray[3]}`)

// add to an array
myArray.push(10)
console.log(myArray)

//to remove an element of an array
myArray.pop()
myArray.pop()
myArray.pop()
console.log(myArray);

// remove at a particular index
myString.splice(2,1)
console.log(myString)
