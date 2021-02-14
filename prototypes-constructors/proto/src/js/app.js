import typeList from './types';

export default function createCharacter(givenName, type) {
  if (!givenName || givenName.length < 2 || givenName.length > 10) {
    throw new Error('Requested name is inadmissible');
  }

  const typeObj = typeList.find((item) => item.type === type);

  if (!type || !typeObj) {
    throw new Error('Requested type is inadmissible');
  }
  const character = {
    name: givenName,
    type: typeObj.type,
    attack: typeObj.attack,
    defence: typeObj.defence,
    level: 1,
    health: 100,
  };
  return character;
}
