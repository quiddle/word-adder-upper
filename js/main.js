var total=0;
function addTheLetters(event) {
  total = 0;

  $('#the-answer').val('');
  $('#the-word').val($('#the-word').val().replace(/[^a-zA-Z]/g,''));
  $('table, .answer').removeClass('hidden');
  $('.success').addClass('hidden');
  $('#number-list').empty();

  var word = $('#the-word').val();
  for (var i = 0, len = word.length; i < len; i++) {
    var char = word[i];
    var charValue = char.toLowerCase().charCodeAt(0) - 96;
    total += charValue;

    if (charValue < 10) {
      charValue = '&nbsp;' + charValue;
    }
    $('#number-list').append('<tr><td class="text-right">'+char+'&nbsp;</td><td>&nbsp;'+charValue+'</td></tr>');
  }
  $('html, body').animate({
        scrollTop: $("#the-answer").offset().top
    }, 1000);
  $('#the-answer').focus();
  $('#total').text(total);
}

function checkTotal(){
  var answer = $('#the-answer').val($('#the-answer').val().replace(/[^0-9]/g,'')).val();

  if (answer == '') {
    $('#the-answer').shake();
    return;
  }
  if (answer == total) {
    revealTotal();
    $('#the-answer').blur();
  } else {
    $('#the-answer').shake();
  }
}

function revealTotal() {
  $('.answer').addClass('hidden');
  $('.success').removeClass('hidden');
}


(function($) {
	$.fn.shake = function(o) {
		if (typeof o === 'function')
			o = {callback: o};
		// Set options
		var o = $.extend({
			direction: "left",
			distance: 20,
			times: 3,
			speed: 140,
			easing: "swing"
		}, o);

		return this.each(function() {

			// Create element
			var el = $(this), props = {
				position: el.css("position"),
				top: el.css("top"),
				bottom: el.css("bottom"),
				left: el.css("left"),
				right: el.css("right")
			};

			el.css("position", "relative");

			// Adjust
			var ref = (o.direction == "up" || o.direction == "down") ? "top" : "left";
			var motion = (o.direction == "up" || o.direction == "left") ? "pos" : "neg";

			// Animation
			var animation = {}, animation1 = {}, animation2 = {};
			animation[ref] = (motion == "pos" ? "-=" : "+=")  + o.distance;
			animation1[ref] = (motion == "pos" ? "+=" : "-=")  + o.distance * 2;
			animation2[ref] = (motion == "pos" ? "-=" : "+=")  + o.distance * 2;

			// Animate
			el.animate(animation, o.speed, o.easing);
			for (var i = 1; i < o.times; i++) { // Shakes
				el.animate(animation1, o.speed, o.easing).animate(animation2, o.speed, o.easing);
			};
			el.animate(animation1, o.speed, o.easing).
			animate(animation, o.speed / 2, o.easing, function(){ // Last shake
				el.css(props); // Restore
				if(o.callback) o.callback.apply(this, arguments); // Callback
			});
		});
	};
})(jQuery);
