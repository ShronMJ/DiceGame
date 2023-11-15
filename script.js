const  player1 = document.getElementsByClassName("img1")[0],
       player2 = document.getElementsByClassName("img2")[0];

const  banner = document.getElementById("topnotice"),
       rollButton = document.getElementById("rollbutton");

rollButton.addEventListener("click", ()=>{
    rollDice();
});
document.addEventListener("keyup", (e)=>{
    if(e.key===" "){
        e.preventDefault();
        rollDice();
    }
});

function rollDice(){
    var randomVar1 = Math.ceil(Math.random()*6),
        randomVar2 = Math.ceil(Math.random()*6);

    player1.setAttribute("src",`./images/dice${randomVar1}.png`);
    player2.setAttribute("src",`./images/dice${randomVar2}.png`);

    if(randomVar1 === randomVar2){
        banner.textContent = "Draw!"
    }else{
        randomVar1 > randomVar2?
        banner.textContent = "🚩 Player 1 Wins!" : banner.textContent = "Player 2 Wins! 🚩";
    }
}
