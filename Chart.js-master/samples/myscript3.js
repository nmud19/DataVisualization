$(document).ready(function() {

	
    /*var wordfreq =
    [
    {"word":"The", "Frequency":"45"},
    {"word":"black", "Frequency":"34"},
    {"word":"dog", "Frequency":"42"},
    {"word":"ate", "Frequency":"17"},
    {"word":"ate1", "Frequency":"74"},
    {"word":"ate2", "Frequency":"24"},
    {"word":"Pig","Frequency": "23"}
	];
	console.log(wordfreq);
	//loop over the json object here
	for (var i1 in wordfreq) 
	{
		label1.push(wordfreq[i1].word);		
		data1.push(wordfreq[i1].Frequency);
	}
	*/
	//call data from json file into this page
	$.getJSON('t1.json', function(info){
			var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
			var data1= new Array();
			//var data1 = [2,3,4,6,1,3,7];
			//data1.sort(function(a, b){return b-a});
			var label1 = new Array();
			var i=0,i1;
			var j = 0;
			var temp=0;
			var temp2;
			var labels123 =new Array();
			var data123 =new Array();
			
			//a = $.parseJSON(info);
			console.log(info);
			var output='';
			
			//for each
			$.each(info, function(key,value){
				console.log(key);
				console.log(value);
				labels123.push(key);
				data123.push(value);
				
			});
			console.log(data123);
			console.log(labels123);
			//console.log(labels123[2]);
			while(i<i1)
			{
				//bubble sort goes here
				j=0;
				while(j<i1)
				{
					if(data1[j]<data1[j+1])
					{
						//since decending order, we shift the variable for greater good :D
						temp = data1[j];
						data1[j] = data1[j+1];
						data1[j+1] = temp;
						//also change corresponding label
						temp2 = label1[j];
						label1[j] = label1[j+1];
						label1[j+1] = temp2;				
					}
					j++;
				}
				i++;
			}

			var barChartData = {
				labels : labels123,
				datasets : [
					{
						fillColor : "rgba(255,0,255,1)",
						strokeColor : "rgba(220,220,220,0.8)",
						highlightFill: "rgba(0,0,255,0.3)",
						highlightStroke: "rgba(0,0,255,1)",
						data: data123
					}
				]

			}
			window.onload = function(){
				var ctx = document.getElementById("canvas").getContext("2d");
				window.myBar = new Chart(ctx).Bar(barChartData, {
					responsive : true
				});
			}
	});
	 //getJSON
/*console.log(data);
			console.log(labels);
*/	
	//just intercange the data
	

}); // ready
	