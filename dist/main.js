"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Dynamically load skills.html into #skills section
    fetch("src/pages/skills.html")
        .then(response => response.text())
        .then(data => {
        document.getElementById("skills").innerHTML = data;
    })
        .catch(error => console.error("Error loading skills section:", error));
});
