/* global $ */
$(document).ready(function()
{
	loadPosts();
});


function loadPosts()
{
	$.getJSON( "http://chrisschmi.github.io/scripts/posts.json", function( data )
	{
		if (data != null)
		{
			var newContent = "";
			for(var i = 0; i < data.entries.length; i++)
			{
				var entry = data.entries[i];
				
				newContent += "<div class='jumbotron'>";
				newContent += "<h2>" + entry.Date + "</h2>";

				if(entry.Content != null)
				{
					//"Content":{ {"Text":"ChrisSchmis interesting link collection!", "Link":""}}
					for(var j = 0; j < entry.Content.length; j++)
					{
						newContent += "<p>" + entry.Content[j].Text;
						
						if(entry.Content[j].Link != null && entry.Content[j].Link.length > 0)
						{
							newContent += "&nbsp;<a href=\"" + entry.Content[j].Link + "\" target=\"_blank\">Link</a>";
						}
						
						newContent += "</p>";
					}	
					newContent += "</div>";				
				}
			}		
			
			$("#content").append(newContent);
		}
		else
		{
			console.log("data is null");
		}
	});
}




