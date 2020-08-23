//Business Logic
function roboTalk(number) {
  const one = [1, 10, 14, 15, 16, 17, 18, 19,];
  const two = [2, 12, 22, 24, 25, 26, 27, 28, 29,]
  const three = [3, 13, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
  let array = [];
  for (let index = 0; index <=number; index++) {
    array.push(index).toString();
  }
  array;
  let roboArray = [];
  array.forEach(function(element) {
    if (one.includes(element)) {
      roboArray.push("beep!");
    } else if (two.includes(element)) {
      roboArray.push("boop!");
    } else if (three.includes(element)) {
      roboArray.push("Won't you be my neighbor?");
    } else {
      roboArray.push(element);
    }
  });
  return roboArray;
}

  

//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userInput = parseInt($("input#userInput").val());

    $(".form-output").text(roboTalk(userInput));
  });
});

/*
  const ones = [1, 10, 14];
  let array = [];
  for (let index = 0; index <= number; index++) {
    array.push(index).toString();
    //alert(array);

    if (array.includes(ones)) {
      array.splice(index, 1, "Beep!");
    } else if (array.includes(2)) {
      array.splice(index, 1, "Boop!");
    } else if (array.includes(3)) {
      array.splice(index, 1, "Won't you be my neighbor?");
    }
  }
  return array.join();
}  


    roboArray.push(index).toString();
    if (roboArray.includes(1)) {
      roboArray.splice(index, 1, "Beep!");
    } else if (roboArray.includes(2)) {
      roboArray.splice(index, 1, "Boop!");
    } else if (roboArray.includes(3)) {
      roboArray.splice(index, 1, "Won't you be my neighbor?");
    }
  } 
  return roboArray.join();
}

  */