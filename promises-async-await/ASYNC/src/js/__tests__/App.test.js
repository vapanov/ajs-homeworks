import result from '../App';

test('App should save the data', async () => {
  const received = await result;
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 },
  };
  expect(received).toEqual(expected);
});

// тест на заглушке
// test('gameSavingLoader load() should throw an Err with empty data', async () => {
//   const gameSavingLoader = new GameSavingLoader();
//   expect(() => gameSavingLoader.load()).toThrowError();
// });
