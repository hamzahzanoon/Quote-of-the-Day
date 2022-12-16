const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");

const sound = document.querySelector(".sound");
const copy = document.querySelector(".copy");
const Twitter = document.querySelector(".Twitter");


function randomQuote() {
    quoteBtn.classList.add("loading");
    authorName.innerText = "New Quote";

    fetch("https://api.quotable.io/.random").then(res => res.json()).then(result => {

        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        authorName.innerText = "New Quote";
        authorName.classList.remove("loading");
    });
}     

sound.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); 
});

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText)
});

Twitter.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/home${quoteText.innerText}`;
    window.open(tweetUrl , "_blank");
}); 

quoteBtn.addEventListener("click", randomQuote);