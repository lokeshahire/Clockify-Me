import {navbar} from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar()

let content=document.getElementsByTagName("body")[0];
let darkTheme=document.getElementById("dark-change")
darkTheme.addEventListener("click",function(){
    darkTheme.classList.toggle("active");
    content.classList.toggle("night")
})

var ar=JSON.parse(localStorage.getItem("userData"))
console.log(ar);

ar.forEach((el)=>{
   var div=el.email
   console.log(div)
   document.getElementById("h").append(div)
})