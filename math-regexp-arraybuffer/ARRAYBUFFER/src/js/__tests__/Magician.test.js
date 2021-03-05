import Magician from '../_typos/Magician';

test('Object creation', () => {
  const expectedObject = {
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attackPoint: 40,
    defencePoint: 10,
    attackDistance: 1,
    isStoned: false,
  };
  expect(new Magician('Gandalf', 'Magician')).toEqual(expectedObject);
});
