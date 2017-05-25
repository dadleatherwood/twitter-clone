$(document).ready(function(){
  //Hide Tweet Button
  $('#tweet-controls').hide();

  //Click on text-area double text size, reveal tweet button,  and character count
  $('.tweet-compose').on('click', function(){
    $('#dashboard').css('height') //double
    $('#tweet-controls').show(); //reveal button and character count
  })


});
