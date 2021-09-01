import { TypeCard, TypeDifficulty } from 'src/lib/types';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function getShuffledArr(arr: TypeCard[]): TypeCard[] {
  const newArr = [...arr];
  let currentIndex = newArr.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]];
  }

  return newArr;
}

export function addCard(card: TypeCard, arr: TypeCard[]): TypeCard[] {
  return [...arr, card];
}

export function removeCard(card: TypeCard, arr: TypeCard[]): TypeCard[] {
  return arr.filter((item) => item.name !== card.name);
}

export function getRandomCards(arr: TypeCard[], noCards: number): TypeCard[] {
  if (noCards > arr.length) throw Error(`number of cards taken (${noCards}) exceed array length (${arr.length})`);
  const poolArr = [...arr];
  const resultArr = [];
  let randomIndex;

  for (let i = 0; i < noCards; i++) {
    randomIndex = Math.floor(Math.random() * poolArr.length);
    resultArr.push(...poolArr.splice(randomIndex, 1));
  }

  return resultArr;
}

// return a Card array with 5 random cards from leftOver and Chosen card, ratio depends on difficulty
// easy: 4 - 1, medium: 3 - 2, hard: 1 - 4
export function getPlayCards(difficulty: TypeDifficulty, leftOver: TypeCard[], chosen: TypeCard[]): TypeCard[] {
  if (chosen.length === 0) return [...getRandomCards(leftOver, 5)]; // first round
  if (leftOver.length === 0) return [...getRandomCards(chosen, 10)]; // last round
  switch (difficulty) {
    case 'easy':
      return [...getRandomCards(leftOver, 4), ...getRandomCards(chosen, 1)];
    case 'medium':
      return [...getRandomCards(leftOver, 3), ...getRandomCards(chosen, 2)];
    case 'hard':
      return [...getRandomCards(leftOver, 1), ...getRandomCards(chosen, 9)];
    default:
      throw Error('Oops, something went wrong in getPlayCards()!');
  }
}
