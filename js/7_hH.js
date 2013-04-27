$(document).ready(function()
{
	
	var art_canvas = document.createElement('canvas'),
		buffer_canvas = document.createElement('canvas');
		
		design_div = document.createElement('div');
		
		art_canvas.width = 450
		art_canvas.height = 400
		
		$("#wrapper").append(art_canvas);
		$("#wrapper").append(design_div);
		
		var font_size = Math.round($(window).height());
			
		 
		var context = art_canvas.getContext('2d');
		context.fillStyle="#000";
		context.font= "bold 400px nimbus-sans";
		context.fillText("hH", -25, 400);
		
		var h_stem = get_images(art_canvas,  60, 50, 0, 160, 60, 200 );
		$(design_div).append(h_stem);
		
		var h_arm = get_images(art_canvas,  120, 200, 60, 160, 120, 200 );
		$(design_div).append(h_arm);
		
		function get_images(target_canvas, section_width, section_height , x_pos, y_pos, target_width, target_height  )
		{
			var image_array = new Image();
				buffer_canvas.width = target_width;
				buffer_canvas.height = target_height;
			 
	
				buffer_canvas.getContext('2d').drawImage(target_canvas, x_pos, y_pos, section_width, section_height, 0, 0, target_width, target_height);
				image_array.src = buffer_canvas.toDataURL("image/png");
			
			return image_array;

		}
		
});

