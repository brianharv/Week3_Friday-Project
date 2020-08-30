//Business Logic
function roboTalk(element) {
  let array = [];
  for (let i = 0; i <= element; i++) {
    array.push(String(i));
  }
  array;
  console.log(array);
  let roboArray = [];
  array.forEach(function(element) {
    //console.log(typeof element);
    if ([element].includes("3")) {
      roboArray.push("Won't You Be My Neighbor?");
    } else if ([element].includes("2")) {
      roboArray.push("boop!");
    } else if ([element].includes("1")) {
      roboArray.push("beep!");
    } else {
      roboArray.push(element);
    }
  });
  console.log(roboArray);
  return roboArray;
  
  
}

//

  

//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#userInput").val();
    $("#bottom").show();
    $(".form-output").text(roboTalk(userInput));
    
  });
});

/*
  const ones = [1, 10, 14];
  let array = [];
  for (let index = 0; index <= number; index++) {
    array.push(index).toString();
    //alert(array);

    if ((array[i]).includes("3")) {
      ***array[i].push***
    } else if (array.includes(2)) {
      array.splice(index, 1, "Boop!");
    } else if (array.includes(1)) {
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