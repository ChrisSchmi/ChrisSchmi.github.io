/* global $ */
$(document).ready(function()
{
	loadPosts();
});


function loadPosts()
{
	$.getJSON( "posts.json", function( data )
	{
		if (data != null)
		{
			var newContent = "";
			for(var i = 0; i < data.length; i++)
			{
				var entry = data[i];
				
				newContent += "<div class='jumbotron'>";
				newContent += "<h2>" + entry.Date + "</h2>";

				if(entry.Content != null)
				{
					//"Content":{ {"Text":"ChrisSchmis interesting link collection!", "Link":""}}
					for(var j = 0; j < entry.Content.length; j++)
					{
						newContent += "<p>" + entry.Content[j].Text;
						
						if(entry.Content[j].Link != null)
						{
							newContent += "&nbsp;<a href=\"" + entry.Content[j].Link + "\" target=\"_blank\">Link</a>";
						}
						
						newContent += "</p>";
					}					
				}
				newContent += "</div>";
			}
			
			
			$("#content").append(newContent);
		}
	});
}




