const buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];

let userClickedPattern = [];

const nextSequence = function () {
  
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

$( '.btn' ).on( 'click', function () {
  
  let userChosenColour = this.id;

  userClickedPattern.push( userChosenColour );

  playSound( userChosenColour );
})