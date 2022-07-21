var btn=document.getElementById("timer_start")
var counter= document.getElementById("timer");
var flag=0;

var count=0;
btn.addEventListener("click",start);
function start (){
    if(flag === 0){
        var start=setInterval(()=>{
            count=count+1;
            counter.innerHTML= count;
            btn.innerHTML="Stop";
            btn.style.background="red";
            btn.style.color="white";
            btn.style.border.color="red";
            flag=1;

            btn.addEventListener("click", ()=>{
                clearInterval(start)
                btn.innerHTML="Start";
                flag=0;
                btn.style.background="#5FBDF7";
                btn.style.color="white";
                btn.style.border.color="#5FBDF7";
            })
        },1000)
    }
}

////////////////////////////////////////////////
btn.addEventListener("click",stop);
function stop(){
    if(flag==1){
        count= count+1;
        counter.innerHTML= count;
        btn.innerHTML="Start";
        flag=0;

        if(btn.value= "Stop")
            flag=1;
            let name= document.getElementById("query").value.trim();
            // let project=document.getElementById("projectListInput").value;
        
        // if(name === ""){
        //     alert("Please fill the details")
        // }
       let html=""
         html= `
       <div class="name" id="container">
       <input  placeholder=""  id="desc"  value="${name}" >
   </div>
   <div class="project">
           <i class="fa-solid fa-circle-plus" id="plus"></i>
           <p class="p">Project</p>
   </div>

<div class="tag">
   <img src="./images/tag.jpg" alt="" class="tag">
</div>
<div class="dollar">
 <p>$</p>
</div>
<div class="calender">
   <img src="./images/calendar.jpg" alt="" class="calender">
</div>
<div class="time">
    <input type="number"  value="${count}" id="counttime" > 
</div>
<div class="play">
   <img src="./images/play.jpg" alt="" class="play">
</div>
<div class="menubtn">
   <img src="./images/menu-dots-vertical.jpg" alt="" class="menubtn">
   <ul class="subclass">
       <li class="delete">Delete</li>
   </ul>
</div>
       `
       document.querySelector(".details").innerHTML= html;


btn.addEventListener("click",function(){
    btn.innerHTML="Stop";
    flag=0;
})
  } 
}

