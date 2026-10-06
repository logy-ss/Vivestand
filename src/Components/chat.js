// The little 💬 chat in the corner of the Doctors and Online pages.
// It is not a real doctor: it answers with one of the friendly lines below.

// Wait half a second before answering, so it feels like someone is typing.
const REPLY_DELAY_MS = 500;

const CANNED_REPLIES = [
    "That's a great question! Our specialists can help you with that. Would you like to book a consultation?",
    "We have expert doctors in various specialties. Which injury would you like help with?",
    "Recovery takes time and the right guidance. Let me connect you with the right specialist!",
    "You can browse our doctors by specialty to find the perfect match for your needs.",
    "Feel free to select a doctor and book a consultation. We're here to help! 🏥"
];

const chatButton = document.getElementById("chatBtn");
const chatWindow = document.getElementById("chatContainer");
const chatInput = document.getElementById("chatInput");
const chatSendButton = document.getElementById("chatSend");
const chatMessages = document.getElementById("chatMessages");

// Add one bubble to the chat. "who" is "user" or "bot".
function addChatBubble(who, text) {
    const bubble = document.createElement("div");
    bubble.className = "chat-message message-" + who;

    const content = document.createElement("div");
    content.className = "message-content";
    // textContent shows the words exactly as typed, so nobody can sneak in HTML.
    content.textContent = text;

    bubble.appendChild(content);
    chatMessages.appendChild(bubble);

    // Scroll to the newest message.
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function pickRandomReply() {
    const index = Math.floor(Math.random() * CANNED_REPLIES.length);
    return CANNED_REPLIES[index];
}

function sendChatMessage() {
    const message = chatInput.value.trim();

    // Nothing typed? Then there is nothing to send.
    if (message === "") {
        return;
    }

    addChatBubble("user", message);
    chatInput.value = "";

    setTimeout(function () {
        addChatBubble("bot", pickRandomReply());
    }, REPLY_DELAY_MS);
}

chatButton.addEventListener("click", function () {
    chatWindow.classList.toggle("active");
});

chatSendButton.addEventListener("click", sendChatMessage);

chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendChatMessage();
    }
});
