// system2
//  onclick with function
function makeYellowGreen() {
  document.body.style.backgroundColor = "yellowgreen";
}

// system3
// onclick with function by getting element by id in js
const makeCadetBlueButton = document.getElementById("make-cadetblue");

makeCadetBlueButton.onclick = makeCadetBlue;//can't use makeCadetBlue(). be careful. because it will assign function value on loading web page

function makeCadetBlue() {
  document.body.style.backgroundColor = "cadetblue";
}

//   system3 another
const purpleButton = document.getElementById("make-purple");

purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
