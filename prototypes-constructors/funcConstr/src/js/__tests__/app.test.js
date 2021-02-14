import CreateCharacter from '../app';
import typeList from '../types';

const testName = 'test';
const testObj = typeList[2];

test('bad name', () => {
  expect(() => {
    CreateCharacter('1', testObj.type);
  }).toThrowError(new Error('Requested name is inadmissible'));
});

test('bad type', () => {
  expect(() => {
    CreateCharacter(testName, '1');
  }).toThrowError(new Error('Requested type is inadmissible'));
});

test('return character', () => {
  const response = new CreateCharacter(testName, testObj.type);
  expect(response).toEqual({
    name: testName,
    type: testObj.type,
    attack: testObj.attack,
    defence: testObj.defence,
    health: 100,
    level: 1,
  });
});
