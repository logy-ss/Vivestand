// The log in form. There is no server yet, so nobody is really logged in:
// we only check the boxes are filled in, then say thanks.

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("form-message");

// Show a red message when something is missing.
function showProblem(text) {
    loginMessage.className = "form-message";
    loginMessage.textContent = text;
}

function checkLogin(event) {
    // Stay on this page instead of letting the form reload it.
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "") {
        showProblem("Please fill in your email.");
        return;
    }
    if (email.indexOf("@") === -1) {
        showProblem("Your email needs an @, like name@example.com.");
        return;
    }
    if (password === "") {
        showProblem("Please fill in your password.");
        return;
    }

    loginMessage.className = "form-message success";
    loginMessage.textContent = "Thanks! This is a demo, nothing was sent.";
}

loginForm.addEventListener("submit", checkLogin);
