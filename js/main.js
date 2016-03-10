function addTheLetters(input) {
  var total = 0;
  input.value = input.value.replace(/[^a-zA-Z]/,'');

  $('table').removeClass('hidden');
  $('button').removeClass('hidden');
  $('tfoot').addClass('hidden');
  $('#number-list').empty();

  var word = input.value.toLowerCase();

  for (var i = 0, len = word.length; i < len; i++) {
    var char = word[i];
    var charValue = char.toLowerCase().charCodeAt(0) - 96;
    total += charValue;

    if (charValue < 10) {
      console.log(charValue);
      charValue = '&nbsp;' + charValue;
    }
    $('#number-list').append('<tr><td class="text-right">'+char+'</td><td>'+charValue+'</td></tr>');
  }

  $('#total').text(total);
}

function revealTotal() {
  $('button').addClass('hidden');
  $('tfoot').removeClass('hidden');
}
