
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username === 'Entri Elevate' && password === 'admin123') {
        alert("success full !")
        window.location.href=("form.html") 
    } 
    else {
        alert("Invalid username or password")
    }
}

function forgotPassword() {
    var email = prompt("Enter the email");

    if (email) {
        alert("Verification code sent to your email");
    }
}
