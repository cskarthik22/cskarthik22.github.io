let values = [];
let i=0;

function setup() {
  //fullscreen(P2D)
  createCanvas(800, 500);

  for(let i=0; i<width; i++) {
    values[i] = random(height);
  }
 
}

function draw() {
background(0);
  
  if( i < values.length) {
    for(j=0; j<values.length-1-i; j++) {
       if(values[j-1] > values[j]) {
        let temp= values[j-1];
        values[j-1]=values[j];
        values[j] = temp;
      }
    }
    i++
  } else {
    console.log("i = " + i)
    noLoop();
    i=0;
    
  }
  for(let i=0; i<values.length; i++){
    stroke(255)
    line(i,height,i, height-values[i]);
  }
}
