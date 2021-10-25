var trex, trexCorrendo;

function preload(){
  trexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //criando um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("correndo",trexCorrendo);
  trex.scale = 0.5;
  borda = createEdgeSprites();

  console.log("T-rex Corredor");
}

function draw(){
  //define a cor do fundo para branco
  background("white");
  //trex pula quando a tecla espaço é pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //sistema de gravidade
  trex.velocityY = trex.velocityY + 1;
  //impede que o trex caia
  trex.collide(borda[3]);

  //console.log(trex.y);

  drawSprites();
}
