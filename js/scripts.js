//Business Logic
function roboTalk(number) {
  let roboArray = [];
  for (let i = 0; i <= number; i++) {
    roboArray.push(i);
    if (roboArray.includes(1)) {
      roboArray.splice(i, 1, "Beep!");
    } else if (roboArray.includes(2)) {
      roboArray.splice(i, 1, "Boop!");
    } else if (roboArray.includes(3)) {
      roboArray.splice(i, 1, "Won't you be my neighbor?");
    }
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

