const isDebugSession = false; // used when we want to render differently the prints, activating console.logs for example for debugging session

// Method $.ajax() from JQuery
$(document).ready(function () {
  // request conf
  $.ajax({
    // API URL request
    url: "https://api.chucknorris.io/jokes/random",

    // Method type of the request
    method: "GET",

    // Response format required
    dataType: "json",
  })

    // If request work then the code below will run - the server response is given to the done() as an object

    .done(function (response) {
      //const donnees = response.value
      addNewPost(response, "api");
    })

    // In case the request fail - The error is passed to fail()
    // we can print the error details from the request
    .fail(function (error) {
      let errorString =
        "Something went wrong, request fail." +
        "\n\nStatus Error: " +
        error.responseJSON.status +
        "\nError type: " +
        error.responseJSON.error +
        "\nDetails: " +
        error.responseJSON.message;
      if (isDebugSession === true) {
        alert(errorString);
      } else {
        $("#chuckFeed").append(errorString);
      }
    })

    // Code to execute even if the request fail or no
    .always(function () {
      if (isDebugSession === true) {
        console.log("Request made");
      } else {
        $("#requestAction").append("API query made");
      }
    });
});

const element = document.getElementById("addJokeBtn");
element.addEventListener("click", function () {
  const textarea = document.getElementById("newPostContent").value;
  const objectValue = { value: textarea };
  addNewPost(objectValue, "client");
});

function addNewPost(content, type) {
  const onlyValue = content.value; // grab only the value from the response object
  const divChuck = document.createElement("div"); // Create new div element nested on section element
  const h2Chuck = document.createElement("h2"); // Create new h2 element nested on section div element
  const paragrahChuck = document.createElement("p"); // Create new p element nested on section div

  divChuck.appendChild(h2Chuck); // Add the new h2 into body main section div
  h2Chuck.innerText = "Chuck Norris Joke Feed";

  divChuck.append(paragrahChuck); // Append p to body main section div
  paragrahChuck.innerText = onlyValue;

  //Si appel client(navigateur) FAIRE
  if (type === "client") {
    sectionChuck = document.getElementById("newChuckJokeSection"); // Select section element
    sectionChuck.prepend(divChuck); // Add the new div into body main section

    // Si appel API alors FAIRE
  } else if (type === "api") {
    sectionChuck = document.getElementById("chuckFeedSection"); // Create new section element
    sectionChuck.appendChild(divChuck); // Add the new div into body main section
  }
}
