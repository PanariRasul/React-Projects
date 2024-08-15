
// find the drum and press


var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {


        var textInnerHtml = this.innerHTML;

        // find click for makesound
        makeSound(textInnerHtml);

        // find click for button animation
        buttonAnimation(textInnerHtml);




    });
};

// find the key

document.addEventListener("keypress", function () {

    //find key press for makesound
    makeSound(event.key);


    //find key press for add button animation
    buttonAnimation(event.key);


});


function makeSound(key) {

    switch (key) {

        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();

            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(innerHTML);
    };

};


//add animation for click

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed"), 500
    });

};




/* =====> Re-Practice Code <====== */



/*

// find the pressed dru 


var numberOfDrums = document.querySelectorAll(".drum").length;


for (i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var textInnerHtml = this.innerHTML;
        makeSound(textInnerHtml);

        buttonAnimation(textInnerHtml);

    });
};

//find the pressed key

document.addEventListener("keypress", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key);
});

function makeSound(key) {


    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;


        default:

        console.log(event)
    }

};



//add animation for click

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed"), 500
    });

}

*/
