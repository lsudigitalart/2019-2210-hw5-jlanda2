let x=1500,y=700;
let foreR=50, foreG=0, foreB=0;
function setup(){
 createCanvas(1500,700);
}

function draw(){
    background(0);





    //bloodlust vibe
    for(var i=0; i<=10000; i++){
     push();
     beginShape();
     stroke(random(155),random(0,20),random(0,20));
     strokeWeight(random(.01,.1));
     translate(random(0,1500),random(0,700));
     rotate(random(0,60000),[y]);
     line(0,0,0,50);
     endShape();
     pop();
 }
 
 
 
 
 
  //left Front
      for(var i=0; i<=10000; i++){
         push();
         beginShape();
         stroke(random(33,43),random(38,48),random(34,44));
         strokeWeight(random(.5,3));
         translate(random(173,445),random(233,700));
         rotate(random(0,60000),[y]);
         line(0,0,0,10);
         endShape();
         pop();
     }
  //under eave shadow left
     for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(15,5),random(15,5),random(17,7));
      strokeWeight(random(.5,3));
      translate(random(141,445),random(212,233));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  //left roof
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(45,40),random(49,44),random(42,37));
      strokeWeight(random(.5,3));
      translate(random(141,445),random(97,212));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  //top window
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(96,106),random(94,104),random(79,89));
      strokeWeight(random(.5,3));
      translate(random(304,383),random(262,381));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  //bttom window
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(34,44),random(34,44),random(26,36));
      strokeWeight(random(.5,3));
      translate(random(293,378),random(480,630));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  
  
  
  
  
  //right front
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(42,52),random(43,53),random(38,48));
      strokeWeight(random(.5,3));
      translate(random(785,1000),random(233,700));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
   //middle shadow front
   for(var i=0; i<=10000; i++){
     push();
     beginShape();
     stroke(random(15,5),random(15,5),random(17,7));
     strokeWeight(random(.5,3));
     translate(random(785,805),random(233,700));
     rotate(random(0,60000),[y]);
     line(0,0,0,10);
     endShape();
     pop();
 }
  //under eave shadow right
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(15,5),random(15,5),random(17,7));
      strokeWeight(random(.5,3));
      translate(random(785,1032),random(191,232));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  //roof
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(45,35),random(49,39),random(42,32));
      strokeWeight(random(.5,3));
      translate(random(785,1032),random(94,200));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
 //middle roofs shadow
   for(var i=0; i<=10000; i++){
     push();
     beginShape();
     stroke(random(15,5),random(15,5),random(17,7));
     strokeWeight(random(.5,3));
     translate(random(785,850),random(94,200));
     rotate(random(0,60000),[y]);
     line(0,0,0,10);
     endShape();
     pop();
 }
  //top window
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(97,107),random(98,108),random(80,90));
      strokeWeight(random(.5,3));
      translate(random(839,927),random(262,381));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  //btm window
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(52,42),random(44,34),random(33,23));
      strokeWeight(random(.5,3));
      translate(random(839,927),random(480,630));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  
  
  
  
  //middle front
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(40,50),random(41,51),random(36,46));
      strokeWeight(random(.5,3));
      translate(random(445,785),random(137,700));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  //under eave shadow center
  for(var i=0; i<=10000; i++){
  push();
  beginShape();
  stroke(random(15,5),random(15,5),random(17,7));
  strokeWeight(random(.5,3));
  translate(random(416,808),random(107,150));
  rotate(random(0,60000),[y]);
  line(0,0,0,10);
  endShape();
  pop();
  }
  //mid roof
  for(var i=0; i<=10000; i++){
  push();
  beginShape();
  stroke(random(45,55),random(49,59),random(42,52));
  strokeWeight(random(.5,3));
  translate(random(410,821),random(0,118));
  rotate(random(0,60000),[y]);
  line(0,0,0,10);
  endShape();
  pop();
  }
  //left win
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(116,106),random(114,104),random(99,89));
      strokeWeight(random(.5,3));
      translate(random(508,582),random(212,368));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
      }
  //left win
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(96,106),random(94,104),random(79,89));
      strokeWeight(random(.5,3));
      translate(random(649,723),random(212,368));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
      }
  //door
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(39,29),random(40,30),random(34,24));
      strokeWeight(random(.5,3));
      translate(random(536,693),random(434,656));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
   //door split
   for(var i=0; i<=10000; i++){
     push();
     beginShape();
     stroke(random(15,5),random(15,5),random(17,7));
     strokeWeight(random(.5,3));
     translate(random(614,615),random(434,656));
     rotate(random(0,60000),[y]);
     line(0,0,0,.001);
     endShape();
     pop();
 }
  //covershadow bottom
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(15,5),random(15,5),random(17,7));
      strokeWeight(random(.01,.5));
      rotate(.07);
      translate(random(383+90,785+60),random(381+5,422+20));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
   //cover shadow right
   for(var i=0; i<=10000; i++){
     push();
     beginShape();
     stroke(random(15,5),random(15,5),random(17,7));
     strokeWeight(random(.5,3));
     rotate(.07);
     translate(random(443,845+20),random(381,422));
     rotate(random(0,60000),[y]);
     line(0,0,0,10);
     endShape();
     pop();
 }
  //RIGHTPIL
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(60,50),random(60,50),random(55,45));
      strokeWeight(random(.5,3));
      translate(random(449,482),random(426,640));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  //leftPIL
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(60,50),random(60,50),random(55,45));
      strokeWeight(random(.5,3));
      translate(random(737,770),random(436,640));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  //cover
  for(var i=0; i<=10000; i++){
      push();
      beginShape();
      stroke(random(45,55),random(49,59),random(42,52));
      strokeWeight(random(.5,3));
      rotate(.07);
      translate(random(383+60,785+60),random(381-20,422-20));
      rotate(random(0,60000),[y]);
      line(0,0,0,10);
      endShape();
      pop();
  }
  
  
  
  //mask for house
  fill(random(0,30),random(0,10),random(0,10));
  beginShape();
  vertex(0,700);
  vertex(173,700);
  vertex(173,233);
  vertex(141,212);
  vertex(253,106);
  vertex(439,97);
  vertex(495,0);
  vertex(750,0);
  vertex(796,94);
  vertex(979,94);
  vertex(1037,200);
  vertex(1000,233);
  vertex(1000,700);
  vertex(1500,700);
  vertex(1500,0);
  vertex(0,0);
  endShape();
 
 
 
 
 
 
 
  //grass
  for(var i=0; i<=7500; i++){
      push();
      beginShape();
      stroke(random(143,153),random(127,137),random(102,112));
      strokeWeight(random(.5,1));
      translate(random(0,1500),random(640,700));
      rotate(random(0,60000),[y]);
      line(0,0,0,20);
      endShape();
      pop();
  }
  for(var i=0; i<=2500; i++){
      push();
      beginShape();
      stroke(random(123,113),random(107,97),random(82,72));
      strokeWeight(random(.5,1));
      translate(random(0,1500),random(640,700));
      rotate(random(0,60000),[y]);
      line(0,0,0,20);
      endShape();
      pop();
  }

}