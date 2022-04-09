import readlineSync from 'readline-sync';
import welcome from './cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const checkEven = (number) => number % 2 === 0;

const checkAnswer = (answer, number) => {
  const isEven = checkEven(number);
  return ((isEven && answer === 'yes') || (!isEven && answer === 'no'));
};

const askQuestion = (maxNum) => {
  const number = getRandomInt(maxNum);

  console.log(number);
  const answer = readlineSync.question('Your answer: ');

  return checkAnswer(answer, number);
};

const game = () => {
  const MAX_NUMBER = 20;

  const name = welcome();
  let counter = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (counter < 3) {
    const correct = askQuestion(MAX_NUMBER);
    if (correct) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      counter = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
