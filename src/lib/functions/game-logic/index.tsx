import { Card, Difficulty } from 'src/lib/types';

export function isCardCorrect(cardName: string, leftOver: Card[]): boolean {
  return !!leftOver.find((card) => card.name === cardName);
}

// get a difficulty level dpending on the current round
// hard coded levels progression: 1/3 easy, 1/3 medium, 1/3 hard.
// Any remainder from uneven division go into medium level
export function getDifficulty(round: number, maxRounds: number): Difficulty {
  const easy = Math.floor(maxRounds / 3);
  const medium = maxRounds - easy;
  if (round === 1) return 'first';
  if (round <= easy) return 'easy';
  if (round <= medium) return 'medium';
  return 'hard';
}

// return hard coded score value depending on difficulty
export function getScore(difficulty: Difficulty): number {
  switch (difficulty) {
    case 'first':
      return 100;
    case 'easy':
      return 100;
    case 'medium':
      return 200;
    case 'hard':
      return 400;
    default:
      throw Error('Oops! Something went wrong with getScore()');
  }
}
