// Clicking a specialty card (Shoulder, Knee, ...) shows only those doctors.
// The "All Doctors" card shows everyone.

const filterCards = document.querySelectorAll(".filter-card");
const doctorGroups = document.querySelectorAll(".specialty-group");

function showSpecialty(chosenCard) {
    const chosen = chosenCard.getAttribute("data-specialty");

    // Only the clicked card is highlighted.
    for (let i = 0; i < filterCards.length; i++) {
        filterCards[i].classList.remove("active");
    }
    chosenCard.classList.add("active");

    // Show a group of doctors if it matches, hide it if it doesn't.
    for (let i = 0; i < doctorGroups.length; i++) {
        const group = doctorGroups[i];
        const groupSpecialty = group.getAttribute("data-specialty");
        if (chosen === "all" || chosen === groupSpecialty) {
            group.style.display = "block";
        } else {
            group.style.display = "none";
        }
    }

    // Slide down so you can see the doctors you picked.
    document.querySelector(".doctors-section").scrollIntoView({ behavior: "smooth" });
}

for (let i = 0; i < filterCards.length; i++) {
    const card = filterCards[i];
    card.addEventListener("click", function () {
        showSpecialty(card);
    });
}
