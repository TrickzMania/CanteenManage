document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("ol li");
    const mysteryComboBtn = document.getElementById("mysteryComboBtn");
    const partyModeBtn = document.getElementById("partyModeBtn");
    const comboSuggestion = document.getElementById("comboSuggestion");
    const body = document.body;

    const prices = {
        "Chapati": 20,
        "Porotta": 25,
        "Mandhi": 170,
        "Skittle": 5,
        "Galaxy": 45,
        "Pizza": 120,
        "Burger": 80,
        "Ice Cream": 50
    };

    // Mystery Combo
    mysteryComboBtn.addEventListener("click", () => {
        if (items.length < 2) return;

        // Reset highlights
        items.forEach(item => item.style.backgroundColor = "rgba(51,51,51,0.9)");

        // Pick two different random items
        let firstIndex = Math.floor(Math.random() * items.length);
        let secondIndex;
        do {
            secondIndex = Math.floor(Math.random() * items.length);
        } while (secondIndex === firstIndex);

        const firstItem = items[firstIndex];
        const secondItem = items[secondIndex];

        // Highlight selected items
        firstItem.style.backgroundColor = "#ffecb3";
        secondItem.style.backgroundColor = "#ffe0b2";

        const firstName = firstItem.querySelector("p").textContent.trim();
        const secondName = secondItem.querySelector("p").textContent.trim();

        const totalPrice = prices[firstName] + prices[secondName];

        comboSuggestion.textContent = `🍽️ Mystery Combo: ${firstName} + ${secondName} | Total Price: Rs ${totalPrice}/- 😋`;
    });

    // Party Mode
    partyModeBtn.addEventListener("click", () => {
        body.classList.toggle("party-mode");

        comboSuggestion.textContent = body.classList.contains("party-mode") ?
            "🕺 Party Mode Activated! Dance & Eat! 🎶" :
            "Party Mode Off!";
    });
});
