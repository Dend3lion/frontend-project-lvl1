import playGame from '../index.js';

const getRandIntFunc = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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

const getMathExpression = () => {
  const OPERATORS = ['+', '-', '*'];
  const MIN_RANDOM = 0;
  const MAX_RANDOM = 10;

  const operator = OPERATORS[getRandIntFunc(0, OPERATORS.length)];
  const firstNum = getRandIntFunc(MIN_RANDOM, MAX_RANDOM);
  const secondNum = getRandIntFunc(MIN_RANDOM, MAX_RANDOM);

  return (operator === '-' && firstNum - secondNum < 0) ? `${secondNum} ${operator} ${firstNum}` : `${firstNum} ${operator} ${secondNum}`;
};

const calculator = () => {
  const RULES = 'What is the result of the expression?';

  playGame(RULES, getMathExpression, calcExpression);
};

export default calculator;
