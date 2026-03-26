document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll("ol li");
    const surpriseBtn = document.getElementById("surpriseBtn");

    if (!surpriseBtn) {
        console.log("Button not found!");
        return;
    }

    surpriseBtn.addEventListener("click", () => {
        if (items.length === 0) {
            alert("No items found!");
            return;
        }

        // Remove old highlights
        items.forEach(item => item.style.backgroundColor = "white");

        // Pick random item
        const randomIndex = Math.floor(Math.random() * items.length);
        const selectedItem = items[randomIndex];

        // Highlight
        selectedItem.style.backgroundColor = "#c8e6c9";

        // Get name from HTML
        const name = selectedItem.querySelectorAll("p")[0].textContent;

        alert("Try this today: " + name + " 😋");
    });

});
