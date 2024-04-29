//configuração de função
  function setup() {
  createCanvas(400, 400);
  background("pink");
}

//função de desenho
function draw() {
  stroke ("purple")
  fill("blue")
  
  if (mouseIsPressed){
    rect (mouseX, mouseY, 20, 20);
  }
}  