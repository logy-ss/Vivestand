// The sign up form. There is no server yet, so no account is really made:
// we only check the boxes are filled in, then say thanks.

const signupForm = document.getElementById("signup-form");
const signupMessage = document.getElementById("form-message");

// Show a red message when something is missing.
function showProblem(text) {
    signupMessage.className = "form-message";
    signupMessage.textContent = text;
}

function checkSignup(event) {
    // Stay on this page instead of letting the form reload it.
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (name === "") {
        showProblem("Please fill in your name.");
        return;
    }
    if (age === "") {
        showProblem("Please fill in your age.");
        return;
    }
    if (email === "") {
        showProblem("Please fill in your email.");
        return;
    }
    if (email.indexOf("@") === -1) {
        showProblem("Your email needs an @, like name@example.com.");
        return;
    }
    if (password === "") {
        showProblem("Please choose a password.");
        return;
    }

    signupMessage.className = "form-message success";
    signupMessage.textContent = "Thanks, " + name + "! This is a demo, nothing was sent.";
}

signupForm.addEventListener("submit", checkSignup);
