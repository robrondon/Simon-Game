const buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];

let userClickedPattern = [];

let started = false;

let level = 0;

$( document ).on( 'keydown', function () {

  if ( !started ) {

    $( '#level-title' ).text( `Level ${level}` );
    nextSequence();
    started = true;

  } 
})

$( '.btn' ).on( 'click', function () {
  
  let userChosenColour = $(this).attr('id');

  userClickedPattern.push( userChosenColour );

  playSound( userChosenColour );

  animatePress( userChosenColour );

  checkAnswer( userClickedPattern.length - 1 );

} )

const checkAnswer = function ( currentLevel ) {

  if ( userClickedPattern[currentLevel] === gamePattern[currentLevel] ) {

    console.log( 'success' );
    console.log( userClickedPattern );
    console.log( gamePattern );
    console.log( userClickedPattern.length );
    console.log( gamePattern.length );

    if ( userClickedPattern.length === gamePattern.length ) {

      setTimeout( function () {
        nextSequence();
      }, 1000 )
      
    }

  } else {

    console.log( 'wrong' );
    console.log( userClickedPattern, gamePattern );

    playSound( 'wrong' );

    $( 'body' ).addClass( 'game-over' );

    setTimeout( function () {

      $( 'body' ).removeClass( 'game-over' )

    }, 200 );
    
    $( '#level-title' ).text( 'Game Over, Press Any Key to Restart' );

    startOver();
  }
}

const startOver = function () {
  level = 0;
  gamePattern = [];
  started = false;

  console.log( level, gamePattern, started );
}

const nextSequence = function () {

  userClickedPattern = [];

  level++;

  $( '#level-title' ).text( `Level ${level}` );
  
  let randomNumber = Math.floor( Math.random() * 4 );
  
  let randomChosenColour = buttonColours[randomNumber];
  
  gamePattern.push( randomChosenColour );
  
  $( `#${randomChosenColour}` ).fadeOut( 100 ).fadeIn( 100 ).fadeOut( 100 ).fadeIn( 100 );

  playSound( randomChosenColour );
}

const playSound = function ( name ) {
  
  let audio = new Audio( `./sounds/${name}.mp3` );

  audio.play();

} 

const animatePress = function ( currentColour ) {

  $( `#${currentColour}` ).addClass( 'pressed' );

  setTimeout( function () {

    $( `#${currentColour}` ).removeClass( 'pressed' );

  }, 100 );
}

