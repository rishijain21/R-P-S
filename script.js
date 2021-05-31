function rpsGame(yourchoice) {
  console.log(yourchoice);

  let humanChoice, botchoice;

  humanChoice = yourchoice.id;

  botchoice = numTochoice(randTorpsInt());
  console.log("computer choice", botchoice);

  results = decideWinner(humanChoice, botchoice);

  console.log(results);

  message = finialMessage(results);

  console.log(message);

  rpsfrountend(yourchoice.id, botchoice, message);
}

function randTorpsInt() {
  return Math.floor(Math.random() * 3);
}

function numTochoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourchoice, computerChoice) {
  let rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  let yourScore = rpsDatabase[yourchoice][computerChoice];
  let computerScore = rpsDatabase[computerChoice][yourchoice];

  return [yourScore, computerScore];
}

function finialMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You lost!!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied", color: "yellow" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}

function rpsfrountend(humanimgchoice, botImgChoice, finialMessage) {
  let imagesdatabase = {
    rock: (document.getElementById("rock").scr = "Stone.png"),
    paper: (document.getElementById("paper").scr = "paper.jpg"),
    scissors: (document.getElementById("scissors").scr = "sessiors.png"),
  };

  //lets remove all the images

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" + imagesdatabase[humanimgchoice] + "'height=150 width=150>";
  messageDiv.innerHTML =
    "<h1 style= color:white " +
    finialMessage["color"] +
    "; font-size: 60px; padding:30px;'>" +
    finialMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" + imagesdatabase[botImgChoice] + "'height=150 width=150>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);

  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

function reset() {
  location.reload();
}
