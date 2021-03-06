// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoure").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = !$(this).data("devoured");
      console.log("newEat", newEat);
  
      var newDevoureState = {
        devoured: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoureState
      }).then(
        function() {
          console.log("changed devoure to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newEat = {
        burger_name: $("#bu").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
      console.log("newEat",newEat);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newEat
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });