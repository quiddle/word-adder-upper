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
  $('tbody').sortable().disableSelection();
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
    $('#the-answer').effect('shake');
  }
}

function revealTotal() {
  $('.answer').addClass('hidden');
  $('.success').removeClass('hidden');
}
