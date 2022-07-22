<<<<<<< HEAD
let arr = JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("form").addEventListener("submit", function () {

    let obj = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    if (checksignupcredential(obj.email) === true) {
        alert("Signup Successfully. Please log in");
        arr.push(obj);
        localStorage.setItem("userData", JSON.stringify(arr));
        window.location.href="login.html";
    } else {
        alert("Account already exist. Please log in")
        window.location.href="login.html";
    }

})

function checksignupcredential(email) {
    let filtered = arr.filter(function (el) {
        return email === el.email
    })
    if (filtered.length > 0) {
        return false;
    } else {
        return true;
    }
}
function Signup() {
    window.location.href = "signup.html";
=======
let arr = JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("form").addEventListener("submit", function () {

    let obj = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    if (checksignupcredential(obj.email) === true) {
        alert("You are Successfully Signup");
        arr.push(obj);
        localStorage.setItem("userData", JSON.stringify(arr));
    } else {
        alert("Your account is already exist")
    }

})

function checksignupcredential(email) {
    let filtered = arr.filter(function (el) {
        return email === el.email
    })
    if (filtered.length > 0) {
        return false;
    } else {
        return true;
    }
}
function Signup() {
    window.location.href = "signup.html";
>>>>>>> 3db7b760803f9901014ef11542d01d940031a482
}