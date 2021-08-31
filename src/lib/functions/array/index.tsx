import { Card } from 'src/lib/types';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function getShuffledArr(arr: Card[]): Card[] {
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
  return [...arr, card];
}

export function removeCard(card: Card, arr: Card[]): Card[] {
  return arr.filter((item) => item.name !== card.name);
}
