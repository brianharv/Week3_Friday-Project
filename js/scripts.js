//Business Logic
function roboTalk(number) {
  let roboArray = [];
  for (let i = 0; i <= number; i++) {
    roboArray.push(i);
    //alert("working");
  let digit = roboArray[i];
  if (digit === 1) {
      roboArray.splice(i, 1, "Beep!");
    } else if (digit === 2) {
      roboArray.splice(i, 1, "Boop!");
    } else if (digit === 3) {
      roboArray.splice(i, 1, "Won't you be my neighbor?");
    }
   // alert("stillworking");
  } 
  return roboArray.join();
} 


//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("input#userInput").val());

    $(".form-output").text(roboTalk(userInput));
  });
});