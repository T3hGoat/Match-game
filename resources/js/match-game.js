var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function() {
// More jQuery code goes in here later
var $game = $('#game');
var values = MatchGame.generateCardValues();
MatchGame.renderCards(values, $game);
});
/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
var cardArray = [];
for (var i = 1; i <= 8; i++) {
  cardArray.push(i,i);
}

var randomArray = [];
while(cardArray.length > 0) {
  var random = Math.floor(Math.random() * cardArray.length);
  randomArray.push(cardArray[random]);
  cardArray.splice(random, 1);

}
return randomArray;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

/*try again*/

MatchGame.renderCards = function(cardValues, $game) {
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

  $game.empty();

  for (var i = 0; i < cardValues.length; i++){
    var $card = $('<div class="col-xs-3 card"></div>');
    $card.data('value', cardValues[i]);
    $card.data('flip', false);
    $card.data('color', colors[cardValues[i] - 1]);
    $game.append($card);
  }


};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
