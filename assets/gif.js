
var topics = ["Darth Vader", "Chewbacca", "Yoda", "Kylo Ren", "Darth Maul", "Princess Leia", "Obi-Wan Kenobi", "Luke Skywalker", "Han Solo", "Death Trooper", "Clone Commando"];

var apiKey = "QglVYj0PZgIqAiVv9pVoi60ji9n617ui";

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=star+wars&limit=10&rating=G";

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {

    var gifResults = response.data.url;
    var gifRatings = response.data.rating;

    for (var i = 0; i < topics.length; i++) { //Your app should take the topics in this array and create buttons in your HTML.

        var gifBtn = $('<button type="button" class="btn btn-primary" id="' + topics[i] + '">' + topics[i] + '</button>'); // Try using a loop that appends a button for each string in the array.

        gifBtn.on("click", ); //need to add an on.click for dynamically created buttons
        
        $("#gif-buttons").append(gifBtn);
        
    }

    function gifClickHandler() { // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
    // Under every gif, display its rating (PG, G, so on).
    //    * This data is provided by the GIPHY API.
    //    * Only once you get images displaying with button presses should you move on to the next step.

    }

    function gifBehavior() { // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

    }

    function userInput() { // Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

    }

});






