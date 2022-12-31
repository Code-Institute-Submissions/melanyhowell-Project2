const moves = document.getElementById("movesCount");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector("game-container");
const result = document.getElementById("result");
const controls = document.querySelector("controls-container");

let cards;
let interval;
let firstCard = false;
let secondCard = false;

//item arrays

const items = [
    {name:"pig", image: "pig.svg"}, 
    {name:"rooster", image: "rooster.svg"}, 
    {name:"sheep", image: "sheep.svg"}, 
    {name:"squirrel", image: "squirrel.svg"}, 
    {name:"kangaroo", image: "kangaroo.svg"}, 
    {name:"hippo", image: "hippo.svg"}, 
    {name:"goat", image: "goat.svg"}, 
    {name:"elephant", image: "elephant.svg"}, 
    {name:"duck", image: "duck.svg"}, 
    {name:"donkey", image: "donkey.svg"},
];

//Initial Time

let seconds = 0,
    minutes = 0;
//Initial moves and win count
let movesCount = 0,
    winCount = 0;

//For timer
const timeGenerator = () => {
    seconds += 1;
    //minutes logic
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    //format time before displaying
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
  };
