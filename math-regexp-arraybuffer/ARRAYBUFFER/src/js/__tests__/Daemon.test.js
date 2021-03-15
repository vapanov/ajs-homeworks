import Daemon from '../_typos/Daemon';

test('Object creation', () => {
  const expectedObject = {
    name: 'Nestor',
    type: 'Daemon',
    health: 100,
    level: 1,
    attackPoint: 25,
    defencePoint: 25,
    attackDistance: 1,
    isStoned: false,
  };
  expect(new Daemon('Nestor', 'Daemon')).toEqual(expectedObject);
});
