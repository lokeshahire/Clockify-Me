

// -------CREATE PROJECT POPUP--------------------------------//
 
  let popup=document.getElementById("popup");
  function openpopup(){
      popup.classList.add("open-popup")
  }

  function closepopup(){
    popup.classList.remove("open-popup");
  }

// -------CREATE PROJECT POPUP--------------------------------//

  let arr=JSON.parse(localStorage.getItem("data"))||[];

  function create(){
    //  popup.classList.remove("open-popup")
     let projectName=document.getElementById("projectName").value;
     let clientName=document.getElementById("clientName").value;

     let Tracked="0.00h";
     let Amount="0.00USD";
     let progress="NA";
     let Access="public";
     let fav="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTc-AM-BnKj0DfaYaIcGZpSYLpDWqh0wCog&usqp=CAU"
     let fav1="data:image/png;base64,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";
     
     if(projectName==""||clientName==""){
        alert("fill all the details")
     }
     else{
        console.log(projectName,clientName,Access,Tracked,Amount,progress);
     
        let obj={
           projectName:projectName,
           clientName:clientName,
           Tracked:Tracked,
           Amount:Amount,
           progress:progress,
           Access:Access,
           fav:fav,
           fav1:fav1,
           tripledot:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADY2Nh+fn7s7OxPT086Ojrc3Nz19fXBwcETExPj4+PPz8+kpKSHh4eXl5fHx8eRkZGlpaVkZGQgICCxsbEaGho/Pz94eHglJSVHR0dbW1u5ubkqKippaWmenp7Qj+cAAAAEX0lEQVR4nO2di5aiMAyGqaKCiHgbAR3H93/LXZYdReXSZOaY84d8L2D+U2zSNGmC4F1EcVrk5dIty7xI4+htv/smkuzkHjllibRRv8jq7No4r6QN+yUmz8vXWMiJtHG/QDTt1Fcxhf9Drspegc6V4J9qOqCvIpU28idsPQQ6t5U2k8/aS6Bza2lDuWSeAp3LpE3l8ekt0LlPaWM5JASBziEGON1+vo2TtLl0fPxEEzifERIFOhdKm0ykP1ZrYyptMo2ILNA5rAjV3xXewXKKF4bCi7TRFFYMgc4hnTJ8A9JHkMLTGUvhTNpsf+jOsAbHJdJC0js4wSnlVNEE54TB8YYVOB7RL3nxCk46g+cskNyFfoX6v1L9O80HU+GHtOHeTJgKce5p9EdtQc4SmEubTaBgKSykzSYQsxTG0mYTiI4MgUeoVBTnM0X6SINgwVC4kDaaRnv1RR9naZOJ0J0+jrv/DzWtD5bU/0u0JAlcQm2kNTSfiOQLb1DOwThn3wf891O0ffSGb+obKNn9jN8qwq5gxZeHwC9pI3/GdVDgVdrEnzKZ9+qbw4UyLfQtI/wC1oRd2cUMKDEzxOer45jh3DT5EcbT2Xf9wmU2jRUtX4MoSRaLRZIARtmGYRiGYRiGYRiGYRiGYRiGYagiCjfX7Xq93l43ocKbi2S3PzSu1g77HU6jmg8t14eqLhA/uiqGjzgNFn2s+koV5kjdzR0MVbeBVrTdCIc7L3Lo+26/cm+wAu8mvg8PwP4Z/Qv2QVeR0t+F+V+ktHchNXXdoDUDAzoN6vMmeLtNf9HlK3Npg6nQW4HRYlR6e95R2mQanLc/sA5TnCd4oHoSeA/UIJ36dyyFO2mzCexZCvfSZvsTHYbltHDAycDpf1Nhw1S4kTbcm+FWoHZw+kv0v8Cj/xUlU4ivUP//UP9eqt8f6o9p9Mel+s8WIzgf6j/j68/TjCDXpj9fOoKct/57ixHcPem/PxzBHfAI7vH112KMoJ5mBDVRI6hrC/TXJgYjqC8N9NcIV2iv867QXqv/D+X9FoZhGIZhGIZhGIZhGIZhGIZhQKF7voX2GSXK58yonxWkfd6T+pld6ueuqZ+dp37+ofoZlurnkKqfJat+HrD+mc7q53Lrn63uv49+A7af+pfp38Eq9y4YCgtpoylE9OY8545I2ynNF36D5BM5HynWZ0pp6roD1N6l/00FuruvwXH69CbgGpz2i67s4RCZtOHe6H+BR/8rSvoV6v9K9e80nHc/KnBuo3jP0yA9UKM/amM9wIOV+ua5CxxnQX/YpAaq6/kyrOeFi7TRJDgeEccbVkQMhUiJqICe1MdL69NdIpAzrEmJAlNpg+mcSAJP0uYyoAWnOCFpA8oJA+dU8YC/U8RyhQ18w1OkgPQJv3QGTvKiBR+fAegnmqzKAX0l1Imijag/fpuCRaOtTLp9/wnnLqafVXtlxhn+A22QZM8Lecogw5g+ojgt8nLplmVepPH7/n5/AAldOAyJinZpAAAAAElFTkSuQmCC"
           
        }
       arr.push(obj);
       console.log(arr)
       localStorage.setItem("data", JSON.stringify(arr));
       display(arr) 
   }
     }
  
// window.addEventListener("load", function(){
//     display(arr)
//  })

 
function display(arr){
    document.querySelector("tbody").innerHTML="";
    arr.forEach((el)=>{
        let tr=document.createElement("tr")

        let td1=document.createElement("td")
        td1.innerText=el.projectName;
        let td2=document.createElement("td")
        td2.innerText=el.clientName;
        let td3=document.createElement("td")
        td3.innerText=el.Tracked;
        let td4=document.createElement("td")
        td4.innerText=el.Amount;
        let td5=document.createElement("td")
        td5.innerText=el.progress;
        let td6=document.createElement("td")
        td6.innerText=el.Access;
        let td7=document.createElement("img")
        td7.addEventListener("click", staropen)
        td7.addEventListener("dblclick", starclose)
        td7.src=el.fav;
        function staropen(){
            console.log("hello")
            td7.src=el.fav1;
        }
        function starclose(){
            console.log("hello")
            td7.src=el.fav;
          
        }
        let td8=document.createElement("img")
        td8.addEventListener("click", Archive)
        td8.src=el.tripledot;
        td8.addEventListener("dblclick", closeArchive)
        let Archive1=document.getElementById("Archive");
        function Archive(){
            console.log("hello")
            Archive1.classList.add("open-Archive")
        }
        function closeArchive(){
            Archive1.classList.remove("open-Archive") 
        }
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        document.querySelector("tbody").append(tr)
      })
     
}
display(arr)


// ------------------filter by name--------------------//
let arr1=JSON.parse(localStorage.getItem("hello"))||[]
function filter(){
    document.querySelector("tbody").innerHTML="";
    let projectname=document.getElementById("projectname").value;
  let  arr1=arr.filter((el)=>{
   return projectname==el.projectName
    })
   console.log(arr1) 

   localStorage.setItem("hello", JSON.stringify(arr1));
   display(arr1)
}

// ---------------show all--------------------//

function All(){
   let checked=document.getElementById("Active").value;
   if(checked=="All"){
    display(arr)
    console.log("x")
   }
   
}


// ----------------popup report-------------------////
  let reportPopup=document.getElementById("reportPopup");

  function openreportpopup(){

    reportPopup.classList.add("open-reportPopup")
}
function closereportpopup(){
    reportPopup.classList.remove("open-reportPopup")
}


// --------popUp Archive----------------/////




// function closeArchive(){
//   reportPopup.classList.remove("open-Archive")
// }
