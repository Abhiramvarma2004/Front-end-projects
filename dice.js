alert("READY!");
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".dice .img1").setAttribute("src","./images/dice"+randomnumber1+".png");
document.querySelector(".dice .img2").setAttribute("src","./images/dice"+randomnumber2+".png");
if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="🏆Player 1 Wins!"
}
if (randomnumber1<randomnumber2) {
    document.querySelector("h1").textContent="🏆Player 2 Wins!"
}
if(randomnumber1===randomnumber2) {
    document.querySelector("h1").textContent="🥱Draw!"
}