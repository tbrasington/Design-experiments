$(document).ready(function()
{

	var happy_canvas = document.createElement('canvas'),
		sad_canvas = document.createElement('canvas'),
		buffer_canvas = document.createElement('canvas');
		
		design_div = document.createElement('div');
			
		
		$("#wrapper").append(design_div)

		var context = happy_canvas.getContext('2d');
		context.fillStyle="#000";
		context.font="100px brandon-grotesque";
		context.fillText("happy", 10, 90);
		
		secondary = sad_canvas.getContext('2d');
		secondary.fillStyle="#000";
		secondary.font="100px brandon-grotesque";
		secondary.fillText("sad", 10, 90);
			
			
		var happy_images = get_images(happy_canvas,  happy_canvas.width/6, happy_canvas.height/2);
		var sad_images = get_images(sad_canvas,  sad_canvas.width/6, sad_canvas.height/2);
		
		console.log(happy_images)
		var mixed = happy_images.concat(sad_images);
		
		var shuffleeee = _.shuffle(mixed).slice(0,11);
		
		_.each(shuffleeee, function(item)
		{
			$(design_div).append(item)	
		});
		
		function get_images(target_canvas, section_width, section_height)
		{
			var image_array = [],
			x_pos = -1, 
			y_pos = 0;
			
			for(var a = 0; a < 12; a++)
			{
				image_array[a] = new Image();
				buffer_canvas.width = section_width;
				buffer_canvas.height = section_height;
				
				if(a<7)
				{
					y_pos = 0
				}
					else
				{
					y_pos = section_height
				}
				
				if(x_pos==6)
				{
					x_pos = -1;
				}
				
				x_pos++;
	
				buffer_canvas.getContext('2d').drawImage(target_canvas, section_width*x_pos, y_pos, section_width, section_height, 0, 0, section_width, section_height);
				image_array[a].src = buffer_canvas.toDataURL("image/png");
				
			}
			
			return image_array;

		}
			
		
});

