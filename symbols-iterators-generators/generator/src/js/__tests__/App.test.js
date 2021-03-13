import Team from '../App';

test('new Team(1) should return 1 new Person', () => {
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  let received;
  const newTeam = new Team(1);
  for (const num of newTeam) {
    received = num;
  }
  expect(received).toEqual(expected);
});

test('new Team(3) should return 3 persons', () => {
  const newTeam = new Team(3);
  const received = [];
  for (const num of newTeam) {
    received.push(num);
  }
  expect(received.length).toBe(3);
});
