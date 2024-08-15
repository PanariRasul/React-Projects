/*
If you want to challenge yourself further, try changing the code to make the english more grammatically correct. So the final output should say "1 bottle of beer on the wall" when numberOfBottles is equal to 1 rather than "1 bottles of beer on the wall" and when numberOfBottles is equal to 0, you can make the output "No more bottles of beer on the wall" instead of 0 bottles of beer on the wall".
*/

//speed of info tech
//shivaji nagar
//sambhaji chouk

// 99 bottle of beer on the wall
//99 bottle of beer,
//Take one down, pass it around,

var numberOfBottles = 99;
while (numberOfBottles >= 1) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");

    numberOfBottles--;
    if (numberOfBottles === 0) {
        console.log("No more bottles of beer on the wall");
    } else {
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }

}