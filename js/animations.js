$(document).ready(function(){
  //Hide Tweet Button
  var $charCount = $('#char-count')
  var characterCount = 140;
  $('#tweet-controls').hide();

  //Click on text-area double text size, reveal tweet button,  and character count
  $('.tweet-compose').on('click', function(){
    $('.tweet-compose').css('height','5em'); //double
    $('#tweet-controls').show(); //reveal button and character count
  });

  //character count should decrease when a person types, and then change red when it reaches 10 or below
  $('.tweet-compose').keyup(function(){
    var length = $(this).val().length
    // make the 140 something that can change?
    characterCount = 140 - length
    $charCount.text(characterCount)

    if(characterCount <= 10){
      $charCount.css('color','red');
    } else if (characterCount > 10){
      $charCount.css('color', 'black');
    }
  });



});
