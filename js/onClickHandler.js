// system2
//  onclick with function
function makeYellowGreen() {
  document.body.style.backgroundColor = "yellowgreen";
}

// system3
// onclick with function by getting element by id in js
const makeCadetBlueButton = document.getElementById("make-cadetblue");

makeCadetBlueButton.onclick = makeCadetBlue;

function makeCadetBlue() {
  document.body.style.backgroundColor = "cadetblue";
}

//   system3 another
const purpleButton = document.getElementById("make-purple");

purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
