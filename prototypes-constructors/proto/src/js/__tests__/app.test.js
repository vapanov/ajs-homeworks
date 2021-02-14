import Character from '../app';
import typeList from '../types';

const testName = 'test';
const testObj = typeList[0];

test('bad name', () => {
  expect(() => {
    Character('1', testObj.type);
  }).toThrowError(new Error('Requested name is inadmissible'));
});

test('bad type', () => {
  expect(() => {
    Character(testName, '1');
  }).toThrowError(new Error('Requested type is inadmissible'));
});

test('return character', () => {
  const response = new Character(testName, testObj.type);
  expect(response).toEqual({
    name: testName,
    type: testObj.type,
    attack: testObj.attack,
    defence: testObj.defence,
    health: 100,
    level: 1,
  });
});

test('damage character 10', () => {
  const response = new Character(testName, testObj.type);
  const testHealth = response.health - 10 * (1 - response.defence / 100);
  response.damage(10);
  expect(response.health).toBe(testHealth);
});

test('damage character 100%', () => {
  const response = new Character(testName, testObj.type);
  response.damage(100000); // правда, не знаю, как лучше нанести гарантированный 100% дамаг
  expect(response.health).toBe(0);
});
