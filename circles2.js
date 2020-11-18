function setup() { createCanvas(720, 400);}
 function draw() {
  background(mouseX,mouseY,0);
drawJaiVeer(width * 0.25, height * 0.4, 200, 4);
drawJaiVeer(width * 0.5, height * 0.5, 300, 10);
drawJaiVeer(width * 0.75, height * 0.3, 120, 6);
}
function drawJaiVeer(xloc, yloc, size, num) {
   fill(mouseX/2,mouseY/2,0) 
  const grayvalues = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    fill(i * grayvalues);
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
}} 
