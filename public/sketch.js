
let c;
let paint;
function setup()
{
	this.c=createCanvas(400, 400);
	background(0);
	refreshbutton = createButton('refresh');
  	refreshbutton.position(100, 550);
  	refreshbutton.mousePressed(buttonClicked);
  	savebutton = createButton('predict');
  	savebutton.position(400,550);
  	savebutton.mousePressed(saveImage);
  	//saveCanvas('myCanvas', 'png');
}

function draw(){
	strokeWeight(10);
	cursor(HAND);
	stroke(255);
	if(mouseIsPressed){
		line(pmouseX,pmouseY,mouseX,mouseY);
	}
}

function saveImage(){
//	console.log("hi");
  paint=get(0,0,this.height-1,this.width-1);
  console.log(paint);
}

function buttonClicked(){
	background(0)
}


