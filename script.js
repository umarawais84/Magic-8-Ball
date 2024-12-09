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
    let imageChoice = ""; 

    switch (randomNumber) {
        case 0:
            eightBall = "It is certain.";
                  imageChoice = "imgs/1.avif";

            break;
        case 1:
            eightBall = "It is decidedly so.";
                  imageChoice = "imgs/2.jpg";

            break;
        case 2:
            eightBall = "Reply hazy, try again.";
                  imageChoice = "imgs/3.webp";

            break;
        case 3:
            eightBall = "Cannot predict now.";
                  imageChoice = "imgs/4.webp";

            break;
        case 4:
            eightBall = "Do not count on it.";
            imageChoice = "imgs/5.png";
            break;

        case 5:
            eightBall = "My sources say no.";
                  imageChoice = "imgs/6.png";

            break;
        case 6:
            eightBall = "Outlook not so good.";
                  imageChoice = "imgs/7.jpg";

            break;
        case 7:
            eightBall = "Signs point to yes.";
                  imageChoice = "imgs/8.jpg";

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
