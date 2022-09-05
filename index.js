import chalk from 'chalk';
import readlineSync from 'readline-sync'

var data = [
  {
    question: 'What is my favourite color? ',
    answer: 'Blue'
  },
  {
    question: 'What is my home town? ',
    answer: 'Pimpri'
  },
  {
    question: 'What is my bike model? ',
    answer: 'Hornet'
  },
  {
    question: 'What is my favourite marvel character? ',
    answer: 'Thor'
  },
  {
    question: 'What is my favourite food? ',
    answer: 'Biryani'
  }
];

var score = 0;

var blueBold = chalk.blue.bold;
var greenBold = chalk.greenBright.bold;
var redBold = chalk.red.bold;

var userName = readlineSync.question(redBold('What is your Name? '));
console.log(greenBold('Hello ' + userName + ',') + blueBold(' Welcome to the Game!'));

for (let record of data) {
  let result = askQuestion(record.question, record.answer);
  if (result === true) {
    score++;
  }
}

console.log(greenBold('Congrats!! Your Score is -> ' + score));



function askQuestion(question, answer) {
  var blueBold = chalk.blue.bold;
  var redBold = chalk.red.bold;

  let userAnswer = readlineSync.question(redBold(question));

  if (userAnswer == answer) {
    return true;
  } else {
    return false;
  }
}