//Business Logic
function roboTalk(number) {
  let roboArray = [];
  for (let index = 0; index <= number; index++) {
    //roboArray.push(index);
    alert("working");
    let digit = roboArray[index];
    if (digit === 1) {
      roboArray.replace("Beep!");
    } else if (digit === 2) {
      roboArray.replace("Boop!");
    } else if (digit === 3) {
      roboArray.replace("Won't you be my neighbor?");
    }
    alert("stillworking");
  } 
  return roboArray.push();
} 


//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("input#userInput").val());

    $(".form-output").text(roboTalk(userInput));
  });
});