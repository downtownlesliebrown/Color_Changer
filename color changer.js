var colorButtons = [];
var currentColor;

colorButtons = ['green','red','yellow'];

var availableColors = [
'Tomato',
'Turquoise',
'Violet',
'Wheat',
'White'];

buttonContainer = document.getElementById('color-buttons');

init();

function init() {

  buttonContainer.innerHTML = '';

  for(var i = 0; i < colorButtons.length; i++) {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = colorButtons[i];
    btn.setAttribute('onclick','changeColor(\''+colorButtons[i]+'\')');
    buttonContainer.appendChild(btn);
  }
}



var select = document.getElementById("new-color");

for(var i = 0; i < availableColors.length; i++){
  var color = availableColors[i];
  var optionE1 = (document.createElement)("option");
  optionE1.textContent = color;
  optionE1.value = color;
  select.appendChild(optionE1);
}

function changeColor(color) {
  document.body.style.backgroundColor = color;
  currentColor = color;
}

function addNew() {
  var newColor = document.getElementById('new-color').value;
  colorButtons.push(newColor);
  init();
}

function removeColor() {
  var index = colorButtons.indexOf(currentColor);
  colorButtons.splice(index, 1);

  var buttons = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < buttons.length; i++) {
    if(buttons[i].innerHTML == currentColor) {
      buttons[i].parentNode.removeChild(buttons[i]);
    }
  }
}
