$(document).ready(function(){
  //important variables
  var $charCount = $('#char-count')
  var characterCount = 140;
  var $tweetCompose = $('.tweet-compose')


  //Hide Tweet Button
  $('#tweet-controls').hide();

  //Click on text-area double text size, reveal tweet button,  and character count
  $tweetCompose.on('click', function(){
    $tweetCompose.css('height','5em'); //double
    $('#tweet-controls').show(); //reveal button and character count
  });

  //character count should decrease when a person types, and then change red when it reaches 10 or below
  $tweetCompose.keyup(function(){
    var length = $(this).val().length

    // make the 140 something that can be changed
    characterCount = 140 - length
    $charCount.text(characterCount)

    if(characterCount <= 10){
      $charCount.css('color','red');
    } else if (characterCount > 10){
      $charCount.css('color', 'black');
    }

  //disable tweet button if the user excedes 140 characters
    if(characterCount <= 0){
      $('.button').attr('disabled', 'disabled');
    }

    if (characterCount > 0){
       $('.button').removeAttr('disabled','disabled');
       };


  });

  //successfully post a tweet (NEW FUNCTION)
  $('.button').on('click',function(){
      var tweet = $tweetCompose.val()
    $('.tweet').prepend(
      '<img class="avatar" src="img/alagoon.jpg" />' +
      '<strong class="fullname">Jacob Leatherwood </strong>' +
      '<span class="username">@iRockYouDont</span>' +
      '<p class="tweet-text">' + tweet + '</p>'
    );

  });









});
