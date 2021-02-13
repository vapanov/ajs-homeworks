import sortUnitsByHealth from '../app';

test('err data input', () => {
  const result = sortUnitsByHealth('');
  expect(result).toEqual('corrupt data input');
});

test('sort 2 similar', () => {
  const units = [
    { name: 'мечник', health: 80 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 180 },
  ];
  const unitsSorted = [
    { name: 'лучник', health: 180 },
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 80 },
  ];
  const result = sortUnitsByHealth(units);
  expect(result).toEqual(unitsSorted);
});

test('sort 5', () => {
  const units = [
    { name: 'мечник', health: 55 },
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 99 },
    { name: 'лучник', health: 80 },
  ];
  const unitsSorted = [
    { name: 'маг', health: 100 },
    { name: 'маг', health: 99 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 55 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortUnitsByHealth(units);
  expect(result).toEqual(unitsSorted);
});
