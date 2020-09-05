var num=6;
var colors= generaterandomcolors(num);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colourdisplay = document.getElementById("span");
var h1 = document.getElementById("bl");
var resetbt = document.querySelector("#reset");
var checkshow = document.querySelector("#checkshow");
var hardbt = document.querySelector("#hard");
var easybt = document.querySelector("#easy");

easybt.addEventListener("click", function(){
   hardbt.classList.remove("colored");
   easybt.classList.add("colored");
    num=3;
   colors =  generaterandomcolors(num);
   pickedcolor = pickcolor();
   colourdisplay.textContent = pickedcolor;
   for(var i = 0;i<squares.length ; i++)
   {  if (colors[i])
       squares[i].style.backgroundColor=colors[i];
      else 
        squares[i].style.display = "none";
   }
});

hardbt.addEventListener("click", function(){
   easybt.classList.remove("colored");
   hardbt.classList.add("colored");
    num=6;
   colors =  generaterandomcolors(num);
   pickedcolor = pickcolor();
   colourdisplay.textContent = pickedcolor;
   for(var i = 0;i<squares.length ; i++)
   {  
       squares[i].style.backgroundColor=colors[i];
       squares[i].style.display = "block";
      
   }
});
    

colourdisplay.textContent = pickedcolor;

for(var i = 0;i < squares.length ; i++)
{squares[i].style.backgroundColor=colors[i];
 squares[i].addEventListener("click",function(){
   var clickedcolor = this.style.backgroundColor;
     if( clickedcolor === pickedcolor)
     { checkshow.textContent="Correct!"; 
       changeallcolor(clickedcolor);
       h1.style.backgroundColor=pickedcolor;
      resetbt.textContent="play again?";
       
     }
     else {this.style.backgroundColor=" #232323";
           checkshow.textContent="Wrong!! Try again";}
 
 
 });
}


resetbt.addEventListener("click",function(){
      colors = generaterandomcolors(num);
      pickedcolor = pickcolor();
      colourdisplay.textContent = pickedcolor;
      resetbt.textContent="new colors";
      checkshow.textContent="";
      for(var i = 0;i < squares.length ; i++)
      {squares[i].style.backgroundColor=colors[i];}
      h1.style.backgroundColor="steelblue";
      
});
                         
                         
function changeallcolor(color)
{ for(var i = 0; i < squares.length;i++)
{squares[i].style.backgroundColor=color;}
}
function pickcolor()
{ var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generaterandomcolors(num)
{  var arr = [];
   for ( var i = 0;i<num;i++)
   {  arr.push(randomcolor());
   }
   return arr;
}
function randomcolor()
{  var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}