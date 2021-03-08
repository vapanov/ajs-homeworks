import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

test('GameSavingLoader should return data', async () => {
  const response = await GameSavingLoader.load();
  const received = new GameSaving(response);
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
