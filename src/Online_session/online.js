// The online session has 4 steps, shown one at a time:
// 1 answer 3 questions → 2 a 10-minute session → 3 prices → 4 book the next session.

// The free session lasts 10 minutes: 10 × 60 = 600 seconds.
const SESSION_SECONDS = 600;

// The boxes for each step, in order. Step 1 is the first one.
const STEP_BOXES = ["form-step", "timer-step", "pricing-step", "booking-step"];

let secondsLeft = SESSION_SECONDS;
let timer = null;

// Show one step and hide the others. Also light up the right number at the top.
function showStep(stepNumber) {
    for (let i = 0; i < STEP_BOXES.length; i++) {
        const box = document.getElementById(STEP_BOXES[i]);
        const dot = document.getElementById("step-" + (i + 1));
        if (i + 1 === stepNumber) {
            box.style.display = "block";
            dot.classList.add("active");
        } else {
            box.style.display = "none";
            dot.classList.remove("active");
        }
    }
}

// Turn 125 seconds into "02:05".
function showTimeLeft() {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    let text = "";
    if (minutes < 10) {
        text = text + "0";
    }
    text = text + minutes + ":";
    if (seconds < 10) {
        text = text + "0";
    }
    text = text + seconds;

    document.getElementById("timer").textContent = text;
}

// Called once every second while the session is running.
function tick() {
    secondsLeft = secondsLeft - 1;
    if (secondsLeft <= 0) {
        endSession();
    } else {
        showTimeLeft();
    }
}

function startSession(event) {
    // Stay on this page instead of letting the form reload it.
    event.preventDefault();

    showStep(2);
    secondsLeft = SESSION_SECONDS;
    showTimeLeft();
    timer = setInterval(tick, 1000);
}

function endSession() {
    clearInterval(timer);
    showStep(3);
}

// Check the date and time, then show the booking card.
function confirmBooking(event) {
    event.preventDefault();

    const date = document.getElementById("booking-date").value;
    const time = document.getElementById("booking-time").value;
    const message = document.getElementById("booking-message");

    if (date === "") {
        message.textContent = "Please pick a date.";
        return;
    }
    if (time === "") {
        message.textContent = "Please pick a time.";
        return;
    }

    // "2026-10-12" and "18:00" together make one moment in time.
    const chosenMoment = new Date(date + "T" + time);
    if (chosenMoment < new Date()) {
        message.textContent = "That time has already passed. Please pick a later one.";
        return;
    }

    message.textContent = "";
    const niceDate = chosenMoment.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
    document.getElementById("booking-summary").textContent = niceDate + ", " + time;

    document.getElementById("booking-form").style.display = "none";
    document.getElementById("booking-confirmed").style.display = "block";
}

document.getElementById("consultation-form").addEventListener("submit", startSession);
document.getElementById("end-session-btn").addEventListener("click", endSession);
document.getElementById("book-next-btn").addEventListener("click", function () {
    showStep(4);
});
document.getElementById("booking-form").addEventListener("submit", confirmBooking);
