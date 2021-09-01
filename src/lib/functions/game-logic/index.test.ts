import { getDifficulty, getScore, isCardCorrect } from '.';

const stubArr: Card[] = [
  { name: 'test_1', imgUrl: 'stub_1' },
  { name: 'test_2', imgUrl: 'stub_1' },
  { name: 'test_3', imgUrl: 'stub_1' },
  { name: 'test_4', imgUrl: 'stub_1' },
  { name: 'test_5', imgUrl: 'stub_1' },
];

const stubArr2: Card[] = [
  { name: 'test_I', imgUrl: 'stub_2' },
  { name: 'test_II', imgUrl: 'stub_2' },
  { name: 'test_III', imgUrl: 'stub_2' },
  { name: 'test_IV', imgUrl: 'stub_2' },
  { name: 'test_V', imgUrl: 'stub_2' },
];

const stubEmptyArr: Card[] = [];

describe('isCardCorrect()', () => {
  it('returns true for correct value', () => {
    expect(isCardCorrect('test_3', stubArr)).toBe(true);
  });
  it('returns false for incorrect value', () => {
    expect(isCardCorrect('test_999', stubArr)).toBe(false);
  });
});

describe('getDifficulty()', () => {
  it('returns correct first round', () => {
    expect(getDifficulty(1, 12)).toBe('first');
  });
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
  it('returns correct first/easy score (100 points)', () => {
    expect(getScore('easy')).toBe(100);
    expect(getScore('first')).toBe(100);
  });
  it('returns correct medium score (200 points)', () => {
    expect(getScore('medium')).toBe(200);
  });
  it('returns correct hard score (400 points)', () => {
    expect(getScore('hard')).toBe(400);
  });
});
