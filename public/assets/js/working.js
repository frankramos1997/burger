
    $(".create-form").on("click", function(event) {
        event.preventDefault();
    
    
        var newBurger = {
          burger_name: $("#ca").val().trim(),
          devoured: 0
          
        };
    
  
     
  
        // // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
          location.reload();
          }
        );
  
  
  
      });
    
      $(".burgbtn").on("click", function(event ){
        var id = $(this).data("id");
        console.log(+id);
  
  
      
  
      var newburgerState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newburgerState
      }).then(
        function() {
          console.log("changed burger to", newburgerState);
          // Reload the page to get the updated list
          location.reload();
        });
      });