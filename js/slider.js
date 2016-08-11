$(document).ready(function () {

	// image fill
		$('[imagefill]').imagefill();

	// Slide cover of articles with CSS3 and JS only!
		$('[opener-img]').click(function () {
			// console.log('yey!');
			$('[cover]').addClass('out');
		});

});