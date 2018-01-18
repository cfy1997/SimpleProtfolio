var userArrary = [

	{
		name: "Yan Hong",
		age: 26,
		school: "SFU",
		tags: ["HTML", "CSS", "JavaScript"]
	},

	{
		name: "Ben Sun",
		age: 30,
		school: "SFU",
		tags: ["UIUX", "Graphics Design"]
	}

];

$('#search-btn').click(function(e) {

	$('#user-container').html('');

	var searchVal = $('#search-input').val();
	for (var i = 0; i < userArrary.length; i++) {
		if (searchVal == userArrary[i].name) {
			var userDiv = $('<div>').addClass('user');

			$('<h1>').text(userArrary[i].name).appendTo(userDiv);
			$('<h2>').text(userArrary[i].age).appendTo(userDiv);
			$('<h2>').text(userArrary[i].school).appendTo(userDiv);

			var p = $('<p>');

			for (var j = 0; j < userArrary[i].tags.length; j++) {
				$('<span>').text(userArrary[i].tags[j]).appendTo(p);	
			}

			$(p).appendTo(userDiv);
			$(userDiv).appendTo($('#user-container'));
		}
	}
});



/*
<div class="user">
	<h1>Yan Hong</h1>
	<h2>26</h2>
	<h2>SFU</h2>
	<p>
		<span>HTML</span>				
		<span>CSS</span>
		<span>JavaScript</span>
	</p>
</div>
*/


