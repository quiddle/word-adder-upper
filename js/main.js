var total=0;
function addTheLetters(event) {
  $('#results,.answer,.success').addClass('hidden');

  $('#number-list').empty();
  $('#the-answer').val('');

  $('#the-word').val($('#the-word').val().replace(/[^a-zA-Z]/g,''));
  var word = $('#the-word').val();
  if (word === '') {
    return;
  }

  total = 0;
  for (var i = 0, len = word.length; i < len; i++) {
    var char = word[i];
    var charValue = char.toLowerCase().charCodeAt(0) - 96;
    total += charValue;
    $('#number-list').append('<li><span>'+char+'</span>'+charValue+'</li>');
  }

  $('#results, .answer').removeClass('hidden');
  $('html, body').animate({
        scrollTop: $("#the-answer").offset().top
    }, 1000);
  $('#the-answer').focus();
  $('#total').text(total);
  $('#number-list').sortable().disableSelection();
}

function checkTotal(){
  var answer = $('#the-answer').val($('#the-answer').val().replace(/[^0-9]/g,'')).val();

  if (answer == '') {
    $('#the-answer').effect('shake');
    return;
  }
  if (answer == total) {
    $('#the-answer').blur();
    revealTotal();
  } else {
    $('#the-answer').effect('shake');
  }
}

function revealTotal() {
  $('.answer').addClass('hidden');
  $('.success').removeClass('hidden');
  $('.success').effect({ effect: 'highlight', color: '#4CF016', duration: 1000});
}
