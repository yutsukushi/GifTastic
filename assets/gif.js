

// // button click function here

var starWarsChar = $(this).attr("starWarsChar"); //when specific button is clicked, the function will run on that specific button.

var topics = ["Darth Vader", "Chewbacca", "Yoda", "Kylo Ren", "Darth Maul", "Princess Leia", "Obi-Wan Kenobi", "Luke Skywalker", "Han Solo", "Death Trooper"];

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=QglVYj0PZgIqAiVv9pVoi60ji9n617ui&q=" + starWarsChar + "&limit=10&rating=G";

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {

    var gifResults = response.data;

    for (var i = 0; i < topics.length; i++) { //Your app should take the topics in this array and create buttons in your HTML.

        gifBtn = $('<button type="button" class="btn btn-primary starWarsChar="' + topics[i] + '">' + topics[i] + '</button>'); //dynamically creates a button for each string in arr.
        
        $("#gif-buttons").append(gifBtn); //displays the buttons to the gif-buttons ID

    $("#gif-buttons").on("click", gifBtn , function(){

        console.log("it work");
        
        for (var j = 0; j < gifResults.length; j++) {
        
        var p = $("<p>").text("Rating: " + gifRatings); //creates p tag and applies text displaying the gif rating
        
        var gifDiv = $("<div>"); //creates div tag
        var gifRatings = gifResults[j].rating; //JSON dot notation for the gif ratings
        var gifImage = $("<img>"); //creates img tag
    
        gifImage.attr("src", gifResults[j].images.fixed_height.url); //applies src attribute to img tag with the JSON dot notation
        
        gifDiv.append(p); //appends the p variable value to div tag
        gifDiv.append(gifImage); //appends img tag w src attribute to div tag
          
        $("#load-gifs-here").prepend(gifDiv); //prepends each gif to the load-gifs-here ID

        }
    })

}
//     function gifBehavior() { // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

//     }

//     function userInput() { // Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

//     }

});





