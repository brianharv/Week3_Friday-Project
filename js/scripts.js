//Business Logic

function roboTalk(number) {
  let roboArray = [];
  for (let index = 0; index < number; index +=1) {
    console.log("working");
    roboArray.push();
    
  }
}


//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#userInput").val());
    $(".form-output").text(number);
  });
});