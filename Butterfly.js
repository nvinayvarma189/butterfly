
var yoff=0;
var q=1;
var z=1;
function setup(){
		createCanvas(displayWidth,displayHeight/2);
		frameRate(15);
		
}
function draw(){
	translate(width/4,height/2);
	if(q==z){
		var a=random(0,255);
		var b=random(0,255);
		var c=random(0,255);
		z=z+90;
	}
	q++;
	rotate(PI/2);
	background(0);
	stroke(225);
	strokeWeight(3);
	beginShape();
	var xoff =0;
	dx=0.02;
	for(var l=0;l<10;l++)
	{
		for(var a=-PI/2;a<PI/2;a+=PI/100){
		var n=noise(xoff,yoff);
		var r=sin(a*2)*map(n,0,1,100,300);
		var x= r*cos(a);
		var y=sin(yoff)*r*sin(a);
		xoff+=dx;
		vertex(x,y);
	
	}fill(a,b,c,1000);
	for(var a=PI/2;a<= (3*PI)/2;a+=PI/100){
		var n=noise(xoff,yoff);
		var r=sin(a*2)*map(n,0,1,100,300);
		var x= r*cos(a);
		var y= sin(yoff)*r*sin(a);
		xoff-=dx;
		vertex(x,y);
	
	}
	}
	endShape();
yoff+=0.07;
q++;

}
