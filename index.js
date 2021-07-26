
var readlineSync = require("readline-sync");
/**
 * welcome the user
 * questions and answer objects
 * object array
 * call functions for player input
 * compare answers
 * update current score
 * update overall score 
 * print the overall score
 * simlify using function calls wherever
 * 
 */
 function welcome (){
   var userName = readlineSync.question('Hi, what is your name? ')
 console.log('WelCOME ' +userName+ '! to the game called - DO YOU KNOW ME.')
 }
//welcome () - test
 var q1={
   question: 'What is my name? ',
   answer: 'Deepu Raj'
 }
 var q2={
   question: 'Am I above age 35? Answer yes or no ',
   answer: 'yes'
 }
 var q3={
   question: 'Which is my favourite - espresso or cappucino ',
   answer: 'espresso'
 }
 var q4={
   question: 'Am I employed? yes or no ',
   answer: 'no'
 }
 var q5={
   question: 'Do I know to speak both english and Tamil? yes or no ',
   answer: 'yes'
 }
 var q6={
   question: 'Where do I live? Name the state ',
   answer: 'Kerala'
 }
  var questionaire= [q1,q2,q3,q4,q5,q6];

  var rank1 = {
    name:'Deepu ',
    points:6
}
var rank2 = {
  name : 'XYZ',
  points: 5
}

var rankholders = [rank1,rank2];
  
  function playgame (array1) {
    var score = 0;
      for (i=0;i<array1.length;i++)
    {
      var userAns = readlineSync.question(array1[i].question)
      if (userAns === array1[i].answer) {
        console.log('You are correct! ')
        score++
        console.log('Score = '+ score)} else {
          console.log('You are wrong! ')
        }
    }
    console.log('Game Over. Your total score is '+ score);
  }


function toppers (array){
  console.log('Top scorers now are: ');
    for(i=0;i<array.length;i++){
            console.log(array[i].name+' - ' + array[i].points);
      }
}
function updateToppers (name,score,rank){
    var newtopper = name;
    var newscore = score;
      rank.name===newtopper;
      rank.points===newscore;
    }


  playgame (questionaire);
  toppers (rankholders);
  console.log ('If you have beaten the above , send in the screen shot of your score for updating the recent top scorers'