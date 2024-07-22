const randomNumber1 = Math.floor(Math.random() *5) + 1;

const randomDiceImage1 ="Dice-" + randomNumber1 +".png";

const randomImageSource1 = "img/" + randomDiceImage1;

const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);




const randomNumber2 = Math.floor(Math.random()*5) +1;

const randomDiceImage2 = "Dice-"+randomNumber2+".png";

const randomImageSource2 = "img/" + randomDiceImage2;

const image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
  

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText = `Player I. Won`;
}
else if(randomNumber1<randomNumber2){
   document.querySelector("h1").innerText = `Player II. Won`;
}
else {
    document.querySelector("h1").innerText = "Draw!"
}