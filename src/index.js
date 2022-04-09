import { getName, getUserAnswer, output } from './cli.js';

const playGame = (rules, generator, getCorrectAnswer) => {
  const name = getName();
  const reqAnswers = 3;
  let counter = 0;

  output(rules);

  while (counter < reqAnswers) {
    const question = generator();

    const userAnswer = getUserAnswer(question);
    const correctAnswer = getCorrectAnswer(question);

    if (String(userAnswer) === String(correctAnswer)) {
      output('Correct!');
      counter += 1;
    } else {
      output(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  output(`Congratulations, ${name}!`);
};

export default playGame;
