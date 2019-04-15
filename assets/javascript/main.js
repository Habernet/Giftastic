// Array of strings based on topics
topics = [
    "Halo", "Fortnite", "PUBG", "Apex Legends", "Call of Duty"
]

// Loop through the array to create buttons based on each
var renderButtons = function (topics) {
    $("#buttons").empty();
    for (let i = 0; i < topics.length; i++) {
        var button = $("<button>").text(topics[i]);
        button.attr("data-name", topics[i]).addClass("btn btn-primary");
        $("#buttons").append(button);
    }
}
renderButtons(topics);

// ON click event for any of the buttons that have been rendered: 
$(".btn").on("click", function () {
    //Build the queryURL based on the button clicked
    var searchFor = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchFor + "&limit=10" + "&api_key=F0y8OeTPpYSZkVLz2fLvNXdxqtpfpPSp";

    //Ajax to call the Giphy API with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // Place ten gifs on the page...not moving...will define on click events for them
    })

})



// On click event to change the state of the gif to active, then set the state so if it's clicked again/tested again it will change its state to the other state.
