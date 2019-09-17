var score = 0;

postToPage(score); // Print to the page

createButton('Button', btnPress); // Make a button
changeTitle('Clicker Game');
createButton('Button', botnPress);

setInterval(btnPress, 1000);
setInterval(botnPress, -1000);

function btnPress() {
  score++;
  postToPage(score);
}
function botnPress() {
  score--;
  postToPage(score);
}
