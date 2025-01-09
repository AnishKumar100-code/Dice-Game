document.querySelector(".Refresh").innerHTML = "<em>Refresh me</em>";
document.querySelector(".Player1 p").innerHTML = "<em>Player1</em>";
document.querySelector(".Player2 p").innerHTML = "<em>Player2</em>";

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var diceImage = "/dice" + randomNumber1 + ".png";
var imageSource = "./images" + diceImage;

document.querySelector(".img1").setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var diceImage2 = "/dice" + randomNumber2 + ".png";
var imageSource2 = "./images" + diceImage2;

document.querySelector(".img2").setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector(".Refresh").innerHTML = "<em>&#128681Player 1 Wins!</em>";
    document.querySelector(".Refresh").style.color = "#00FF9C";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector(".Refresh").innerHTML = "<em>Player 2 Wins!&#128681&#128681</em>";
    document.querySelector(".Refresh").style.color = "#FF0000";
}

else {
    document.querySelector(".Refresh").innerHTML = "<em>&#128681Draw!&#128681</em>";
    document.querySelector(".Refresh").style.color = "#FF9D23";
}



