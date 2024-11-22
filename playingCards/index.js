    // landscape portrait
const landscape = window.matchMedia("(orientation: landscape)").matches;
console.log(landscape)
if(landscape === true){

}
else{
    let bodyel = document.getElementById('body')
    bodyel.innerHTML = `<h1 style="text-align: center;">
        Go to Landscape mode and refresh the page
    </h1><br> 
    <h2 style="text-align: center;">
       if it is in screen lock,<br>
        turn it off :) 
    </h2>
    <br><h2 style="text-align: center;">
    If the link is sent in instagram/messenger open in chrome :)
    </h2> `
    
}
    let game = document.querySelector("faraslink");
    function gamelinks(){
        alert(" still in construction");
    }
    const cards = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    let cardValues = {
        "A" : 14,
        "K" : 13,
        "Q" : 12,
        "J" : 11,
        "10": 10,
        "9": 9,
        "8": 8,
        "7": 7,
        "6": 6,
        "5": 5,
        "4": 4,
        "3": 3,
        "2": 2
    } 
    let sum;
    let card1 = Math.floor(Math.random()*cards.length);
    let card2 = Math.floor(Math.random()*cards.length);
    let card3 = Math.floor(Math.random()*cards.length);
    let value1 = cardValues[cards[card1]];
    let value2 = cardValues[cards[card2]];
    let value3 = cardValues[cards[card3]];
    let myCards = document.getElementById("cards");
    function shuffule(){
        myCards.textContent ="My cards:"+ " " + cards[card1] + " " + cards[card2] + " " + cards[card3];
        // trial ko lagi else
        if (card1 === card2 && card2 === card3 && card3 === card1){
             sum = cardValues[cards[card1]]*10000000;
            console.log("TRIALL")
            console.log(sum)
        }
        // jutt ko lagi elif
        else if( card1 === card2 || card2 === card3 || card3 === card1){
            if(card1 === card2){
                 sum = 50*cardValues[cards[card1]]
                console.log(sum)
            }
            else if (card2 === card3){
                 sum = 50*cardValues[cards[card2]]
                console.log(sum)
            }
            else if(card3 === card1){
                 sum = 50*cardValues[cards[card3]]
                console.log(sum)
            }
            console.log("Jutt")
        }
        // run ko lagi elif
        else if(card1 !== card2 && card2 !== card3 && card3 !== card1){
            let ourCards = [value1, value2, value3]
            let sortedCards = ourCards.sort((a,b) => a-b)
            if((sortedCards[1]-sortedCards[0]) === 1 && (sortedCards[2]-sortedCards[1]) === 1) {
                console.log(sortedCards)
                console.log("You have a run")
                 sum = 50000*sortedCards[2];
                console.log(sum)
            }
            else{
                 sum = value1+value2+value3
                console.log("You got nothing, your total sum is" + " " + sum)
            }

        }
        else{}
        }
    function Quit(){
        alert("This will make you loose game")
        
        myCards.textContent = "My cards :   ";
    }
// for bots
const cardBots = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
let BotcardValues = {
    "A" : 14,
    "K" : 13,
    "Q" : 12,
    "J" : 11,
    "10": 10,
    "9": 9,
    "8": 8,
    "7": 7,
    "6": 6,
    "5": 5,
    "4": 4,
    "3": 3,
    "2": 2
} 
let botCard1 = Math.floor(Math.random()*cardBots.length)
let botCard2 = Math.floor(Math.random()*cardBots.length)
let botCard3 = Math.floor(Math.random()*cardBots.length)
let botvalue1 = BotcardValues[cardBots[botCard1]] 
let botvalue2 = BotcardValues[cardBots[botCard2]] 
let botvalue3 = BotcardValues[cardBots[botCard3]] 
// jut
let botSum;
if(botCard1 === botCard2 || botCard2 === botCard3 || botCard3 === botCard1){
    if (botCard1 === botCard2){
        botSum = 50*BotcardValues[cardBots[botCard1]]
        console.log(botSum)
    }
    else if(botCard2 === botCard3){
        botSum = 50*BotcardValues[cardBots[botCard2]]
        console.log(botSum)
    }
    else if(botCard3 === botCard1){
        botSum = 50*BotcardValues[cardBots[botCard3]]
        console.log(botSum)
    }
    console.log("bot got jutt")
    
}
//trial
else if(botCard1 === botCard2 && botCard2 === botCard3 && botCard3 === botCard1){
    botSum = 10000000*BotcardValues[cardBots[botCard1]]
    console.log("trial" + botSum)
}
// run
else if(botCard1 !== botCard2 && botCard2 !== botCard3 && botCard3 !== botCard1){
    let botSelectedCards = [botvalue1, botvalue2, botvalue3]
    let sortedBotCards = botSelectedCards.sort((a,b) => a-b)
    if ((sortedBotCards[1]-sortedBotCards[0]) === 1 && (sortedBotCards[2]-sortedBotCards[1])===1){
        botSum = 50000*sortedBotCards[2]
        console.log("Bot has run" + botSum)
    }
    else{
       botSum = sortedBotCards[0] + sortedBotCards[1] + sortedBotCards[2] 
       console.log("Bots total is" +" "+ botSum)
    }
}
let res = document.getElementById("result")
// bot ai
let botplayingCards = document.getElementById("botcards")
function reveal(){
    botplayingCards.textContent = "Bots card :" + cardBots[botCard1] +" " +cardBots[botCard2] + " "+cardBots[botCard3]
    if (botSum > sum){
        console.log("bot won")
        res.textContent = "Bot Won"
        setInterval(() => {
            window.location.href = "teenpatti.html"
        }, 1000);
    }
    else{
        console.log("player won")
        res.textContent = "Player Won"
        setInterval(() => {
            window.location.href = "teenpatti.html"
        }, 1000);
    }

}
