//Business Logic

function roboTalk(number) {
  const numberValue = number.val();
  let roboArray = [];
  for (let index = 0; index <= numberValue -1; index++) {
    roboArray.push(index);
    
    
  }
}


//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("input#userInput").val());

    $(".form-output").text(userInput);
   // $(".form-output").text(roboTalk(userInput));
  });
});