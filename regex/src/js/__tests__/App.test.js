import Validator from '../App';

const validator = new Validator();
const validate = validator.validateUsername;

test('function throws Err with bad data input', () => {
  expect(() => {
    validate();
  }).toThrowError(new Error('bad data input'));
});

test('validate user', () => {
  expect(validate('user')).toEqual(true);
});
test('validate _user', () => {
  expect(validate('_user')).toEqual(false);
});
test('validate -user', () => {
  expect(validate('-user')).toEqual(false);
});
test('validate user1', () => {
  expect(validate('user1')).toEqual(false);
});
test('validate u1234ser', () => {
  expect(validate('u1234ser')).toEqual(false);
});
test('validate !user', () => {
  expect(validate('!user')).toEqual(false);
});
test('validate юзер', () => {
  expect(validate('юзер')).toEqual(false);
});
test('validate use!r', () => {
  expect(validate('use!r')).toEqual(false);
});
test('validate use-r', () => {
  expect(validate('use-r')).toEqual(true);
});
test('validate u1s2e_r', () => {
  expect(validate('u1s2e_r')).toEqual(true);
});
