import { TypeCard } from 'src/lib/types';
import { getDifficulty, getScore, isCardCorrect } from '.';

const stubArr: TypeCard[] = [
  { name: 'test_1', imgSrc: 'stub_1' },
  { name: 'test_2', imgSrc: 'stub_1' },
  { name: 'test_3', imgSrc: 'stub_1' },
  { name: 'test_4', imgSrc: 'stub_1' },
  { name: 'test_5', imgSrc: 'stub_1' },
];

// const stubArr2: TypeCard[] = [
//   { name: 'test_I', imgSrc: 'stub_2' },
//   { name: 'test_II', imgSrc: 'stub_2' },
//   { name: 'test_III', imgSrc: 'stub_2' },
//   { name: 'test_IV', imgSrc: 'stub_2' },
//   { name: 'test_V', imgSrc: 'stub_2' },
// ];

// const stubEmptyArr: TypeCard[] = [];

describe('isCardCorrect()', () => {
  it('returns true for correct value', () => {
    expect(isCardCorrect('test_3', stubArr)).toBe(true);
  });
  it('returns false for incorrect value', () => {
    expect(isCardCorrect('test_999', stubArr)).toBe(false);
  });
});

describe('getDifficulty()', () => {
  it('returns correct easy level (first 1/3 max)', () => {
    expect(getDifficulty(4, 12)).toBe('easy');
  });
  it('returns correct medium level (second 1/3 max)', () => {
    expect(getDifficulty(5, 12)).toBe('medium');
  });
  it('returns correct hard level (third 1/3 max)', () => {
    expect(getDifficulty(9, 12)).toBe('hard');
  });
  it('returns 5 easy, 7 medium, 5 hard rounds', () => {
    expect(getDifficulty(5, 17)).toBe('easy');
    expect(getDifficulty(12, 17)).toBe('medium');
    expect(getDifficulty(13, 17)).toBe('hard');
  });
});

describe('getScore()', () => {
  it('returns correct easy score (100 points)', () => {
    expect(getScore('easy')).toBe(100);
  });
  it('returns correct medium score (200 points)', () => {
    expect(getScore('medium')).toBe(200);
  });
  it('returns correct hard score (500 points)', () => {
    expect(getScore('hard')).toBe(500);
  });
});
