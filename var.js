let cost = 0 ; 
let name=prompt();
let costface = document.getElementById("cost");
let lol = document.getElementById("nam");
lol.innerText = "Welcome To Our Resturant -"+name+"-";
////lol shit/////////
lol.style.color = "red" ;
lol.style.textAlign = "center";
lol.style.backgroundColor="yellow";
lol.style.width = "500px"; 
lol.style.height = "40px"; 
function coffeeCost(){
  cost+=5;
  costface.innerText=cost+"$" ;
}
function bagelsCost(){
  cost+=3;
  costface.innerText=cost +"$";
}
function soupCost(){
  cost+=9;
  costface.innerText=cost+"$" ;
}
 function order(){
  let total = cost +(cost *10)/100 ; 
  console.log("TAXE (10%)"+((cost *10)/100)); 
  alert("Your order has been submited TOTAL(10% TAXE) :" + total+"$");
  cost=0; 
  costface.innerText=cost+"$"
 }
