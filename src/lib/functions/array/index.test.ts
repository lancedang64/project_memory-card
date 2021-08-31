import { Card } from 'src/lib/types';
import { addCard, getShuffledArr, removeCard } from '.';

const stubArr: Card[] = [
  { name: 'test_1', imgUrl: '1' },
  { name: 'test_2', imgUrl: '2' },
  { name: 'test_3', imgUrl: '3' },
  { name: 'test_4', imgUrl: '4' },
  { name: 'test_5', imgUrl: '5' },
];

const stubCard = {
  name: 'Toshinori_Yagi',
  imgUrl: 'https://myheroacademia.fandom.com/wiki/Toshinori_Yagi',
};

describe('getShuffledArr()', () => {
  it('works with array of objects', () => {
    const newArr = getShuffledArr(stubArr);
    expect(newArr).not.toEqual(stubArr);
    console.log('new array after being shuffled', newArr);
  });
});

describe('addCard()', () => {
  it('works', () => {
    expect(addCard(stubCard, stubArr)).toEqual([
      { name: 'test_1', imgUrl: '1' },
      { name: 'test_2', imgUrl: '2' },
      { name: 'test_3', imgUrl: '3' },
      { name: 'test_4', imgUrl: '4' },
      { name: 'test_5', imgUrl: '5' },
      {
        name: 'Toshinori_Yagi',
        imgUrl: 'https://myheroacademia.fandom.com/wiki/Toshinori_Yagi',
      },
    ]);
  });
});

describe('removeCard()', () => {
  it('works', () => {
    expect(removeCard({ name: 'test_3', imgUrl: '3' }, stubArr)).toEqual([
      { name: 'test_1', imgUrl: '1' },
      { name: 'test_2', imgUrl: '2' },
      { name: 'test_4', imgUrl: '4' },
      { name: 'test_5', imgUrl: '5' },
    ]);
  });
  it('does not crash if no item found', () => {
    expect(removeCard({ name: 'test_99', imgUrl: '99' }, stubArr)).toEqual([
      { name: 'test_1', imgUrl: '1' },
      { name: 'test_2', imgUrl: '2' },
      { name: 'test_3', imgUrl: '3' },
      { name: 'test_4', imgUrl: '4' },
      { name: 'test_5', imgUrl: '5' },
    ]);
  });
});
