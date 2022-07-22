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
}