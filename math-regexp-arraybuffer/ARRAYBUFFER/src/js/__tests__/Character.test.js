import Character from '../Character';
import Bowman from '../_typos/Bowman';

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

test('health == 0 + levelUp => Error', () => {
  const testBowman = new Bowman('Thranduil', 'Bowman');
  testBowman.health = 0;
  expect(() => testBowman.levelUp()).toThrowError('нельзя повысить левел умершего');
});

test('levelUp level++, attack*1.2, defence*1.2', () => {
  const testBowman = new Bowman('Thranduil', 'Bowman');
  testBowman.levelUp();
  const expectedObject = {
    name: 'Thranduil',
    type: 'Bowman',
    health: 100,
    level: 2,
    attackPoint: 30,
    defencePoint: 30,
  };
  expect(testBowman).toEqual(expectedObject);
});

test('health == 0, damage wont work', () => {
  const testBowman = new Bowman('Thranduil', 'Bowman');
  testBowman.health = 0;
  const expectedObject = {
    name: 'Thranduil',
    type: 'Bowman',
    health: 0,
    level: 1,
    attackPoint: 25,
    defencePoint: 25,
  };
  testBowman.damage(50);
  expect(testBowman).toEqual(expectedObject);
});

test('damage should change health correctly', () => {
  const testBowman = new Bowman('Thranduil', 'Bowman');
  const expectedHealth = 92.5;
  testBowman.damage(10); // check check
  expect(testBowman.health).toEqual(expectedHealth);
});

test('damage health < 0 => health = 0', () => {
  const testBowman = new Bowman('Thranduil', 'Bowman');
  const expectedHealth = 0;
  testBowman.damage(150);
  expect(testBowman.health).toEqual(expectedHealth);
});
