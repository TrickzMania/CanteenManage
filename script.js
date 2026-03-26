document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("ol li");
    const mysteryComboBtn = document.getElementById("mysteryComboBtn");
    const comboSuggestion = document.getElementById("comboSuggestion");

    const prices = {
        "Chapati": 20,
        "Porotta": 25,
        "Mandhi": 170,
        "Skittle": 5,
        "Galaxy": 45
    };

    mysteryComboBtn.addEventListener("click", () => {
        if (items.length < 2) return;

        // Reset highlights
        items.forEach(item => item.style.backgroundColor = "white");

        // Pick two different random indexes
        let firstIndex = Math.floor(Math.random() * items.length);
        let secondIndex;
        do {
            secondIndex = Math.floor(Math.random() * items.length);
        } while (secondIndex === firstIndex);

        const firstItem = items[firstIndex];
        const secondItem = items[secondIndex];

        // Highlight them
        firstItem.style.backgroundColor = "#ffecb3";  // warm yellow
        secondItem.style.backgroundColor = "#ffe0b2"; // soft orange

        // Get their names
        const firstName = firstItem.querySelector("p").textContent.trim();
        const secondName = secondItem.querySelector("p").textContent.trim();

        // Calculate total price
        const totalPrice = prices[firstName] + prices[secondName];

        // Show combo suggestion on page
        comboSuggestion.textContent = `🍽️ Today's Mystery Combo: ${firstName} + ${secondName} | Total Price: Rs ${totalPrice}/- 😋`;
    });
});
