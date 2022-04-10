import playGame from '../index.js';

const getRandIntFunc = (min, max) => () => Math.floor(Math.random() * (max - min)) + min;

const checkEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const evenGame = () => {
  const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
  const MIN_RANDOM = 0;
  const MAX_RANDOM = 30;

  playGame(RULES, getRandIntFunc(MIN_RANDOM, MAX_RANDOM), checkEven);
};

export default evenGame;
