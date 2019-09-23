var score = 1; // Create a variable to store the score in


var title = new Title('Hero Risen'); // Create a title element
var button = new Button('Gather Wood', btnPress);
var hidden = new Button('Gather Stone', botnPress);  // Create a button element


hidden.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score < 100) {
    hidden.show();
  }

}
function botnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 100) {
    var button = new Button('Gather Iron', bootnPress);
  }

}
function bootnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }

}
