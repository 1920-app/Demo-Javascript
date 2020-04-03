function elementMouseOver(element) {
 element.style.color = getRandomColor();
}

function elementFocus(element) {
  element.value += "Bonjour ! ";
}

function elementClick(element) {
  alert(element.innerHTML);
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
