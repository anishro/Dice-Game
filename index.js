function DiceWinner() {
  var dicenumber1 = Math.floor(Math.random() * 6 + 1);
  console.log(dicenumber1);
  const img1 = document.querySelectorAll("img")[0];
  img1.setAttribute("src", "images/dice" + dicenumber1 + ".png");

  var dicenumber2 = Math.floor(Math.random() * 6 + 1);
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", "images/dice" + dicenumber2 + ".png");

  if (dicenumber1 > dicenumber2) {
    document.querySelector("h1").innerHTML = "🎉 PLayer 1 Wins";
  } else if (dicenumber1 < dicenumber2) {
    document.querySelector("h1").innerHTML = "PLayer 2 Wins 🥳";
  } else if (dicenumber1 === dicenumber2) {
    document.querySelector("h1").innerHTML = "😶 Draw 😶";
  }
}
