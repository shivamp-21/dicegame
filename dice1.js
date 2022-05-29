window.onload=function()

{
    function random(){
    var randomno=Math.floor(Math.random()*6);
    
    return randomno;
    
}

var arr=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var url="./images/";
var player1=random();
var player2=random();
console.log(player1,player2)
if(player1>player2)
{document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(player2>player1)
{document.querySelector("h1").innerHTML="Player 2 wins";
}
else
    { document.querySelector("h1").innerHTML="draw!!";
}

document.getElementsByClassName("img1")[0].src=url+arr[player1];
document.getElementsByClassName("img2")[0].src=url+arr[player2];
}