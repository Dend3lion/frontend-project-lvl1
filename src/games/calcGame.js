import playGame from '../index.js';

const getRandInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const calcExpression = (expression) => {
  const [first, operator, second] = expression.split(' ');
  let result = 0;

  switch (operator) {
    case '+':
      result = Number(first) + Number(second);
      break;
    case '-':
      result = Number(first) - Number(second);
      break;
    case '*':
      result = Number(first) * Number(second);
      break;
    default:
      break;
  }

  return result;
};

const getExpression = () => {
  const OPERATORS = ['+', '-', '*'];
  const MIN_RANDOM = 0;
  const MAX_RANDOM = 10;

  const operator = OPERATORS[getRandInt(0, OPERATORS.length)];
  const firstNum = getRandInt(MIN_RANDOM, MAX_RANDOM);
  const secondNum = getRandInt(MIN_RANDOM, MAX_RANDOM);

  return (operator === '-' && firstNum - secondNum < 0) ? `${secondNum} ${operator} ${firstNum}` : `${firstNum} ${operator} ${secondNum}`;
};

const calcGame = () => {
  const RULES = 'What is the result of the expression?';

  playGame(RULES, getExpression, calcExpression);
};

export default calcGame;
