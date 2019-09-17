var score = 0;

postToPage(score); // Print to the page

createButton('Button', btnPress); // Make a button
changeTitle('What does dis do?');
createButton('Bad Button', botnPress);

setInterval(btnPress, 1000);
setInterval(botnPress, 1000);

function btnPress() {
  score++;
  postToPage(score);
  if(score = 10) {
  changeTitle('You win!') 
 }
}
function botnPress() {
  score--;
  postToPage(score);
}
