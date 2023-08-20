const randomNum1 = Math.floor(Math.random() * 6 + 1);
const randomNum2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNum1);

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

const roll = function(){
   
    img1.setAttribute("src",`./images/dice${randomNum1}.png`)
    
}

const roll2 = function(){
   
    img2.setAttribute("src",`./images/dice${randomNum2}.png`)
}

roll();

roll2();

if(randomNum1 > randomNum2){
    document.querySelector("#p1").innerHTML = " 🏆Player 1 Wins!";
}else if(randomNum1 === randomNum2){
    document.querySelector("#p1").innerHTML = " Draw!";
    document.querySelector("#p2").innerHTML = " Draw!";
}else{
    document.querySelector("#p2").innerHTML = " 🏆Player 2 Wins!";
}

