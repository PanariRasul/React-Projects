
//var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

/*
var newArray = [];
const double = (x) => {
    x = x * x;
    newArray.push(x);
    return x
}

const newnum = numbers.map(double);

console.log(newnum);
*/




/*
//Filter - Create a new array by keeping the items that return true.
const double = (x) => {
    return x > 10;
}

var newNum = numbers.filter(double)

console.log(newNum)

*/


/*
//Reduce - Accumulate a value by doing something to each item in an array.

const newNumber = numbers.reduce((Accumulate, currentNumber) => {
    console.log("Accumulater " + Accumulate);
    console.log("Current Number " + currentNumber);
    return (Accumulate + currentNumber)
});

console.log("newNumber: " + newNumber);

// using forEach

var newNumber = 0;

numbers.forEach((currentNumber) => {
    newNumber += currentNumber

    return console.log(newNumber)
})

*/
//Find - find the first item that matches from an array.
/*
const newNUm = numbers.find((num) => {

    return console.log(num < 56)
})

console.log(newNUm);*/

/*
//FindIndex - find the index of the first item that matches.

const numberIndex = numbers.findIndex((num) => {

    return (num === 56)
})

console.log(numberIndex)*/


//SubString   return sunsting from main string

import emojipedia from "./emojipedia";


const newEmojipedia = emojipedia.map((emojiEntery) => {
    return console.log(emojiEntery.meaning.substring(0, 100))
})