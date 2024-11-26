let userName = prompt("Hello, what is your name?");

let greeting = document.getElementById("greeting");

greeting.innerHTML = userName ? `Hello, ${userName}!` : "Hello!";

let responseImg = document.getElementById("response-img");
let responseText = document.getElementById("response-text");
let greeting = document.getElementById("greeting");

function shakeMagic8Ball() {
  //Get user question
  const userQuestion = prompt("Ask me a question");

  //DO NOT TOUCH THIS CODE!
  const randomNumber = Math.floor(Math.random() * 8);

  let eightBall = "";
  let imageChoice = "";

  switch (randomNumber) {
    case 1:
      eightBall = "It is certain";
      break;
    case 2:
      eightBall = "It is decidedly so";
      break;
    case 3:
      eightBall = "Reply hazy try again";
      break;
    case 4:
      eightBall = "Cannot predict now";
      break;
    case 5:
      eightBall = "Do not count on it";
      break;
    case 6:
      eightBall = "My sources say no";
      break;
    case 7:
      eightBall = "Outlook not so good";
      break;
    case 8:
      eightBall = "Signs point to yes";
      break;
  }
  console.log(`The Magic Eight Ball says: ${eightBall}`);

  document.getElementById(
    "response-text"
  ).innerText = `${userName} has asked ${userQuestion} to the almighty 8 Ball. The 8 Ball has replied ${eightBall}!`;

  responseImg.src = imageChoice
}
