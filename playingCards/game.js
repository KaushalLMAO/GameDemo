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
// landscape portrait end

// game script
//game links blackjack
const blackJackLink = document.getElementById("play-blackjack");
blackJackLink.addEventListener("click", function(){
    window.location.href = "blackjack.html"
})

//game link teenpatti
const teenpattiLink = document.getElementById('faras')
teenpattiLink.addEventListener("click", function(){
    window.location.href = "teenpatti.html"
})
