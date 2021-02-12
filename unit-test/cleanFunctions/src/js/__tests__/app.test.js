import getHealthStatus from '../app';

test('test err', () => {
  const received = getHealthStatus({});
  expect(received).toBe('corrupted data request');
});

test('get health status 90', () => {
  const received = getHealthStatus({ name: 'Маг', health: 90 });
  expect(received).toBe('healthy');
});

test('get health status 10', () => {
  const received = getHealthStatus({ name: 'Маг', health: 10 });
  expect(received).toBe('critical');
});

test('get health status 40', () => {
  const received = getHealthStatus({ name: 'Маг', health: 40 });
  expect(received).toBe('wounded');
});

test('get health status 50', () => {
  const received = getHealthStatus({ name: 'Маг', health: 50 });
  expect(received).toBe('wounded');
});

test('get health status 15', () => {
  const received = getHealthStatus({ name: 'Маг', health: 15 });
  expect(received).toBe('wounded');
});
