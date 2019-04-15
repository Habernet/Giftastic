// Array of strings based on topics
topics = [
    "Halo", "Carolina Hurricanes", "Honda", "Apple", "Game of Thrones", "Breaking Bad",
    "PubG", "Star Wars", "Epic Games"
]

// Loop through the array to create buttons based on each
for (let i = 0; i < topics.length; i++){
    var button = $("<button>").text(topics[i]);
    button.attr("data-name", topics[i]).addClass("btn btn-primary");
    $("#buttons").append(button);
}