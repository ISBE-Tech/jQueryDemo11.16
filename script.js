$(document).ready(function() {
	console.log("ready!");
	$("#link1").on("click", function(event) {
		alert("You clicked me!")
	});
	$("#container")
	.css({
		"height":"100px",
		"background-color": "blue"})
		.on("click",function(event) {
				$(this).css({"background-color": "green"})
			})
		.on("mouseout",function(event) {
				$(this).css({"background-color": "purple"})
			});


	$("#form1").append(
		$("<h3/>").text("Contact Form"),
		$("<p/>").text("This is my form."),
		$("<form/>", {
			action: '#',
			method: '#',
		})
		.append(
			$("<input/>", {
				type: 'text',
				id: 'vname',
				name: 'name',
				placeholder: 'Your Name'
			}),
			$("<br/>"),
			$("<input/>", {
				type: 'text',
				id: 'vemail',
				name: 'email',
				placeholder: 'Your Email'
			}),
			$("<br/>"),
			$("<textarea/>", {
				rows: '5px',
				cols: '27px',
				type: 'text',
				id: 'vmsg',
				name: 'msg',
				placeholder: 'Message'
			}),
			$("<br/>"),
			$("<input/>", {
				type: 'submit',
				id: 'submit',
				value: 'Submit'
			})
		)
	)

});