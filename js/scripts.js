//Business Logic



//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("input#userInput").val());
    $(".form-output").text(userInput);
  });
});