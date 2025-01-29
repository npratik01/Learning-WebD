// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// var randomNumber1 = randomIntFromInterval(1, 6);

// OR :
// For random Number 1 :

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// For Random Number 2:

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "./images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won !"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Won !"
}
else{
    document.querySelector("h1").innerHTML = "Match Draw !"
}