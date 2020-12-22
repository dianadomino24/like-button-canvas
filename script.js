var weCanDraw = false;
var isClicked = false;
var button = document.getElementsByTagName('button')[0];

button.onclick = function() {
  if (isClicked) {
    button.classList = '';
    isClicked = false;
    weCanDraw = false;
  } else {
    button.classList.add('clicked');
    isClicked = true;
    weCanDraw = true;
  }
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  textSize(74);

  if (weCanDraw) {
    text('🖤', mouseX, mouseY);
  }
}
