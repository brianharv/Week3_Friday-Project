//Business Logic

function roboTalk(number) {
  let roboArray = []; //Need number to equal length of array
  for (let index = 0; index <= number; index++) {
    //roboArray.push(index);
    let digit = roboArray[index];
    if (digit === 1) {
      roboArray.replace("Beep!");
    }
    )
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