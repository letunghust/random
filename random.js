// List of names
var names = [
    "Tùng",
    "Linh",
    "Tú",
    "Quang",
    "Đạt",
];

// Generate a random name
function generateRandomName() {
    var randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

// Handle button click event
var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function() {
    var nameContainer = document.getElementById("nameContainer");
    nameContainer.textContent = generateRandomName();
});

// Handle button click event to add a new name
var addNameBtn = document.getElementById("addNameBtn");
addNameBtn.addEventListener("click", function() {
    var newNameInput = document.getElementById("newNameInput");
    var newName = newNameInput.value;
    
    if (newName !== "") {
        names.push(newName);
        newNameInput.value = ""; // Clear the input field
    }
});
