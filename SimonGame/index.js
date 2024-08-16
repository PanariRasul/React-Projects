var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];


var started = false;

var level = 0;


//function for find press
$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("level" + level);
        nextSequence();
        started = true;

    }
});


//Function for find the key click
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
});


//Check Answer Function
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {

        playSound("wrong")
        $("body").addClass("game-over");
        $("level-title").text("Game Over, Press any to Re start");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }

};


// Next sequence function
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("level" + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
};


// Key Press Anmation function
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
};


// play sound function
function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
};


// game over function
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;

};







