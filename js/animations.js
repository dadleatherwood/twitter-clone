$(document).ready(function() {
  //important variables
  var $charCount = $('#char-count')
  var characterCount = 140;
  var $tweetCompose = $('.tweet-compose')
  var $tweetActions = $('.tweet-actions')
  var $tweetText = $('.tweet-text')


  //Hide Tweet Button
  $('#tweet-controls').hide();

  //Click on text-area double text size, reveal tweet button,  and character count
  $tweetCompose.on('click', function() {
    $tweetCompose.css('height', '5em'); //double
    $('#tweet-controls').show(); //reveal button and character count
  });

  //character count should decrease when a person types, and then change red when it reaches 10 or below
  $tweetCompose.keyup(function() {
    var length = $(this).val().length

    // make the 140 something that can be changed
    characterCount = 140 - length
    $charCount.text(characterCount)

    if (characterCount <= 10) {
      $charCount.css('color', 'red');
    } else if (characterCount > 10) {
      $charCount.css('color', 'black');
    }

    //disable tweet button if the user excedes 140 characters
    if (characterCount <= 0) {
      $('.button').attr('disabled', 'disabled');
    }

    if (characterCount > 0) {
      $('.button').removeAttr('disabled', 'disabled');
    };


  });

  //successfully post a tweet (NEW FUNCTION)
  $('.button').on('click', function() {
    var tweet = $tweetCompose.val()
    var $tweet = $('.tweet').first().clone()
    $tweet.find('.tweet-text').first().text(tweet)
    $tweet.find('.fullname').first().text('Jacob Leatherwood')
    $tweet.find('.username').first().text('@dadleatherwood')
    $tweet.find('.avatar').first().attr('src', 'https://pbs.twimg.com/profile_images/2475907161/image.jpg')
    $tweet.mouseenter(function() {
      $(this).find('.tweet-actions').fadeIn(250)
    });
    $tweet.mouseleave(function() {
      $(this).find('.tweet-actions').fadeOut(250);
    });
    $tweet.on('click', function() {
      $(this).find('.stats').fadeIn(250)
    });
    $tweet.off('click', function() {
      $(this).find('.stats').fadeOut(250);
    });


    $('#stream').prepend($tweet);
  });

  //hide 'reply', 'retweet', etc... unless hovered over tweet
  $tweetActions.hide();
  $tweetText.mouseenter(function() {
    $(this).parent().find('.tweet-actions').fadeIn(250)
  });

  $tweetText.mouseleave(function() {
    $(this).parent().find('.tweet-actions').fadeOut(250)
  });

  $('.stats').hide();
  $tweetText.on('click', function() {
    $(this).parent().find('.stats').fadeIn(250)
  });
  $tweetText.off('click', function() {
    $(this).parent().find('.stats').fadeOut(250)
  });









});
