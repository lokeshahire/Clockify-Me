document.querySelector("form").addEventListener("submit",myUser);
   let arr=JSON.parse(localStorage.getItem("userData"))||[];
     
   function myUser(event){
    event.preventDefault();
   
   
         let x=checkCredential(arr);
         if(x==true){
            alert("Login Successfull")
                window.location.href="timetracker.html";
         }
         if(x==false){
            alert("Invalid email or password")
         }


   }

   function checkCredential(arr){
    let email=document.querySelector("#email").value;
   let pass=document.querySelector("#password").value;
   for(let f=0;f<arr.length;f++){
    if(arr[f]["email"]==email && arr[f]["password"]==pass){
        return true
    } 
   }
   return false 
   }
   function Login(){
        window.location.href="login.html";
    }