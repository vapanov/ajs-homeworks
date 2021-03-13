import Team from '../App';

test('Team should return 1 new Person', () => {
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const newTeam = new Team(1);
  const received = newTeam.giveMembers();
  expect(received[0]).toEqual(expected);
});

test('Team should return array of 3 persons', () => {
  const newTeam = new Team(3);
  const received = newTeam.giveMembers();
  expect(received.length).toBe(3);
});
