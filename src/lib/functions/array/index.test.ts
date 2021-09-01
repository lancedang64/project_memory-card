import { TypeCard } from 'src/lib/types';
import { addCard, getPlayCards, getRandomCards, getShuffledArr, removeCard } from '.';

const stubArr: TypeCard[] = [
  { name: 'test_1', imgSrc: 'stub_1' },
  { name: 'test_2', imgSrc: 'stub_1' },
  { name: 'test_3', imgSrc: 'stub_1' },
  { name: 'test_4', imgSrc: 'stub_1' },
  { name: 'test_5', imgSrc: 'stub_1' },
];

const stubArr2: TypeCard[] = [
  { name: 'test_I', imgSrc: 'stub_2' },
  { name: 'test_II', imgSrc: 'stub_2' },
  { name: 'test_III', imgSrc: 'stub_2' },
  { name: 'test_IV', imgSrc: 'stub_2' },
  { name: 'test_V', imgSrc: 'stub_2' },
  { name: 'test_VI', imgSrc: 'stub_2' },
  { name: 'test_VII', imgSrc: 'stub_2' },
  { name: 'test_VIII', imgSrc: 'stub_2' },
  { name: 'test_IX', imgSrc: 'stub_2' },
  { name: 'test_X', imgSrc: 'stub_2' },
];

const stubEmptyArr: TypeCard[] = [];

const stubCard = {
  name: 'Toshinori_Yagi',
  imgSrc: 'https://myheroacademia.fandom.com/wiki/Toshinori_Yagi',
};

describe('getShuffledArr()', () => {
  it('works with array of objects', () => {
    const newArr = getShuffledArr(stubArr);
    expect(newArr).not.toEqual(stubArr);
  });
  it('creats 2 different array', () => {
    const arr1 = getShuffledArr(stubArr);
    const arr2 = getShuffledArr(stubArr);
    expect(arr1).not.toEqual(arr2);
  });
});

describe('addCard()', () => {
  it('works', () => {
    expect(addCard(stubCard, stubArr)).toEqual([
      ...stubArr,
      {
        name: 'Toshinori_Yagi',
        imgSrc: 'https://myheroacademia.fandom.com/wiki/Toshinori_Yagi',
      },
    ]);
  });
});

describe('removeCard()', () => {
  it('works', () => {
    expect(removeCard({ name: 'test_3', imgSrc: '3' }, stubArr)).toEqual([
      { name: 'test_1', imgSrc: 'stub_1' },
      { name: 'test_2', imgSrc: 'stub_1' },
      { name: 'test_4', imgSrc: 'stub_1' },
      { name: 'test_5', imgSrc: 'stub_1' },
    ]);
  });
  it('does not crash if no item found', () => {
    expect(removeCard({ name: 'test_99', imgSrc: '99' }, stubArr)).toEqual([
      { name: 'test_1', imgSrc: 'stub_1' },
      { name: 'test_2', imgSrc: 'stub_1' },
      { name: 'test_3', imgSrc: 'stub_1' },
      { name: 'test_4', imgSrc: 'stub_1' },
      { name: 'test_5', imgSrc: 'stub_1' },
    ]);
  });
});

describe('getRandomCards()', () => {
  it('returns 2 random arrays', () => {
    const randomArr = getRandomCards(stubArr, 3);
    const randomArr2 = getRandomCards(stubArr, 3);
    expect(randomArr).not.toEqual(randomArr2);
  });
  it('returns correct length arr', () => {
    const randomArr = getRandomCards(stubArr, 4);
    expect(randomArr.length).toBe(4);
  });
  it('returns correct max length arr', () => {
    const randomArr = getRandomCards(stubArr, 5);
    expect(randomArr.length).toBe(5);
  });
  it('throws error if exceed max length arr', () => {
    expect(() => {
      getRandomCards(stubArr, 999);
    }).toThrowError();
  });
});

describe('getPlayCards()', () => {
  it('returns correct hard coded length arr (5 cards)', () => {
    expect(getPlayCards('easy', stubArr, stubArr2).length).toBe(5);
  });
  it('works with first round', () => {
    const first = getPlayCards('easy', stubArr, stubEmptyArr);
    expect(first.filter((card) => card.imgSrc === 'stub_1').length).toBe(5);
  });
  it('works with easy ratio (4 - 1)', () => {
    const easy = getPlayCards('easy', stubArr, stubArr2);
    expect(easy.filter((card) => card.imgSrc === 'stub_1').length).toBe(4);
    expect(easy.filter((card) => card.imgSrc === 'stub_2').length).toBe(1);
  });
  it('works with medium ratio (3 - 2)', () => {
    const medium = getPlayCards('medium', stubArr, stubArr2);
    expect(medium.filter((card) => card.imgSrc === 'stub_1').length).toBe(3);
    expect(medium.filter((card) => card.imgSrc === 'stub_2').length).toBe(2);
  });
  it('works with hard ratio (1 - 9)', () => {
    const hard = getPlayCards('hard', stubArr, stubArr2);
    expect(hard.filter((card) => card.imgSrc === 'stub_1').length).toBe(1);
    expect(hard.filter((card) => card.imgSrc === 'stub_2').length).toBe(9);
  });
  it('works on the last round where 0 card will be left over', () => {
    expect(() => {
      getPlayCards('hard', stubEmptyArr, stubArr2);
    }).not.toThrowError();
  });
});
