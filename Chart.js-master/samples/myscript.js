$(document).ready(function() {

	$.getJSON('t1.json', function(info){

			var a =Array();
			//a = $.parseJSON(info);
			console.log(info);
			console.log(a);

			var output='';
			for (var i = 0; i < 4; i++) 
			{
				for (key in info[i]) 
				{
					if (info[i].hasOwnProperty(key)) 
					{
						output += '<li>' + 
						'<a href = "' + info[i][key] +
						'">' + key + '</a>';
						'</li>';
			    	}   
				}
			}
			
			var update = document.getElementById('links');
			update.innerHTML = output;

	}); //getJSON

}); // ready
	