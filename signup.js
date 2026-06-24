
function signUp() {

    var userObject = localStorage.getItem("Registered Users");

    if (userObject != null) {
        userObject = JSON.parse(userObject);
    } else {
        userObject = [];
    }

    var isValid = true;

    // Username Validation
    if (userName.value.trim() == "") {
        nameError.innerText = "Please Enter Your User Name";
        isValid = false;
    }
    else if (userName.value.trim().length < 5) {
        nameError.innerText = "User Name must be at least 5 characters";
        isValid = false;
    }
    else {
        nameError.innerText = "";
    }

    // Email Validation
    if (email.value.trim() == "") {
        emailError.innerText = "Please Enter Your Email";
        isValid = false;
    }
    else if (!email.value.includes("@")) {
        emailError.innerText = "Please Enter a Valid Email";
        isValid = false;
    }
    else {
        emailError.innerText = "";
    }

    // Password Validation
    if (password.value == "") {
        passwordError.innerText = "Please Enter Your Password";
        isValid = false;
    }
    else if (password.value.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters";
        isValid = false;
    }
    else {
        passwordError.innerText = "";
    }

    // Stop if validation fails
    if (!isValid) {
        return;
    }

    // Check existing user
    var existUser = false;

    for (var i = 0; i < userObject.length; i++) {
        if (userObject[i].userEmail === email.value.trim()) {
            existUser = true;
            break;
        }
    }

    if (existUser) {
        emailError.innerText = "Email is already registered";
        return;
    }

    userObject.push({
        userEmail: email.value.trim(),
        UserName: userName.value.trim(),
        password: password.value,
        status: false
    });

    localStorage.setItem("Registered Users", JSON.stringify(userObject));
    localStorage.setItem("userName", userName.value.trim());

    successMessage.innerText = "Registration Successful";

    setTimeout(() => {
        window.location.href = "./login.html";
    }, 1500);
}