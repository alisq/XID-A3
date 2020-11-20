console.log("are we working?") //spitting out text to the page console.




$(".menu").click(function(){ //1. selecting the element with the class "menu", 2. adding a click listener. 3. executing a function when that element is clicked.
	//alert("menu clicked");
	$('.menu').toggleClass("open") //adding/removing the clas "open" to the menu

	// if ($('.menu').hasClass("open") ) {
	// 	$(".menu").removeClass("open")
	// } else {
	// 	$(".menu").addClass("open")

	// }
})

$(".double").mouseover(function(){
	$(".another").addClass("shapeShift")
})

$(".double").mouseout(function(){
	$(".another").removeClass("shapeShift")
})

$(document).scroll(function(){ //adding an event listener to whenever someone scrolls on the document and executing the function below
	var ssf = $(document).scrollTop(); //creating a variable called "ssf" and loading in how many pixels we've scrolled from the top of the document.

	$(".another").css({ //changing CSS
		"transform":"rotate("+ssf+"deg)"
	})
	//console.log(ssf)
	$(".menu").html("Thus far, I have scrolled " + ssf + " pixels")

})


//create an ARRAY variable with all the names of all the students.
var classList = ["Usman Abdullah", "Parya Bafti", "Emily Bosschaart", "Madeline Cogen", "Aira Harutyunyan", "Chris Ho", "Che Huang", "Salisa Jatuweerapong", "Beth Jessup", "Junye Jiang", "Dayna Konopelny", "Davis Ladouceur", "Francine Larsen", "Mei Li", "Justine Ly", "Colin Lynch", "Austin Mercieca", "Max Minuzzo", "Grant Novak", "Jiin Park", "Calum Ralston", "Vermont Urbanovich", "Tyler Vienneau", "Lisa Weber", "Yueyun Wu"]

// var r = Math.floor(Math.random()*classList.length);
// //console.log(r)

// console.log(classList[r]);




i=0;
while (i<classList.length) {

	$(".container").append("<div class='square'>"+classList[i]+"</div>")
	i=i+1;
}
//loop through every student in the classlist and make a new div devoted to them.











