// landscape portrait
const landscape = window.matchMedia("(orientation: landscape)").matches;

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

//blackjack game
let valuecard = {
    A: "11",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    J: "10",
    Q: "10", 
    K: "10"
    
}
let totalsum = 0; //sum declare
let playercard = document.querySelector("#cards")
let playersum = document.querySelector("#sum-el")
let remarksel = document.querySelector(".remarks")


let card = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"] //array card
let card1=  document.getElementById('draw')
let submit = document.getElementById('submit')
card1.addEventListener("click", function (){ // onclickevent
    
    let X = Math.floor(Math.random()*13) //ramdomcard
    let Y =card[X]
   
        
    playercard.textContent += Y + " "  // hererai tha hunxa yo ta
    let cardValue = parseInt(valuecard[Y])
    totalsum += cardValue //sum updator
    playersum.textContent = `Sum : ${totalsum} ` //sum dom
    
    if(totalsum === 21){
        remarksel.textContent = `Remarks : You've got blackjack`
    }
    else if (totalsum > 21){
        remarksel.textContent = `Remarks : You're out of the game`
        card1.remove()
        submit.remove()
        setTimeout(()=>{ 
            
        window.location.href ="blackjack.html"


        },1000)
        
    }
    else{
        let botpoints = 19+ Math.floor(Math.random()*3)
        
        submit.addEventListener("click", function(){
            
            if (totalsum >= botpoints){
                remarksel.textContent = `Remarks: Player Won, the bot's score was ${botpoints}`
                setTimeout(()=>{ 
            
                    window.location.href ="blackjack.html"
            
            
                    },1250)
            }
            else{
                remarksel.textContent = `Remarks: Bot won, bot's score was ${botpoints}`
                setTimeout(()=>{ 
            
                    window.location.href ="blackjack.html"
            
            
                    },1250)
            }
        })
       
        
    }
    
    
}) 



