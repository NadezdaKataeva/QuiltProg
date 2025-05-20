var c = document.getElementById("myCanvas"); 
var ctx = c.getContext("2d"); 
 
var cellsize=30; 


const pat1 = new Array(3,3,2);
 
ctx.beginPath(); 


// call to draw lines on canvas
drawlines()

function drawlines(){

ctx.fillStyle = "#FFFFFF";

ctx.fillRect(0, 0, 900,300);
ruler()
//draw vertical lines on canvas;
for(var j = 0; j < 900; j++) 
 {  
	ctx.moveTo(j*cellsize,0); 
	ctx.lineTo(j*cellsize, 300); 
	ctx.stroke(); 
 } 


//ctx.stroke(); 
 
//draw horisontal lines on canvas;
 
for(var j = 0; j < 300; j++) 
 {  
	ctx.moveTo(0,j*cellsize); 
	ctx.lineTo(900,j*cellsize); 
	ctx.stroke();  
 } 
 
}//draw lines 
 
function ruler() { 

	ctx.font = "18px Arial"; 

	ctx.fillStyle = "grey"; 
	ctx.fillRect(0, 0, 900, cellsize); 
	ctx.fillRect(0, cellsize,  cellsize, 600);
	ctx.fillStyle = "red"; 
	for(var j = 0; j < 30; j++) 
	 {  
		 
		if (j<9) { 
		ctx.fillText(j,j*cellsize+5,cellsize-5); 
		 } 
		else { 
		ctx.fillText(j,j*cellsize+1,cellsize-5); 
		 } 
	 } 
	for(var j = 0; j < 10; j++) 
	 { 
		if (j<9) { 
		ctx.fillText(j,5,j*cellsize+20); 
		 } 
		else { 
		ctx.fillText(j,5,j*cellsize+20); 
		 } 
	 } 
 
 
  
 };//end ruler() 


//0 means top right triangle, 1 bottom left triangle, 2 top left triangle, 3 bottom right triangle. first two are cells x and y coords 
var pat2=[
[2,2],
[0,0,2,"green"],
[0,0,3,"pink"],
[1,0,2,"brown"],
[1,0,3,"brown"],
[0,1,2,"pink"],
[0,1,3,"black"],
[1,1,2,"black"],
[1,1,3,"green"]
]
//0 means top right triangle, 1 bottom left triangle, 2 top left triangle, 3 bottom right triangle. first two are cells x and y coords 
var pat3=[
[3,3],
[0,0,0,"red"],
[0,0,1,"black"],
[1,0,0,"red"],
[1,0,1,"red"],
[2,0,0,"green"],
[2,0,1,"brown"],
[0,1,0,"black"],
[0,1,1,"black"],
[1,1,0,"pink"],
[1,1,1,"pink"],
[2,1,0,"brown"],
[2,1,1,"brown"],
[0,2,0,"green"],
[0,2,1,"brown"],
[1,2,0,"green"],
[1,2,1,"green"],
[2,2,0,"brown"],
[2,2,1,"green"]
];


//0 means top right triangle, 1 bottom left triangle, 2 top left triangle, 3 bottom right triangle. first two are cells x and y coords 
var pat6=[
[3,2],
[0,0,2,"pink"],
[0,0,3,"brown"],
[1,0,2,"brown"],
[1,0,3,"brown"],
[2,0,2,"brown"],
[2,0,3,"black"],
[0,1,0,"blue"],
[0,1,1,"pink"],
[1,1,0,"blue"],
[1,1,1,"blue"],
[2,1,0,"black"],
[2,1,1,"blue"],
];



//0 means top right triangle, 1 bottom left triangle, 2 top left triangle, 3 bottom right triangle. first two are cells x and y coords 
var pat4=[
[2,3],
[0,0,2,"green"],
[0,0,3,"red"],
[1,0,0,"green"],
[1,0,1,"brown"],
[0,1,2,"red"],
[0,1,3,"black"],
[1,1,0,"brown"],
[1,1,1,"blue"],
[0,2,1,"pink"],
[0,2,0,"black"],
[1,2,2,"black"],
[1,2,3,"pink"],
[1,2,0,"blue"],
];




var pats = [pat2, pat3, pat4, pat6];


var curr = 0;




function clearcanv(){

ctx.fillStyle = "#FFFFFF";
ctx.clearRect(0, 0, c.width, c.height);
//c.fillRect(0, 0,900,300);
drawlines();
}


function nextpat(){
curr=curr+1;
console.log("curr"+curr+", length "+pats.length);
if (curr==pats.length) { curr = 0;}

clearcanv();
DrawPttrn(0,0);
}//nextpat()





//nextpat();



console.log(pats[curr][1]);

var tst = 0;

for(let i1=0;i1<pats[curr].length;i1++)
{
	console.log(pats[curr][i1][2]);
}


for(i=0;i<pats[curr].length;i++)
{
	
//			console.log("pat1="+"i="+i+",j="+j+","+",k="+"="+pat1[i,j,k]);
			switch(""+pats[curr][i][3]) {
 				case "blue":
    					ctx.fillStyle = "blue"; 
    					break;
  				case "red":
  					ctx.fillStyle = "red"; 
 	   				break;
				case "brown":
  					ctx.fillStyle = "brown"; 
    					break;
				case "pink":
  					ctx.fillStyle = "pink"; 
    					break;
				case "green":
  					ctx.fillStyle = "green"; 
    					break;
  				default:
					ctx.fillStyle = "black"; 
  				 	break;

			}//switch
if (pats[curr][i][2]==0)
{
	console.log(pats[curr][i][2]);
	ctx.beginPath();
	ctx.moveTo((cellsize+pats[curr][i][0]*cellsize),(cellsize+pats[curr][i][1]*cellsize));
	ctx.lineTo((cellsize+pats[curr][i][0]*cellsize+cellsize),(cellsize+pats[curr][i][1]*cellsize));
	ctx.lineTo((cellsize+pats[curr][i][0]*cellsize+cellsize),(cellsize+pats[curr][i][1]*cellsize+cellsize));
	ctx.closePath();
	//ctx.stroke();
	ctx.fill();
}

if (pats[curr][i][2]==1)
{console.log("triangle"+pats[curr][i][2]);
	ctx.beginPath();
	ctx.moveTo((cellsize+pats[curr][i][0]*cellsize),(cellsize+pats[curr][i][1]*cellsize));
	ctx.lineTo((cellsize+pats[curr][i][0]*cellsize),(cellsize+pats[curr][i][1]*cellsize+cellsize));
	ctx.lineTo((cellsize+pats[curr][i][0]*cellsize+cellsize),(cellsize+pats[curr][i][1]*cellsize+cellsize));
	ctx.closePath();
	//ctx.stroke();
	ctx.fill();

}
//top left
if (pats[curr][i][2]==2)
{
	console.log(pats[curr][i][2]);
	ctx.beginPath();
	ctx.moveTo((cellsize+pats[curr][i][0]*cellsize),(cellsize+pats[curr][i][1]*cellsize));
	ctx.lineTo((cellsize+pats[curr][i][0]*cellsize+cellsize),(cellsize+pats[curr][i][1]*cellsize));
	ctx.lineTo((cellsize+pats[curr][i][0]*cellsize),(cellsize+pats[curr][i][1]*cellsize+cellsize));
	ctx.closePath();
	//ctx.stroke();
	ctx.fill();
}
//bottom right
if (pats[curr][i][2]==3)
{
	console.log(pats[curr][i][2]);
	ctx.beginPath();
	ctx.moveTo((cellsize+pats[curr][i][0]*cellsize+cellsize),(cellsize+pats[curr][i][1]*cellsize));
	ctx.lineTo((cellsize+pats[curr][i][0]*cellsize+cellsize),(cellsize+pats[curr][i][1]*cellsize+cellsize));
	ctx.lineTo((cellsize+pats[curr][i][0]*cellsize),(cellsize+pats[curr][i][1]*cellsize+cellsize));
	ctx.closePath();
	//ctx.stroke();
	ctx.fill();
}
		
}//for


guessX = 0; //stores user's click on canvas 
guessY = 0; //stores user's click on canvas 
//console.log("x coords: " + guessX + ", y coords: " + guessY); 
 
c.addEventListener('click',function(event)  { 
//console.log("x coords: " + guessX + ", y coords: " + guessY); 
//console.log("x cell coords: " + Math.floor(guessX/cellsize) + ", y cell coords: " + Math.floor(guessY/cellsize)); 
   var x = event.offsetX; 
   var y = event.offsetY; 
    guessX = x; 
    guessY = y; 
   	console.log("x coords: " + guessX + ", y coords: " + guessY); 
 
	console.log("x topleftcorner X cell coords:" +topleftcornerX(guessX,cellsize));
	console.log("x topleftcorner Y cell coords:" +topleftcornerX(guessY,cellsize));


console.log("x bottom right corner, Y bottom right corner cell coords:" +bottomrightcornerX(guessX,cellsize)+"     " +bottomrightcornerY(guessY,cellsize));


//check type of diagonal is chosen

color=document.getElementById("colors").value;
console.log("color select "+color);
switch(color) {
 	 case "blue":
    		ctx.fillStyle = "blue"; 
    		break;
  	case "red":
  		ctx.fillStyle = "red"; 
 	   	break;
	case "brown":
  		ctx.fillStyle = "brown"; 
    		break;
	case "pink":
  		ctx.fillStyle = "pink"; 
    		break;
	case "green":
  		ctx.fillStyle = "green"; 
    		break;

  	default:
		ctx.fillStyle = "black"; 
    		break;

		}



//ctx.fillRect(topleftcornerX(guessX,cellsize),topleftcornerY(guessY,cellsize),cellsize,cellsize);


//if LeftBottomTriangle(guessX,guessY,cellsize)

diagtype=document.getElementById("diagonals").value;
console.log("drag select "+diagtype);

switch (diagtype){

	case "bottomleft":
		console.log("type diag "+diagtype);
		if ((y-topleftcornerY(guessY,cellsize))    >(cellsize-(x-topleftcornerX(guessX,cellsize))))
		{

			ctx.beginPath();
			ctx.moveTo(bottomleftcornerX(guessX,cellsize),bottomleftcornerY(guessY,cellsize));
			ctx.lineTo(bottomrightcornerX(guessX,cellsize),bottomrightcornerY(guessY,cellsize));
			ctx.lineTo(toprightcornerX(guessX,cellsize),toprightcornerY(guessY,cellsize));
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();
		}

		else
		{
			ctx.beginPath();
			ctx.moveTo(bottomleftcornerX(guessX,cellsize),bottomleftcornerY(guessY,cellsize));
			ctx.lineTo(topleftcornerX(guessX,cellsize),topleftcornerY(guessY,cellsize));
			ctx.lineTo(toprightcornerX(guessX,cellsize),toprightcornerY(guessY,cellsize));
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

		}


	break;

	case "topleft":
		console.log("type diag "+diagtype);
		if ((x-topleftcornerX(guessX,cellsize))>(y-topleftcornerY(guessY,cellsize)))
		{

			ctx.beginPath();
			ctx.moveTo(topleftcornerX(guessX,cellsize),topleftcornerY(guessY,cellsize));
			ctx.lineTo(toprightcornerX(guessX,cellsize),toprightcornerY(guessY,cellsize));
			ctx.lineTo(bottomrightcornerX(guessX,cellsize),bottomrightcornerY(guessY,cellsize));
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();
		}

		else
		{
			ctx.beginPath();
			ctx.moveTo(topleftcornerX(guessX,cellsize),topleftcornerY(guessY,cellsize));
			ctx.lineTo(bottomleftcornerX(guessX,cellsize),bottomleftcornerY(guessY,cellsize));
			ctx.lineTo(bottomrightcornerX(guessX,cellsize),bottomrightcornerY(guessY,cellsize));
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();

		}

		break;
	default:
		break;

}


 }); // end event listener;




 
// The function returns x coordinate top left corner of the cell on the canvas
function topleftcornerX(x,cellsize){
	return (((x - x % cellsize) / cellsize)*cellsize);
};//topleftcornerX

// The function returns y coordinate top left corner of the cell on the canvas
function topleftcornerY(y,cellsize){
	return (((y - y % cellsize) / cellsize)*cellsize);
};//topleftcornerY

// The function returns x coordinate top right corner of the cell on the canvas
function toprightcornerX(x,cellsize){
	return (((x - x % cellsize) / cellsize)*cellsize+cellsize);
};//toprightcornerX

// The function returns y coordinate top right corner of the cell on the canvas
function toprightcornerY(y,cellsize){
	return (((y - y % cellsize) / cellsize)*cellsize);
};//toprightcornerY
// The function returns x coordinate bottom right corner of the cell on the canvas
function bottomrightcornerX(x,cellsize){
	return (((x - x % cellsize) / cellsize)*cellsize+cellsize);
};//bottomrightcornerX
// The function returns y coordinate bottom right corner of the cell on the canvas
function bottomrightcornerY(y,cellsize){
	return (((y - y % cellsize) / cellsize)*cellsize+cellsize);
};//bottomrightcornerY

function bottomleftcornerX(x,cellsize){
	return (((x - x % cellsize) / cellsize)*cellsize);
};//bottomrightcornerX
// The function returns y coordinate bottom right corner of the cell on the canvas
function bottomleftcornerY(y,cellsize){
	return (((y - y % cellsize) / cellsize)*cellsize+cellsize);
};//bottomrightcornerY



//The function returns true if the coordinate in the bottom left triangle of the cell
//Diagonal line goes from top left corner to bottom right corner, the equity x=y;
// coordinates in left bottom triangle x-topleftcornerX<y-topleftcornerY 


function LeftBottomTriangle(x,y,cellsize)
{
return true;
//	if (x-topleftcornerX(x,cellsize))<topleftcornerY(y,cellsize)	
	//	{return true}
//	else
	//	{return false}
};





//Sergeys save canvas function

document.getElementById("save").addEventListener('click', function() {
//  var cf = document.getElementById("myCanvas"); 
  console.log("Saving…");
  var link = document.getElementById('link');
  link.setAttribute('download', document.getElementById("fname").value+'.png');
  link.setAttribute('href', c.toDataURL("image/png"));//.replace("image/png", "image/octet-stream"));
  link.click();
});


function DrawPttrn(ofx,ofy){
console.log(pats[curr][0][0]+"x"+pats[curr][0][1]);
	for(i=1;i<pats[curr].length;i++)
	{
	
//			console.log("pat1="+"i="+i+",j="+j+","+",k="+"="+pat1[i,j,k]);
		switch(""+pats[curr][i][3]) {
 		case "blue":
    			ctx.fillStyle = "blue"; 
    			break;
  		case "red":
  			ctx.fillStyle = "red"; 
 	   		break;
		case "brown":
  			ctx.fillStyle = "brown"; 
    			break;
		case "pink":
  			ctx.fillStyle = "pink"; 
    			break;
		case "green":
  			ctx.fillStyle = "green"; 
    			break;

  		default:

			ctx.fillStyle = "black"; 
   			break;
		}//switch
		if (pats[curr][i][2]==0)
			{
				console.log(pats[curr][i][2]);
				ctx.beginPath();
				ctx.moveTo((ofx+cellsize+pats[curr][i][0]*cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize));
				ctx.lineTo((ofx+cellsize+pats[curr][i][0]*cellsize+cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize));
				ctx.lineTo((ofx+cellsize+pats[curr][i][0]*cellsize+cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize+cellsize));
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();
			}

		if (pats[curr][i][2]==1)
			{
				console.log("triangle"+pats[curr][i][2]);
				ctx.beginPath();
				ctx.moveTo((ofx+cellsize+pats[curr][i][0]*cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize));
				ctx.lineTo((ofx+cellsize+pats[curr][i][0]*cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize+cellsize));
				ctx.lineTo((ofx+cellsize+pats[curr][i][0]*cellsize+cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize+cellsize));
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();
	
			}
//top left
		if (pats[curr][i][2]==2)
			{
				console.log(pats[curr][i][2]);
				ctx.beginPath();
				ctx.moveTo((ofx+cellsize+pats[curr][i][0]*cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize));
				ctx.lineTo((ofx+cellsize+pats[curr][i][0]*cellsize+cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize));
				ctx.lineTo((ofx+cellsize+pats[curr][i][0]*cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize+cellsize));
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
			}
//bottom right
		if (pats[curr][i][2]==3)
			{
				console.log(pats[curr][i][2]);
				ctx.beginPath();
				ctx.moveTo((ofx+cellsize+pats[curr][i][0]*cellsize+cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize));
				ctx.lineTo((ofx+cellsize+pats[curr][i][0]*cellsize+cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize+cellsize));
				ctx.lineTo((ofx+cellsize+pats[curr][i][0]*cellsize),(ofy+cellsize+pats[curr][i][1]*cellsize+cellsize));
				ctx.closePath();
				//ctx.stroke();
				ctx.fill();
			}
		
}//endfor

};//DrawPttrn


//function to repeat existing pattern 9times on x and 3 times on y
function repeat(){
	var r1,r2;
		for(r1=0;r1<9;r1++){
			for(r2=0;r2<3;r2++){
			DrawPttrn(cellsize*r1*pats[curr][0][0],cellsize*r2*pats[curr][0][1]);
				
			}

		}//for r1



}//repeat

function NewPattern(){


ltcx=document.getElementById("LeftTopCoordx").value;
console.log("LeftTopCoordx "+ltcx);
ltcy=document.getElementById("LeftTopCoordy").value;
console.log("LeftTopCoordy"+ltcy);
rbcx=document.getElementById("RightBottomCoordx").value;
console.log("RightBottomCoordx"+rbcx);
rbcy=document.getElementById("RightBottomCoordy").value;
console.log("RightBottomCoordxy"+rbcy);

stepx=rbcx;
stepy=rbcy;

//var ctx = canvas.getContext("2d");
var saved_rect = ctx.getImageData(ltcx*cellsize, ltcy*cellsize, rbcx*cellsize,rbcy*cellsize);
// highlight the image part ...

// restore the altered part
//ctx.putImageData(saved_rect, cellsize*5, cellsize*5);
for(m=0;m<4;m++){
for (k=0;k<6;k++){


ctx.putImageData(saved_rect, stepx*cellsize*k+cellsize, stepy*cellsize*m+cellsize);
}
}

}
