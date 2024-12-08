let userName = prompt("Hello, what is your name?");
let greeting = document.getElementById("greeting");

// Greeting
greeting.innerHTML = userName ? `Hello, ${userName}!` : "Hello!";

let responseImg = document.getElementById("response-img");
let responseText = document.getElementById("response-text");

function shakeMagic8Ball() {
    // Ask the user a question
    const userQuestion = prompt("Ask me a question");

    if (!userQuestion) {
        alert("You need to ask a question!");
        return;
    }

    // number generator
    const randomNumber = Math.floor(Math.random() * 8);

    // Responses and images
    let eightBall = "";
    let imageChoice = "https://via.placeholder.com/300"; 

    switch (randomNumber) {
        case 0:
            eightBall = "It is certain.";
            break;
        case 1:
            eightBall = "It is decidedly so.";
            break;
        case 2:
            eightBall = "Reply hazy, try again.";
            break;
        case 3:
            eightBall = "Cannot predict now.";
            break;
        case 4:
            eightBall = "Do not count on it.";
            break;
        case 5:
            eightBall = "My sources say no.";
            break;
        case 6:
            eightBall = "Outlook not so good.";
            break;
        case 7:
            eightBall = "Signs point to yes.";
            break;
    }

    responseText.innerText = `${userName || "Someone"} asked: "${userQuestion}". 
    The 8 Ball says: ${eightBall}`;

    responseImg.style.transform = "rotate(0deg) scale(1)";
    responseImg.src = imageChoice;

    setTimeout(() => {
        responseImg.style.transform = "rotate(360deg) scale(1.1)";
    }, 100);
}
