$(document).ready(function() {
	$('.fa-thumbs-up').click(function() {		
		$(this).attr("disabled","disabled").addClass('disabled');
		var score = $(this).siblings('.score');
		var scoreNumber = parseInt(score.text());
		var postId = score.data('post');
		$.post('/posts/' + postId + '/upvote').done(function(data) {
			score.text(++scoreNumber);
		});
	})
	$('.fa-thumbs-down').click(function() {
		$(this).attr("disabled","disabled").addClass('disabled');
		var score = $(this).siblings('.score');
		var scoreNumber = parseInt(score.text());
		var postId = score.data('post');
		$.post('/posts/' + postId + '/downvote').done(function(data) {
			score.text(--scoreNumber);
		});
	})

})