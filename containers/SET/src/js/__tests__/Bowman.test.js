import Bowman from '../_typos/Bowman';

test('Object creation', () => {
  const expectedObject = {
    name: 'Nestor',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Bowman('Nestor', 'Bowman')).toEqual(expectedObject);
});

test('health == 0 + levelUp => Error', () => {
  const testBowman = new Bowman('Nestor', 'Bowman');
  testBowman.health = 0;
  expect(() => testBowman.levelUp()).toThrowError('нельзя повысить левел умершего');
});

test('levelUp level++, attack*1.2, defence*1.2', () => {
  const testBowman = new Bowman('Nestor', 'Bowman');
  testBowman.levelUp();
  const expectedObject = {
    name: 'Nestor',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(testBowman).toEqual(expectedObject);
});

test('health == 0, damage wont work', () => {
  const testBowman = new Bowman('Nestor', 'Bowman');
  testBowman.health = 0;
  const expectedObject = {
    name: 'Nestor',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  testBowman.damage(50);
  expect(testBowman).toEqual(expectedObject);
});

test('damage should change health correctly', () => {
  const testBowman = new Bowman('Nestor', 'Bowman');
  const expectedHealth = 92.5;
  testBowman.damage(10); // check check
  expect(testBowman.health).toEqual(expectedHealth);
});

test('damage health < 0 => health = 0', () => {
  const testBowman = new Bowman('Nestor', 'Bowman');
  const expectedHealth = 0;
  testBowman.damage(150);
  expect(testBowman.health).toEqual(expectedHealth);
});
