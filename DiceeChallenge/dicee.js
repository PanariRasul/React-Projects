// Random Dicce generater 1
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDice1 = "images/dice"+randomNumber1+".png"

document.querySelectorAll("img")[0].setAttribute("src", randomDice1);

//Random Dicee generater 2

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDice2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

// Winning Anouncement

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏴 Player One Win!";
}else if (randomNumber2 > randomNumber1 ){
    document.querySelector("h1").innerHTML = "Player Two Win!🏳️";
}else {
    document.querySelector("h1").innerHTML= "Match Drow! 🚩"
}

