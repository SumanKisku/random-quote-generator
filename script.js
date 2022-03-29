const button = document.getElementById("btn");
const quote = document.getElementById("quote");

const quotes = [
"You miss 100% of the shots you don't take. -Wayne Gretzky",
"Suffer the pain of discipline or the pain of regret. Choose wisely",
"Who is not courageous enough to take risks will accomplish nothing in life.",
];

quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]

button.onclick = () => {
    quote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quotes[Math.floor(Math.random() * quotes.length)]);
}