import playGame from '../index.js';

const getRandInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const progressionExpression = (expression) => {
  const progression = expression.split(' ');
  const missingIndex = progression.indexOf('..');

  if (missingIndex === 0) {
    const step = (Number(progression[2]) - Number(progression[1]));
    return Number(progression[1]) - step;
  } 
  if (missingIndex === progression.length - 1) {
    const step = (Number(progression[progression.length - 2]) - Number(progression[progression.length - 3]));
    return Number(progression[progression.length - 2]) + step;
  }
  
  return (Number(progression[missingIndex + 1]) + Number(progression[missingIndex - 1]))/2;
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

  let result = [];

  for (let i = 0; i < PROGRESSION_NUMS; i++) {
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