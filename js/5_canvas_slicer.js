$(document).ready(function()
{

var canvas = document.createElement('canvas');
		canvas.width = 500;
		canvas.height = 150;
	$("#wrapper").append(canvas)
	var context = canvas.getContext('2d');
	
	context.fillStyle="#000";
	context.font="100px brandon-grotesque";
	context.fillText("testing", 10, 90);
	
/*
	// lets get some data
	var top_left = context.getImageData(0, 0, canvas.width/4, canvas.height/2);
	canvas.width=canvas.width;
	
	
	 context.save();
	 context.translate(0, 85);
 	 context.rotate(135 * Math.PI / 180);
 	 
 	 context.putImageData(top_left, 10, 90);
	
 	 context.restore();
*/

	
var buffer = document.createElement('canvas');
buffer.width = canvas.width;
buffer.height = canvas.height

var width_slice = canvas.width/6;
var height_slice = canvas.height/2;


buffer.getContext('2d').translate(width_slice/2, height_slice/2);
buffer.getContext('2d').rotate(90*Math.PI/180);
var w = (width_slice/2)*-1, h =(height_slice/2)*-1;
buffer.getContext('2d').translate( w, h);


buffer.getContext('2d').drawImage(canvas,0,0,width_slice ,height_slice ,0,0,width_slice, height_slice );

buffer.getContext('2d').translate(width_slice/2, height_slice/2);
buffer.getContext('2d').rotate(90*Math.PI/180);
var w = (width_slice/2)*-1, h =(height_slice/2)*-1;
buffer.getContext('2d').translate( w, h);

buffer.getContext('2d').drawImage(canvas,width_slice,0,width_slice ,height_slice ,width_slice,0,width_slice, height_slice );


	$("#wrapper").append(buffer)
$(canvas).hide();


	
	//$('body').append(savedImage)
/*
var c= document.createElement('canvas');
	$("#wrapper").append(c)
var ctx=c.getContext("2d");
ctx.fillStyle="red";
ctx.fillRect(10,10,50,50);
copy();
function copy()
{
var imgData=ctx.getImageData(10,10,50,50);
ctx.putImageData(imgData,10,70);
}
*/

});

