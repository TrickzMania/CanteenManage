// Select all list items
const items = document.querySelectorAll("ol li");

// Create total display
const totalDisplay = document.createElement("h2");
totalDisplay.textContent = "Total: Rs 0";
document.body.appendChild(totalDisplay);

let total = 0;

// Prices mapped by item name
const prices = {
    "Chapati": 20,
    "Porotta": 25,
    "Mandhi": 170,
    "Skittle": 5,
    "Galaxy": 45
};

// Add click event to each item
items.forEach(item => {
    item.addEventListener("click", () => {
        const name = item.querySelectorAll("p")[0].textContent;
        const price = prices[name];

        total += price;
        totalDisplay.textContent = "Total: Rs " + total;

        // Highlight selected item
        item.style.backgroundColor = "#d4edda";
    });
});
