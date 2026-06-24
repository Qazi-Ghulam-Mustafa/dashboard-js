
var email = document.getElementById("email");
var password = document.getElementById("password");

var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var successMessage = document.getElementById("success");

function login() {

    // Clear previous messages
    emailError.innerText = "";
    passwordError.innerText = "";
    successMessage.innerText = "";

    var userEmail = email.value.trim();
    var userPassword = password.value.trim();

    // Get users from localStorage
    var userObject = localStorage.getItem("Registered Users");

    if (userObject) {
        userObject = JSON.parse(userObject);
    } else {
        userObject = [];
    }

    var isValid = true;

    // Email Validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userEmail === "") {
        emailError.innerText = "Please Enter Your Email";
        isValid = false;
    }
    else if (!emailPattern.test(userEmail)) {
        emailError.innerText = "Please Enter a Valid Email";
        isValid = false;
    }

    // Password Validation
    if (userPassword === "") {
        passwordError.innerText = "Please Enter Your Password";
        isValid = false;
    }
    else if (userPassword.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Check if email exists
    var userFound = false;
    var loginSuccess = false;

    for (var i = 0; i < userObject.length; i++) {

        if (userObject[i].userEmail === userEmail) {

            userFound = true;

            if (userObject[i].password === userPassword) {

                loginSuccess = true;

                localStorage.setItem("login", "true");
                localStorage.setItem("email", userObject[i].userEmail);
                localStorage.setItem("userName", userObject[i].UserName);

                break;
            }
        }
    }

    // User email not found
    if (!userFound) {

        emailError.innerText = "Account does not exist. Redirecting to Sign Up...";

        setTimeout(() => {
            window.location.href = "./signup.html";
        }, 2000);

        return;
    }

    // Password incorrect
    if (!loginSuccess) {

        passwordError.innerText = "Incorrect Password";
        return;
    }

    // Login successful
    successMessage.innerText = "Login Successful";

    setTimeout(() => {
        window.location.href = "./index.html";
    }, 1500);
}