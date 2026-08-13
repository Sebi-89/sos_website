// Bereich: CTA Button
document.getElementById("cta-button").addEventListener("click", () => {
    alert("Vielen Dank! Wir melden uns schnellstmöglich.");
});

// Bereich: Formular-Handling
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Nachricht erfolgreich gesendet!");
});
