import { Card } from 'src/lib/types';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function getShuffledArr(arr: Card[]): Card[] {
  if (!Array.isArray(arr)) throw Error('array parameter is invalid');
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

export function addCard(card: Card, arr: Card[]): Card[] {
  if (!arr) throw Error('array parameter is invalid!');
  if (!card) throw Error('card parameter is invalid!');
  return [...arr, card];
}

export function removeCard(card: Card, arr: Card[]): Card[] {
  if (!arr) throw Error('array parameter is invalid!');
  if (!card || !card.name) throw Error('card parameter is invalid!');
  return arr.filter((item) => item.name !== card.name);
}
