import playGame from '../index.js';

const getRandIntFunc = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// Euclidean algorithm
const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));

const gcdExpression = (expression) => {
  const [first, second] = expression.split(' ').reverse();

  return gcd(first, second);
};

const getExpression = () => {
  const MIN_RANDOM = 0;
  const MAX_RANDOM = 100;

  const firstNum = getRandIntFunc(MIN_RANDOM, MAX_RANDOM);
  const secondNum = getRandIntFunc(MIN_RANDOM, MAX_RANDOM);

  return `${firstNum} ${secondNum}`;
};

const gcdGame = () => {
  const RULES = 'Find the greatest common divisor of given numbers.';

  playGame(RULES, getExpression, gcdExpression);
};

export default gcdGame;
