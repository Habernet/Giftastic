// Array of strings based on topics
games = [
    "Halo", "Fortnite", "PUBG", "Apex Legends", "Call of Duty"
]

// Loop through the array to create buttons based on each
var renderButtons = function (games) {
    $("#buttons").empty();
    for (let i = 0; i < games.length; i++) {
        var button = $("<button>").text(games[i]);
        button.attr("data-name", games[i]).addClass("btn btn-primary");
        $("#buttons").append(button);
    }
}
renderButtons(games);

// ON click event for any of the buttons that have been rendered: 
$("#buttons").on("click",".btn", function () {
    console.log("you clicked!");
    //Build the queryURL based on the button clicked
    var searchFor = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchFor + "&limit=10" + "&api_key=F0y8OeTPpYSZkVLz2fLvNXdxqtpfpPSp";


    //Ajax to call the Giphy API with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (let i = 0; i < 10; i++) {
            var gifDiv = $("<div>");
            var gif = $("<img>").attr("src", response.data[i].images.fixed_height_still.url).addClass("gif");
            gif.attr("data-state", "still");
            gif.attr("data-still", response.data[i].images.fixed_height_still.url);
            gif.attr("data-animate", response.data[i].images.fixed_height.url);
            var rating = $("<p>").text("Rating: " + response.data[i].rating);
            gifDiv.append(gif, rating);
            $("#gifs").prepend(gifDiv);
        }
    })
})


// On click event to change the state of the gif to active, then set the state so if it's clicked again/tested again it will change its state to the other state.
$("#gifs").on("click", ".gif", function () {
    var youClicked = $(this);
    var clickedState = youClicked.attr("data-state");
    if (clickedState == "still") {
        youClicked.attr("src", youClicked.attr("data-animate"));
        youClicked.attr("data-state", "animate");
    } else {
        youClicked.attr("src", youClicked.attr("data-still"));
        youClicked.attr("data-state", "still");
    }
})

// On click for submit button to ignore the auto response and call renderButtons()
$("#add-game").on("click", function (event) {
    event.preventDefault();
    var gameInput = $("#game-input").val().trim();
    games.push(gameInput);
    renderButtons(games);
})