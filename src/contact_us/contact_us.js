// The contact form. There is no server yet, so the message is not really sent:
// we only check the boxes are filled in, then say thanks.

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("form-message");

// Show a red message when something is missing.
function showProblem(text) {
    contactMessage.className = "form-message";
    contactMessage.textContent = text;
}

function checkContact(event) {
    // Stay on this page instead of letting the form reload it.
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const problem = document.getElementById("problem").value.trim();

    if (name === "") {
        showProblem("Please fill in your name.");
        return;
    }
    if (number === "") {
        showProblem("Please fill in your phone number.");
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
    if (problem === "") {
        showProblem("Please tell us what the problem is.");
        return;
    }

    contactMessage.className = "form-message success";
    contactMessage.textContent = "Thanks, " + name + "! This is a demo, nothing was sent.";
}

contactForm.addEventListener("submit", checkContact);
