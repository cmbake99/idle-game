var score = 1; // Create a variable to store the score in
var score2 = 1;

var title = new Title('Hero Risen'); // Create a title element
var button = new Button('Gather Wood', btnPress);
var button2 = new Button('Gather Stone', botnPress);
button2.hide(); // Create a button element
var emptyText = new Text('');
var scr = new Text(score);
var scr2 = new Text(score2);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 100) {
    button2.show();
    setInterval(botnPress, 10000);
  }
}
function botnPress() {
  score2++;         // Increase the score
  scr2.edit(score2); // Update the page with the new score
  if(score > 100) {
    button2.show();
  }
}

var text1 = new Text('Actions');  // Create some text to go in the columns
var text2 = new Text('Resources');

var rowSection = new Section('row'); // Create the row to store the columns in
var column1 = new Section('col');    // Create the first column
var column2 = new Section('col');    // Create the second column

rowSection.add(column1);  // Add the first column to the row
rowSection.add(column2);  // Add the second column to the row

column1.add(text1);
column1.add(button);
column1.add(emptyText);
column1.add(button2); // Add the text to the first column
column2.add(text2);
column2.add(scr); // Add the text to the second column
column2.add(scr2);
