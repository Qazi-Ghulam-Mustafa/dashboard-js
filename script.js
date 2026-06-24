
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

var userEmail = document.getElementById("userEmail");
var userName = document.getElementById("userName");

function setUserData() {

    var login = localStorage.getItem("login");
    var email = localStorage.getItem("email");
    var name = localStorage.getItem("userName");

    // Agar login nahi hai to login page pe bhej do
    if (login !== "true") {
        window.location.href = "./login.html";
        return;
    }
    console.log(localStorage.length)
    // Dashboard pe name aur email show karo
    userName.innerText = name;
    userEmail.innerText = email;
}

function logout() {

    // Login related data remove karo
    localStorage.removeItem("login");
    localStorage.removeItem("email");
    localStorage.removeItem("userName");


    // Login page pe redirect
    window.location.href = "./login.html";

}

setUserData();