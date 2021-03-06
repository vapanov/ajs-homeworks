import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../GetBuffer';

test('ArrayBufferConverter load() should fill buffer with Uint16Array', () => {
  const testArB = new ArrayBufferConverter();
  testArB.load(getBuffer());
  expect(testArB.buffer).toBeInstanceOf(Uint16Array);
});

test('ArrayBufferConverter toString() should throw an Err with empty buffer', () => {
  const testArB = new ArrayBufferConverter();
  expect(() => testArB.toString()).toThrowError('bad data inside');
});

test('ArrayBufferConverter toString() should return string', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const testArB = new ArrayBufferConverter();
  testArB.load(getBuffer());
  expect(testArB.toString()).toBe(data);
});

// test('Attack on the nearest cell should not decrease with get stoned', () => {
//   const testMagician = new Magician('Gandalf', 'Magician');
//   testMagician.attack = 100;
//   testMagician.stoned = 1;
//   testMagician.attackDistance = 1;
//   expect(testMagician.attack).toBe(100);
// });

// test('Attack should decrease with distance', () => {
//   const testMagician = new Magician('Gandalf', 'Magician');
//   testMagician.attack = 100;
//   testMagician.stoned = 0;
//   testMagician.attackDistance = 2;
//   expect(testMagician.attack).toBe(90);
// });

// test('Attack should decrease with distance and get stoned', () => {
//   const testMagician = new Magician('Gandalf', 'Magician');
//   testMagician.attack = 100;
//   testMagician.stoned = 1;
//   testMagician.attackDistance = 2;
//   expect(testMagician.attack).toBe(85);
// });

// test('Attack should not be less than 0', () => {
//   const testMagician = new Magician('Gandalf', 'Magician');
//   testMagician.attack = -10;
//   testMagician.stoned = 1;
//   testMagician.attackDistance = 3;
//   expect(testMagician.attack).toBe(0);
// });
