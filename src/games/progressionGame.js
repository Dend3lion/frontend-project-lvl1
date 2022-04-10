import playGame from '../index.js';

const getRandInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const progressionExpression = (expression) => {
  const progr = expression.split(' ');
  const missingIndex = progr.indexOf('..');
  const progrLen = progr.length;

  if (missingIndex === 0) {
    const step = (Number(progr[2]) - Number(progr[1]));
    return Number(progr[1]) - step;
  }
  if (missingIndex === progrLen - 1) {
    const step = (Number(progr[progrLen - 2]) - Number(progr[progrLen - 3]));
    return Number(progr[progrLen - 2]) + step;
  }

  return (Number(progr[missingIndex + 1]) + Number(progr[missingIndex - 1])) / 2;
};

const getExpression = () => {
  const MIN_RANDOM = 0;
  const MAX_RANDOM = 20;
  const MIN_STEP = 2;
  const MAX_STEP = 10;
  const PROGRESSION_NUMS = 10;

  const firstNum = getRandInt(MIN_RANDOM, MAX_RANDOM);
  const step = getRandInt(MIN_STEP, MAX_STEP);
  const missingNum = getRandInt(0, PROGRESSION_NUMS);

  const result = [];

  for (let i = 0; i < PROGRESSION_NUMS; i += 1) {
    const value = (i !== missingNum) ? firstNum + i * step : '..';
    result.push(value);
  }

  return result.join(' ');
};

const progressionGame = () => {
  const RULES = 'What number is missing in the progression?';

  playGame(RULES, getExpression, progressionExpression);
};

export default progressionGame;
