let navbar =()=>{
    return  `
    <div class="left">
        <img class="menu" src="./images/menu.png" alt="">
        <img id="logo" src="./images/download.png" alt="">
    </div>
    <div class="right">
        <div class="name"> 
            <p>Anurag Gupta</p>
             <i class="fa-solid fa-angle-down"></i> 
             </div>
        <!-- <div class="downarrow"> -->
            <!-- <i class="fa-solid fa-angle-down"></i> -->
        <!-- </div> -->
        <div class="question">
            <i class="fa-solid fa-circle-question" id="question"></i>
        </div>
        <div class="notification">
            <i class="fa-solid fa-bell"></i>
        </div>
        <div class="action">
            <div class="profile" onclick="menuToggle()">
                <i class="fa-solid fa-user"></i>
            </div>
                 <div class="menu">
                    <h3>Anurag Gupta <br> <span>anurag@gmail.com</span></h3>
                    <ul>
                    <li><a href="#">Profile settings</a></li>
                    <li><a href="#">Dark theme</a> <label for="" id="dark-change"></label></li>
                    <li><a href="#">Download apps</a></li>
                    <li><a href="#">Try chat app</a> </li>
                    <li><a href="login.html">Logout</a></li>
                    </ul>
           </div>
        </div>
    </div>
    `
}
export {navbar}