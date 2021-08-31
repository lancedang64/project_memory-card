import { addCard, getShuffledArr, removeCard } from '.';

const stubArr = [
	{ name: 'test_1', b: 1 },
	{ name: 'test_2', b: 2 },
	{ name: 'test_3', b: 3 },
	{ name: 'test_4', b: 4 },
	{ name: 'test_5', b: 5 },
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
	it('does not crash given empty arr', () => {
		expect(getShuffledArr([])).toEqual([]);
	});
	it('throws error if given non arr', () => {
		expect(() => {
			getShuffledArr(3);
		}).toThrowError();
	});
});

describe('addCard()', () => {
	it('works', () => {
		expect(addCard(stubCard, stubArr)).toEqual([
			{ name: 'test_1', b: 1 },
			{ name: 'test_2', b: 2 },
			{ name: 'test_3', b: 3 },
			{ name: 'test_4', b: 4 },
			{ name: 'test_5', b: 5 },
			{
				name: 'Toshinori_Yagi',
				imgUrl: 'https://myheroacademia.fandom.com/wiki/Toshinori_Yagi',
			},
		]);
	});
	it('throws error given falsy card para', () => {
		expect(() => {
			addCard('', stubArr);
		}).toThrowError();
	});
	it('throws error given falsy arr para', () => {
		expect(() => {
			addCard({ name: 'test_6', b: 6 }, '');
		}).toThrowError();
	});
});

describe('removeCard()', () => {
	it('works', () => {
		expect(removeCard({ name: 'test_3', b: 3 }, stubArr)).toEqual([
			{ name: 'test_1', b: 1 },
			{ name: 'test_2', b: 2 },
			{ name: 'test_4', b: 4 },
			{ name: 'test_5', b: 5 },
		]);
	});
	it('does not crash if no item found', () => {
		expect(removeCard({ name: 'test_99', b: 99 }, stubArr)).toEqual([
			{ name: 'test_1', b: 1 },
			{ name: 'test_2', b: 2 },
			{ name: 'test_3', b: 3 },
			{ name: 'test_4', b: 4 },
			{ name: 'test_5', b: 5 },
		]);
	});
	it('throws error if given primitive para', () => {
		expect(() => {
			removeCard(5, stubArr);
		}).toThrowError();
	});
	it('throws error if given falsy para', () => {
		expect(() => {
			removeCard('', stubArr);
		}).toThrowError();
	});
});
