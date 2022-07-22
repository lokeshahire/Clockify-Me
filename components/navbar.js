let navbar =()=>{
    return  `
    <div class="left">
        <img class="menu" src="./images/menu.png" alt="">
        <img id="logo" src="./images/download.png" alt="">
    </div>
    <div class="right">
        <div class="name"> 
            <p id="h"></p>
             <i class="fa-solid fa-angle-down"></i> 
        </div>
        <div>
            <a href="upgrade.html"><button class="btn">Upgrade</button></a>
         </div>
        <div class="question">
            <i class="fa-solid fa-circle-question" id="question"></i>
        </div>
        <div class="notification">
            <i class="fa-solid fa-bell"></i>
        </div>
        <div>
            <i class="fas fa-user"></i>
            <div class="dropdown">
                <span class="dropbtn">Profile</span>
                <div class="dropdown-content">
                    <a href="#">Profile settings</a>
                    <a href="#">Dark theme</a> <label for="" id="dark-change"></label>
                    <a href="#">Try chat app</a>
                    <a href="login.html">Logout</a>
                </div>
            </div>  
        </div>
    </div> 
    `
}
export {navbar}