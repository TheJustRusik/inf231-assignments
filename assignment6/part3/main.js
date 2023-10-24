const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapes",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Peach",
    "Pear",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Watermelon"
];

const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(query));

    suggestionsList.innerHTML = "";

    if (query !== "") {
        filteredData.forEach(item => {
            const suggestionItem = document.createElement("div");
            suggestionItem.textContent = item;
            suggestionItem.classList.add("p-2", "hover:bg-gray-200", "cursor-pointer");
            suggestionItem.addEventListener("click", () => {
                searchInput.value = item;
                suggestionsList.classList.add("hidden");
            });
            suggestionsList.appendChild(suggestionItem);
        });

        suggestionsList.classList.remove("hidden");
    } else {
        suggestionsList.classList.add("hidden");
    }
});
