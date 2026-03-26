const items = document.querySelectorAll("ol li");

// Food names list
const foodNames = ["Chapati", "Porotta", "Mandhi", "Skittle", "Galaxy"];

// Surprise button
const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {
    // Remove old highlights
    items.forEach(item => item.style.backgroundColor = "white");

    // Pick random item
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];

    // Highlight it
    selectedItem.style.backgroundColor = "#c8e6c9";

    // Show alert
    alert("Try this today: " + foodNames[randomIndex] + " 😋");
});
