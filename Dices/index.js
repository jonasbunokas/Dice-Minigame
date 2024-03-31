 getRandomNumber1 = Math.floor(Math.random() * 6) + 1;
 getRandomNumber2 = Math.floor(Math.random() * 6) + 1;


var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

var randomDiceImg1 = "dice" + getRandomNumber1 + ".png";
var randomDiceImg2 = "dice" + getRandomNumber2 + ".png";

var randomImgSource1 = "images/" + randomDiceImg1;
var randomImgSource2 = "images/" + randomDiceImg2;

image1.setAttribute("src", randomImgSource1);
image2.setAttribute("src", randomImgSource2);

if(getRandomNumber1 > getRandomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won";
}
else if(getRandomNumber1 < getRandomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Won";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw";
}