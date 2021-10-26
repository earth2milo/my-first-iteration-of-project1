// My Moon and one of the main sources of light for the composition
function moon(glowRangeY, glowFill, glowAlpha) {


  map(glowFill, 255, 0, mouseY);
  map(glowAlpha, 255, 0, mouseY);
  glowRangeY++;
  glowFill++;
  glowAlpha++;
  ellipseMode(CENTER);
  stroke(120);
  fill(255, 190);
  ellipse(500, 0, 450, 450); // Second stroke
  fill(230, 190);
  ellipse(375, 80, 67, 68);
  ellipse(500, 0, 400, 400); // Inner stroke




  fill(glowFill, glowAlpha);
  noStroke();
  map(mouseX, 1200, 0, 350);
  ellipse(500, glowRangeY, mouseX, mouseY); // Emiting Light from Moon
  strokeWeight(1);
  stroke(glowFill, glowAlpha);
  ellipse(375, 80, 67, 68); // moon cheese holes
  ellipse(475, 95, 30, 47); // ^
  ellipse(575, 120, 45, 78); // ^
  fill(255,20);
  strokeWeight(2.2);
  stroke(0,8);
 for (let lineDetailX = 250; lineDetailX<375; lineDetailX= lineDetailX+80.2) {
    for (let lineDetailY = 0; lineDetailY<100; lineDetailY= lineDetailY+77) {
      for (let lineDetailX2 = 375; lineDetailX2<680; lineDetailX2=lineDetailX2+30) {
        for (let lineDetailY2 = 125; lineDetailY2<230; lineDetailY2=lineDetailY2+90) {
line(lineDetailX, lineDetailY, lineDetailX2, lineDetailY2); // Detailing
        }
      }
    }
  }
}
