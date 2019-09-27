var score = 1; // Create a variable to store the score in
var score2 = 1;
var score3 = 1;
var score4 = 1;


var title = new Title('Hero Risen'); // Create a title element
var button = new Button('Gather Wood', btnPress);
var button2 = new Button('Gather Stone', botnPress);
button2.hide(); // Create a button element
var button3 = new Button('Gather Coal', bootnPress);
button3.hide();
var button4 = new Button('Gather Iron', boootnPress);
button4.hide();
var button5 = new Button('Build a House', btnPress2); //I had this planned, but never got the time to do it.
button5.hide();
var emptyText = new Text('');
var emptyText2 = new Text('');
var emptyText3 = new Text('');
var scr = new Text(score);
var scr2 = new Text(score2);
var scr3 = new Text(score3);
var scr4 = new Text(score4);

var loop = setInterval(btnPress, 1000);
var loop2 = setInterval(botnPress, 1000);
var loop3 = setInterval(bootnPress, 1000);
var loop4 = setInterval(boootnPress, 1000);   // Set up a loop
var stoneLoop = false
function stopLoop() {
  clearInterval(loop);
}

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 100 && stoneLoop == false) {
    button2.show();
    setInterval(1000);
    stoneLoop = true
  }
}
function botnPress() {
  score2++;         // Increase the score
  scr2.edit(score2); // Update the page with the new score
  if(score2 > 100) {
    button3.show();

  }
}
function bootnPress() {
  score3++;         // Increase the score
  scr3.edit(score3); // Update the page with the new score
  if(score3 > 100) {
    button4.show();
    //setInterval(bootnPress, 10000);
  }
}
function boootnPress() {
  score4++;         // Increase the score
  scr4.edit(score4); // Update the page with the new score
  if(score4 > 100) {
    button5.show();
    //setInterval(bootnPress, 10000);
  }
}
function btnPress2() {
  score4++;         // Increase the score
  scr4.edit(score4); // Update the page with the new score
  if(score4 > 100) {
    button5.show();
    //setInterval(bootnPress, 10000);
  }
}
function stoneLoop() {
  score2++;         // Increase the score
  scr2.edit(score2);
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
column1.add(button2);
column1.add(emptyText2);
column1.add(button3);
column1.add(emptyText3);
column1.add(button4);
column2.add(text2);
column2.add(scr);
column2.add(scr2);
column2.add(scr3);
column2.add(scr4);
