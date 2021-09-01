import { TypeCard, TypeDifficulty } from 'src/lib/types';

export function isCardCorrect(cardName: string, leftOver: TypeCard[]): boolean {
  return !!leftOver.find((card) => card.name === cardName);
}

// get a difficulty level dpending on the current round
// hard coded levels progression: 1/3 easy, 1/3 medium, 1/3 hard.
// Any remainder from uneven division go into medium level
export function getDifficulty(round: number, maxRounds: number): TypeDifficulty {
  const easy = Math.floor(maxRounds / 3);
  const medium = maxRounds - easy;
  if (round <= easy) return 'easy';
  if (round <= medium) return 'medium';
  return 'hard';
}

// return hard coded score value depending on difficulty
export function getScore(difficulty: TypeDifficulty): number {
  switch (difficulty) {
    case 'easy':
      return 100;
    case 'medium':
      return 200;
    case 'hard':
      return 500;
    default:
      throw Error('Oops! Something went wrong with getScore()');
  }
}
