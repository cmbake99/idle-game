var score = 1; // Create a variable to store the score in


var title = new Title('Hero Risen'); // Create a title element
var button = new Button('Gather Wood', btnPress);
var button = new Button('memes', bootnPress);  // Create a button element
var hidden = new Button('Boo!', botnPress);

hidden.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 100) {
    + botnPress()
  }
  if(score > 101) {
    hidden.hide(500);
  }
}
function botnPress() {
  score--;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    var button = new Button('Build a House', btnPress);
  }
  if(score > 100) {
    hidden.hide(500);
  }
}
function bootnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 100) {
    hidden.hide(500);
  }
}
function booHide() {
  hidden.hide(1)
}
