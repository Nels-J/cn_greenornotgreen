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
      const onlyValue = response.value; // grab only the value from the response object

      const sectionChuck = document.createElement("section"); // Create new section element
      document.querySelector("main").append(sectionChuck); // Add the new section into body main of html document

      const divChuck = document.createElement("div"); // Create new div element nested on section element
      sectionChuck.appendChild(divChuck); // Add the new div into body main section

      const h2Chuck = document.createElement("h2"); // Create new h2 element nested on section div element
      h2Chuck.innerText = "Chuck Norris Joke Feed";
      divChuck.appendChild(h2Chuck); // Add the new h2 into body main section div

      const paragrahChuck = document.createElement("p"); // Create new p element nested on section div
      paragrahChuck.innerText = onlyValue;
      divChuck.append(paragrahChuck); // Append p to body main section div
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

function addNewPost(){
    
    const textarea = document.getElementById("newPostContent")
    const onlyValue=textarea.value; // Récupère la saisie

    const sectionChuck = document.createElement("section"); // Create new section element
    document.querySelector("main").append(sectionChuck); // Add the new section into body main of html document
    
    const divChuck = document.createElement("div"); // Create new div element nested on section element
    sectionChuck.appendChild(divChuck); // Add the new div into body main section
    
    const h2Chuck = document.createElement("h2"); // Create new h2 element nested on section div element
    h2Chuck.innerText = "Chuck Norris Joke Feed";
    divChuck.appendChild(h2Chuck); // Add the new h2 into body main section div

    const paragrahChuck = document.createElement("p"); // Create new p element nested on section div
    paragrahChuck.innerText = onlyValue;
    divChuck.append(paragrahChuck); // Append p to body main section div
  
  }