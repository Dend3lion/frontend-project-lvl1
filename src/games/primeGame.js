import playGame from '../index.js';

const getRandIntFunc = (min, max) => () => Math.floor(Math.random() * (max - min)) + min;

const checkPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) { if (num % i === 0) return 'no'; }
  return (num > 1) ? 'yes' : 'no';
};

const primeGame = () => {
  const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const MIN_RANDOM = 1;
  const MAX_RANDOM = 30;

  playGame(RULES, getRandIntFunc(MIN_RANDOM, MAX_RANDOM), checkPrime);
};

export default primeGame;
