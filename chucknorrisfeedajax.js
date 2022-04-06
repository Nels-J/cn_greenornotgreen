const isDebugSession=true; // used when we want to render differently the prints, activating console.logs for example for debugging session 

// Method $.ajax() and JQuery
$(document).ready(function(){
    
    // request conf
    $.ajax({
    
        // API URL request
        url: "https://api.chucknorris.io/jokes/random",

        // Method type of the request
        method: "GET",

        // Response format required
        dataType : "json",
    })

    // If request work then the code below will run - the server response is given to the done() as an object
    
        /* for testing purpose the response can be converted as JSON string with stringify method then inserted into the html document.
        
            .done(function(response){
                let data = JSON.stringify(response);
                $("div#res").append(data);
            })
    */
    
    .done(function(response){

        let onlyValue = response.value; // only one value requested
        const sectChuck = document.querySelector('section');
        const paragrahChuck = document.createElement('p');
        paragrahChuck.textContent = onlyValue;
        sectChuck.appendChild(paragrahChuck);

        //$("#chuckFeed").append(onlyValue);

    })

    // In case the request fail - The error is passed to fail()
    // we can print the error details from the request
    .fail(function(error){
        let errorString = "Something went wrong, request fail." + "\n\nStatus Error: " + error.responseJSON.status + "\nError type: "+ error.responseJSON.error + "\nDetails: " + error.responseJSON.message
        if (isDebugSession===true){
            alert(errorString);
        } else {
            $("#chuckFeed").append(errorString);
        }
    })

    // Code to execute even if the request fail or no
    .always(function(){
        if (isDebugSession===true){
            console.log("Request made");
        } else {
            $("#requestAction").append("API query made");
        }
    })
});

// Method $.get() from ajax and jQuery
// $(document).ready(function() { 
    
//        // GET from the url api then store the request answer on the response object
//       $.get("https://api.chucknorris.io/jokes/random", function(response){ 
               
//           // store from the object only the content of the value key in the variable
//           let onlyValue = response.value; // the dot mean in that object I wan't that content
        
//           //
//           ($("#chuckFeed").text(onlyValue)); // set the text content
        
//     })
// });
