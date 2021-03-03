import Character from '../Character';

test('Character creation', () => {
  const expectedObject = {
    name: 'Thranduil',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(new Character('Thranduil', 'Bowman')).toEqual(expectedObject);
});
test('Too short name', () => {
  expect(() => new Character('1', 'Bowman')).toThrowError();
});
test('Too long name', () => {
  expect(() => new Character('12345678901', 'Bowman')).toThrowError();
});
test('Wrong type', () => {
  expect(() => new Character('Thranduil', 'Godzilla')).toThrowError();
});
