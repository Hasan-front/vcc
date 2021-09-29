
var randomnumber1= Math.floor(Math.random()*6)+1;

var randomimage= "dice"+randomnumber1+".png";
var newsrc= "images/"+randomimage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", newsrc);

var randomnumber2=Math.floor(Math.random()*6)+1;

var randomimage2= "dice"+randomnumber2+".png";
var newsrc2= "images/"+randomimage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", newsrc2);


if(randomnumber1>randomnumber2){
	document.querySelector("h1").innerHTML="PLAYER 1 WON";
}
else if(randomnumber1===randomnumber2)
{
	document.querySelector("h1").innerHTML="ITS A TIE";
}


else
{
	document.querySelector("h1").innerHTML="PLAYER 2 WON";
}
