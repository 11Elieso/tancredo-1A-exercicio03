let cor;
let posicaoHorizontal;
let posicaoVertical;
let posicaoHorizontal2;
let posicaoVertical2;
let circuloX //horizontal 
let circuloY //vertical

function setup() {
  
  
  createCanvas(600,600);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255))
posicaoHorizontal = 0;
posicaoVertical = random(height);

posicaoHorizontal2 = 0;
posicaoVertical2 = random(height);

  
}

function draw() {
  stroke(cor);
  fill(cor)

  circle(posicaoHorizontal, posicaoVertical, 50);
circle(posicaoHorizontal2, posicaoVertical2, 50);
  
posicaoHorizontal+= random(1, 4);
posicaoVertical+= random(-3, 3);
  
posicaoHorizontal2+= random(1, 4);
posicaoVertical2+= random(-3, 3);
 
  
  
  
  if(mouseIsPressed) {
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  
  }
  
    
  }
  
