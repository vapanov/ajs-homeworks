import Character from '../Character';
import Team from '../Team';

const char1 = new Character('Legolas', 'Bowman');
const char2 = new Character('Tauriel', 'Bowman');
const char3 = new Character('Thranduil', 'Bowman');

test('Method Team.add must add character into the team(set)', () => {
  const expectedObject = {
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  const team = new Team();
  team.add(char1);
  expect([...team.members][0]).toEqual(expectedObject);
});

test('Method Team.add must throw the error on second try to add character into the team(set)', () => {
  const team = new Team();
  team.add(char1);
  expect(() => team.add(char1)).toThrowError();
});

test('Method Team.addAll must add the group of chars into the team', () => {
  const newTeam = new Team();
  newTeam.addAll(char1, char2, char3);
  expect(newTeam.members.size).toBe(3);
});

test(`Method Team.addAll mustn't double chars when adding the group of chars into the team`, () => {
  const newTeam = new Team();
  newTeam.addAll(char1, char2, char3, char2, char3);
  expect(newTeam.members.size).toBe(3);
});

test(`Method Team.toArray must return an array of chars`, () => {
  const newTeam = new Team();
  newTeam.addAll(char1, char2, char3);
  expect(newTeam.toArray()).toBeInstanceOf(Array);
});
