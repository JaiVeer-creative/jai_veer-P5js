var radius = 40; 
var x = 40; 
 var y=40
var speed = 5;
var direction = 1;

function setup() {
  createCanvas(400, 800); 
  ellipseMode(RADIUS);
}


function draw() {
  
background(0); 
x = x + speed * direction;
  
print(x) 
  
//if  (x > width-radius) {
//  
//x= radius
//}
  if (x > width){
  x=40
  }
  y=y+5
circle(x,y,radius)
if ( (x > width-radius) || (x < radius) ) {
direction = -1 * direction;
}
}
function draw() {
  
background(0); 
x = x + speed * direction;
  
print(x) 
  
//if  (x > width-radius) {
//  
//x= radius
//}
  if (x > width){
  x=40
  }
  y=y+5
circle(x,y,radius)
if ( (x > width-radius) || (x < radius) ) {
direction = -1 * direction;

}
