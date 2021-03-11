import Magician from '../_typos/Magician';

test('MathCharacter creation', () => {
  const expectedObject = {
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 1,
    isStoned: false,
    attackDistance: 1,
    attackPoint: 40,
    defencePoint: 10,
  };
  expect(new Magician('Gandalf', 'Magician')).toEqual(expectedObject);
});

test('Attack on the nearest cell should not decrease with get stoned', () => {
  const testMagician = new Magician('Gandalf', 'Magician');
  testMagician.attack = 100;
  testMagician.stoned = 1;
  testMagician.attackDistance = 1;
  expect(testMagician.attack).toBe(100);
});

test('Attack should decrease with distance', () => {
  const testMagician = new Magician('Gandalf', 'Magician');
  testMagician.attack = 200;
  testMagician.stoned = 0;
  testMagician.attackDistance = 2;
  expect(testMagician.attack).toBe(180);
});

test('Attack should decrease with distance and get stoned', () => {
  const testMagician = new Magician('Gandalf', 'Magician');
  testMagician.attack = 200;
  testMagician.stoned = 1;
  testMagician.attackDistance = 2;
  expect(testMagician.attack).toBe(175);
});

test('Attack should not be less than 0', () => {
  const testMagician = new Magician('Gandalf', 'Magician');
  testMagician.attack = -10;
  testMagician.stoned = 1;
  testMagician.attackDistance = 3;
  expect(testMagician.attack).toBe(0);
});
