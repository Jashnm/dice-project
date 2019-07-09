

var number = Math.random();
number = number * 6;
number = Math.floor(number) + 1;

if (number===1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if (number===2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (number===3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (number===4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (number===5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

//for 2nd dice

var number1= Math.random();
number1 = number1 * 6;
number1 = Math.floor(number1) + 1;

if (number1===1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (number1===2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (number1===3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (number1===4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (number1===5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

//Declaring winner

if  (number>number1) {
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(number1>number) {
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML="It's a tie!";
}
