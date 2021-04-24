var randomNumber1=Math.floor((Math.random()*6))+1;
var randomNumber2=Math.floor((Math.random()*6))+1;
if(randomNumber1<randomNumber2){
  document.querySelector("div h1").textContent="Player 2 Wins! 🚩";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("div h1").textContent="🚩 Player 1 Wins!";
}
else{
  document.querySelector("div h1").textContent="Draw!😆";
}
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
