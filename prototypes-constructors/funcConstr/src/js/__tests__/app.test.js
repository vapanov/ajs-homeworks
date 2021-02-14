import createCharacter from '../app';
import typeList from '../types';

const testName = 'test';
const testObj = typeList[2];

test('bad name', () => {
  expect(() => {
    createCharacter('1', testObj.type);
  }).toThrowError(new Error('Requested name is inadmissible'));
});

test('bad type', () => {
  expect(() => {
    createCharacter(testName, '1');
  }).toThrowError(new Error('Requested type is inadmissible'));
});

test('return character', () => {
  const response = createCharacter(testName, testObj.type);
  expect(response).toEqual({
    name: testName,
    type: testObj.type,
    attack: testObj.attack,
    defence: testObj.defence,
    health: 100,
    level: 1,
  });
});
