var c = document.getElementById("myCanvas"); 
var ctx = c.getContext("2d"); 
 
var cellsize=30; 
console.log("cellsize before = ", cellsize);

//var cellsize=30; 
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





// save canvas function

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

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
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
function stitchPattern(){
	ltcx=document.getElementById("LeftTopCoordx").value;
console.log("--LeftTopCoordx "+ltcx);
ltcy=document.getElementById("LeftTopCoordy").value;
console.log("--LeftTopCoordy"+ltcy);
rbcx=document.getElementById("RightBottomCoordx").value;
console.log("--RightBottomCoordx"+rbcx);
rbcy=document.getElementById("RightBottomCoordy").value;
console.log("--RightBottomCoordxy"+rbcy);
//	ctx.scale(0.5, 0.5);
	var saved_rect = ctx.getImageData((ltcx)*cellsize, (ltcy)*cellsize, (rbcx-ltcx+1)*cellsize,(rbcy-ltcy+1)*cellsize);
	
//	ctx.putImageData(saved_rect,120,120);
	//console.log((ltcx-1)*cellsize,"width=", saved_rect.width, "height", saved_rect.height);
	var pixelData=saved_rect.data;
	var n=3*(rbcx-ltcx+1);
	var m=3*(rbcy-ltcy+1);
	console.log("n=",n,"m=",m);

	//console.log("saved rect", saved_rect );

	

	console.log("kx=",kx,"ky=",ky);
//color.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	var y=(rbcy-ltcy)*m;
	var x=(rbcx-ltcx)*n;


//console.log("y=",y,"x=",x);
//var canvasColor = saved_rect.getImageData(ltcx, ltcy, 1, 1).data; // rgba e [0,255]
	var kx=saved_rect.width/x;
	var ky=saved_rect.height/y;
var canvasColor = saved_rect.data;

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//const hexColor = rgbToHex(r, g, b);
//console.log(`RGB: (${r}, ${g}, ${b})`); // Output: RGB: (255, 0, 0)
//console.log(`Hex: ${hexColor}`);  

    			
				
	
				/*
	for (let i=0; i<n;i++){
		for (let j=0; j<m;j++){
			var canvasColor = saved_rect.getImageData(ltcx+i*0.1, ltcy+j*0.1, 1, 1).data; // rgba e [0,255]
    			var r = canvasColor[0];
   			 	var g = canvasColor[1];
    			var b = canvasColor[2];
				console.log("rgb="+r+g+b);
		}
	}
	*/
	function tableCreate(x,y) {
		
		const body = document.body,
			tbl = document.createElement('table');
		//tbl.style.width = '100px';
			tbl.style.border = '1px solid black';
			tbl.style.alignContent ="centre";
			tbl.style.aspectRatio = "1/1";
		//how many rows nd cells?
		
	   //console.log("width=",canvasColor.width);
	   //index=(kx/2+ky/2)*4;
	   //index=9;
	   console.log("data length", saved_rect.data.length);
	   console.log("width=",saved_rect.width,"height=",saved_rect.height);
	   var index=0;
	  
	   let k=0;
	   let l=0;
	   let f=0;
	   

		for (let i = 0; i <saved_rect.height/3; i++	) { 
		  	const tr = tbl.insertRow();
			k=0;
			var r = canvasColor[0];
   			var g = canvasColor[1];
    		var b = canvasColor[2];
			var curr_color=rgbToHex(r, g, b);
		  	for (let j = 0; j <saved_rect.width/3	;j++) {
			  const td = tr.insertCell();
			  
			 // td.appendChild(document.createTextNode(`${k}`));
			 td.appendChild(document.createTextNode(``)); 
			 td.style.border = '1px solid black';
			 td.style.aspectRatio = '1 / 1';
			  
			  if ((index+2)<saved_rect.data.length){
			  	r = canvasColor[index+0];
   			 	g = canvasColor[index+1];
    		 	b = canvasColor[index+2];
			
				td.style.backgroundColor=rgbToHex(r, g, b);


				if (((i%15)==6)&&((j%15)==4)){  f++;
					console.log("this is 6,4 in "+i+" and "+j+" f="+f+" color="+td.style.backgroundColor); }
				if (((i%15)==12)&&((j%15)==7)){  f++;
					console.log("this is 12,7 in "+i+" and "+j+" f="+f+" color="+td.style.backgroundColor);};
				if (((i%15)==8)&&((j%15)==12)){ f++;
					 console.log("this is 8,12 in "+i+" and "+j+" f="+f+" color="+td.style.backgroundColor);};
				if (((i%15)==4)&&((j%16)==8)){ f++;
					console.log("this is 4,8 in "+i+" and "+j+" f="+f+" color="+td.style.backgroundColor);};
				   

				if (td.style.backgroundColor=="black"){
					td.style.color="white";
				}
				else td.style.color="black";
				if (curr_color==rgbToHex(r, g, b)){
					k++;
					if (k<10) {td.innerText="_"+k;}
					else {td.innerText=""+k;}
				
				} 
				else
				{
					k=1;
					curr_color=rgbToHex(r,g,b);
					td.innerText="_1";
				}
			  }
			  else break;
			
			 index=(index+4)+4+4;
			// console.log(index);
			  //td.style.backgroundColor=r+ g+ b;
		  }
		  index=index+saved_rect.width*4+saved_rect.width*4;
		}

		


		body.appendChild(tbl);
// lets brush up a bit the table
const tableRows = tbl.rows; // This is an HTMLCollection

console.log("Table has"+(tableRows.length)/15+" cells wide")
const row = tableRows[0];
const rowCells = row.cells; // HTMLCollection of cells in the current row
console.log("Table has"+(rowCells.length)/15+" cells in height")

for (let i = 0; i < tableRows.length; i++) {
	const row = tableRows[i];
	const rowCells = row.cells; // HTMLCollection of cells in the current row
	//console.log("Table has"+(rowCells.length)/15+" cells in height")

	for (let j = 0; j < rowCells.length; j++) {
		const cell = rowCells[j];
		const cellContent = cell.style.backgroundColor; // Get the text content of the cell
		//if ((cellContent!="black")&&(cellContent!="pink")&&(cellContent!="red")&&(cellContent!="green")
	//	&&(cellContent!="blue")&&(cellContent!="brown")){
		// Or cell.innerHTML for HTML content
	//	console.log(` Row ${i}, Cell ${j}: ${cellContent}`);}
	switch (cellContent) {
		case "rgb(0, 0, 0)":
	//	{console.log('black=' ,cellContent)};
		break;
		case "rgb(255, 0, 0)":
	//	{console.log('red=', cellContent)};
		break;
		case "rgb(0, 0, 255)":
	//	{console.log('blue=', cellContent)};
		break;
		case "rgb(0, 128, 0)":
	//	{console.log('green=', cellContent)};
		break;
		case "rgb(165, 42, 42)":
	//	{console.log('brown=',cellContent)};
		break;
		case "rgb(255, 192, 203)":
	//	{console.log('pink=', cellContent)};
		break;
		default:
		{console.log(` Row ${i}, Cell ${j}: ${cellContent}`);}
	}
}
}
/*
const tableData = Array.from(tbl.rows).map(row => {
	return Array.from(row.cells).map(cell => cell.style.backgroundColor);
});
*/
//console.log("here ",tableData); // This will be a 2D array of cell contents
		//countColors();
		ctx.save();
		const newWindow = window.open("", "_blank", "width=600,height=400");
		const newDocument = newWindow.document;
	
			if (newWindow) { // Check if the window was successfully opened (not blocked by pop-up blocker)
				newWindow.document.write(`
					<!DOCTYPE html>
					<html>
					<head>
					${tbl}
					</head>
					<body>
						
					</body>
					</html>
				`);
				newDocument.body.appendChild(tbl);
				newWindow.document.close(); // Close the document stream to ensure content is rendered
			} else {
				alert("Pop-up blocked! Please allow pop-ups for this site.");
		}
			
		
		
		}
		
	
	  console.log("cellsize before = ", cellsize);
	  tableCreate(x,y);
	  console.log("cellsize after = ", cellsize);
	  ctx.restore();
	 // tablePlace();
	  
	
	 
}//stitchPat