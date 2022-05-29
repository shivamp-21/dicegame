window.onload=function(){
// for dice1
var randomno1 =Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomno1+ ".png";
var randomsrc= "images/"+randomdiceimage;
var image1= document.querySelectorAll('img')[0];
image1.setAttribute("src",randomsrc);
// for dice2
var randomno2 = Math.floor(Math.random()*6)+1;
var randomsrc2="images/dice" + randomno2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomsrc2);

if(randomno1>randomno2)
{document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomno2>randomno1)
{document.querySelector("h1").innerHTML="Player 2 wins";
}
else
    { document.querySelector("h1").innerHTML="draw!!";
}

}