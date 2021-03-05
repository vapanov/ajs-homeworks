import Bowman from '../_typos/Bowman';

test('Object creation', () => {
  const expectedObject = {
    name: 'Nestor',
    type: 'Bowman',
    health: 100,
    level: 1,
    attackPoint: 25,
    defencePoint: 25,
  };
  expect(new Bowman('Nestor', 'Bowman')).toEqual(expectedObject);
});
