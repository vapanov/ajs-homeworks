import ErrorRepository from '../ErrorRepository';

test('Method .translate must return error message on code input', () => {
  const errRep = new ErrorRepository();
  errRep.errorMap.set(422, 'Unprocessable Entity');
  expect(errRep.translate(422)).toBe('Unprocessable Entity');
});

test('Method .translate must return "Unknown error" message on unknown code input', () => {
  const errRep = new ErrorRepository();
  errRep.errorMap.set(422, 'Unprocessable Entity');
  expect(errRep.translate(404)).toBe('Unknown error');
});
