import { SpringNumber } from "../../shared/spring.js";
let shapeId = 0;

const spring = new SpringNumber({
  position: 0, // start position
  frequency: 4.5, // oscillations per second (approximate)
  halfLife: 0.15, // time until amplitude is halved
});

// window.mouseClicked = function () {
//   shapeId++;
//   shapeId %= 3;
// };
window.setup = function () {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
let crossSize = 0;
let growthRate = 0.2;
let stop = false;
let showSquare = true;
let showCross = false;

window.draw = function () {
  background(255);

  const sceneSize = min(width, height);
  const x = spring.position;
  const centerX = width / 2;
  const centerY = height / 2;
  const objSize = x + 25;
  const halfWidth = objSize / tan(60);
  const strokeW = 20;

  spring.step(deltaTime / 6000); // deltaTime is in milliseconds, we need it in seconds

  let r = 2;
  switch (shapeId) {
    case 0:
      if (mouseIsPressed) spring.target = 10;
      else spring.target = 400;

      if (showSquare && objSize <= 20) {
        showSquare = false;
        showCross = true;
        console.log("Changement");
        stop = true;
      }

      // Dessiner le carré
      if (showSquare) {
        fill(0);
        noStroke();
        rectMode(CENTER);
        translate(width / 2, height / 2);
        // if (mouseIsPressed) {
        //   rotate((180 * objSize) / 200);
        //   console.log(x);
        // }
        rect(0, 0, objSize + 20, objSize + 20);
      }

      //carré
      if (stop == true) {
        // if (objSize + 20 > 20) {
        fill(0);
        noStroke();
        rectMode(CENTER);
        rect(centerX, centerY, 20, 20);
        shapeId++;
        shapeId %= 4;
        console.log(shapeId);
      }
      break;

    case 1:
      fill(0);
      noStroke();
      rectMode(CENTER);
      rect(centerX, centerY, 20, 20);
      // if (mouseIsPressed)
      shapeId++;
      shapeId %= 4;
      break;

    case 2:
      crossSize += growthRate * deltaTime;

      // translate(width / 2, height / 2);
      // rotate(PI * 2, width / 2, height / 2);
      if (crossSize > 600) {
        crossSize = 600;
      }
      fill(0);
      noStroke();
      rectMode(CENTER);
      strokeWeight(strokeW);
      stroke(0);
      translate(width / 2, height / 2);
      rotate((360 * r-- * crossSize * 2) / 400);
      console.log(x);
      line(0 - crossSize / 2, 0, 0 + crossSize / 2, 0);
      line(0, 0 - crossSize / 2, 0, 0 + crossSize / 2);
      // console.log(crossSize);
      if (crossSize >= 400) {
        shapeId++;

        shapeId %= 4;
      }

      break;
    case 3:
      if (mouseIsPressed) spring.target = 10;
      else spring.target = 400;

      fill(0);
      noStroke();
      rectMode(CENTER);
      strokeWeight(strokeW);
      stroke(0);
      translate(width / 2, height / 2);
      line(0 - objSize + 200, 0, 0 + objSize - 200, 0);
      line(0, 0 - objSize + 200, 0, 0 + objSize - 200);

      break;
  }
};
