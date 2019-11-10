function setup()
{
	createCanvas(400, 400);
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
/*	console.log("hi");
	var imageData = this.drawingContext.getImageData(0,0,width,height);
	var data = imageData.data;
    var pixels = [];

    for (var i = 0; i < data.length; i += 4) {
      pixels.push(data[i], data[i+1], data[i+2], data[i+3]);
    }
    return pixels;
    */
    background(255,0,0);
}

function buttonClicked(){
	background(0)
}


