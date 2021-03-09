import saving from '../App';

test('App should save the data', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 },
  };
  expect.assertions(1);
  return saving.then((data) => {
    expect(data).toEqual(expected);
  });
});
