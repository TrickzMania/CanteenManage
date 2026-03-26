document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("ol li");
    const mysteryComboBtn = document.getElementById("mysteryComboBtn");
    const comboSuggestion = document.getElementById("comboSuggestion");
    const partyModeBtn = document.getElementById("partyModeBtn");
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

    // Mystery Combo Function
    mysteryComboBtn.addEventListener("click", () => {
        if (items.length < 2) return;

        items.forEach(item => item.style.backgroundColor = "#333");

        let firstIndex = Math.floor(Math.random() * items.length);
        let secondIndex;
        do {
            secondIndex = Math.floor(Math.random() * items.length);
        } while (secondIndex === firstIndex);

        const firstItem = items[firstIndex];
        const secondItem = items[secondIndex];

        firstItem.style.backgroundColor = "#ffecb3";
        secondItem.style.backgroundColor = "#ffe0b2";

        const firstName = firstItem.querySelector("p").textContent.trim();
        const secondName = secondItem.querySelector("p").textContent.trim();

        const totalPrice = prices[firstName] + prices[secondName];

        comboSuggestion.textContent = `🍽️ Mystery Combo: ${firstName} + ${secondName} | Total Price: Rs ${totalPrice}/- 😋`;
    });

    // Party Mode Function
    partyModeBtn.addEventListener("click", () => {
        body.classList.toggle("party-mode");
        comboSuggestion.textContent = body.classList.contains("party-mode") ?
            "🕺 Party Mode Activated! Dance & Eat! 🎶" :
            "";
    });
});
