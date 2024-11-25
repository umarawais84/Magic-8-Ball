let userName = prompt("Hello, what is your name?")

let greeting = document.getElementById("greeting");

greeting.innerHTML = userName ? `Hello, ${userName}!` : "Hello!";

function shakeMagic8Ball(){
//Get user question
const userQuestion = 'Will I become a developer?';

console.log(`${userName ? userName : 'User'} asked: ${userQuestion}`);

//DO NOT TOUCH THIS CODE!
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(`The Magic Eight Ball says: ${eightBall}`);
}
