import readlineSync from 'readline-sync';

export const output = (text) => console.log(text);

export const input = (text) => readlineSync.question(text);

export const getName = () => {
  output('Welcome to the Brain Games!');
  const name = input('May I have your name? ');
  output(`Hello, ${name}!`);

  return name;
};

export const getUserAnswer = (question) => {
  output(`Question: ${question}`);
  const answer = input('Your answer: ');

  return answer;
};
