document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("ol li");
    const mysteryComboBtn = document.getElementById("mysteryComboBtn");

    // Prices dictionary matching your menu items
    const prices = {
        "Chapati": 20,
        "Porotta": 25,
        "Mandhi": 170,
        "Skittle": 5,
        "Galaxy": 45
    };

    if (!mysteryComboBtn) {
        console.log("Mystery Combo button not found!");
        return;
    }

    mysteryComboBtn.addEventListener("click", () => {
        if (items.length < 2) {
            alert("Not enough items for a combo!");
            return;
        }

        // Reset highlights
        items.forEach(item => item.style.backgroundColor = "white");

        // Pick two different random indexes
        let firstIndex = Math.floor(Math.random() * items.length);
        let secondIndex;
        do {
            secondIndex = Math.floor(Math.random() * items.length);
        } while (secondIndex === firstIndex);

        // Selected items
        const firstItem = items[firstIndex];
        const secondItem = items[secondIndex];

        // Highlight them
        firstItem.style.backgroundColor = "#ffecb3";  // warm yellow highlight
        secondItem.style.backgroundColor = "#ffe0b2"; // soft orange highlight

        // Get their names
        const firstName = firstItem.querySelector("p").textContent.trim();
        const secondName = secondItem.querySelector("p").textContent.trim();

        // Calculate total price
        const totalPrice = prices[firstName] + prices[secondName];

        // Show combo suggestion
        alert(`How about trying this combo today?\n🍽️ ${firstName} + ${secondName}\nTotal Price: Rs ${totalPrice}/- Enjoy! 😋`);
    });
});
