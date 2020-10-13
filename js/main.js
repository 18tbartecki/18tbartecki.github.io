
$(document).ready(function() {
	$("#name").hide().fadeIn(1000);
});


$("#education").on("click", function(event) {
	event.preventDefault();
	$("#education-section").slideToggle(1000, function() {
		$("#education-button").show();
	});
});

$("#education-button").on("click", function(event) {
	event.preventDefault();
	$(this).hide();
	$("#education-section").slideToggle(1000)
		
});

$("#experience").on("click", function(event) {
	event.preventDefault();
	$("#experience-section").slideToggle(1000, function() {
		$("#experience-button").show();
	});
});

$("#experience-button").on("click", function(event) {
	event.preventDefault();
	$(this).hide();
	$("#experience-section").slideToggle(1000)
		
});

$("#tech-skills").on("click", function(event) {
	event.preventDefault();
	$("#tech-section").slideToggle(1000, function() {
		$("#tech-button").show();
	});
});

$("#tech-button").on("click", function(event) {
	event.preventDefault();
	$(this).hide();
	$("#tech-section").slideToggle(1000)
		
});

$("#leadership").on("click", function(event) {
	event.preventDefault();
	$("#lead-section").slideToggle(1000, function() {
		$("#lead-button").show();
	});
});

$("#lead-button").on("click", function(event) {
	event.preventDefault();
	$(this).hide();
	$("#lead-section").slideToggle(1000)
		
});

$("#projects").on("click", function(event) {
	event.preventDefault();
	$("#proj-section").slideToggle(1000, function() {
		$("#proj-button").show();
	});
});

$("#proj-button").on("click", function(event) {
	event.preventDefault();
	$(this).hide();
	$("#proj-section").slideToggle(1000)
		
});

$("#interests").on("click", function(event) {
	event.preventDefault();
	$("#int-section").slideToggle(1000, function() {
		$("#int-button").show();
	});
});

$("#int-button").on("click", function(event) {
	event.preventDefault();
	$(this).hide();
	$("#int-section").slideToggle(1000)
		
});
