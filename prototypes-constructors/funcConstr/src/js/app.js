import typeList from './types';

export default function CreateCharacter(givenName, type) {
  if (!givenName || givenName.length < 2 || givenName.length > 10) {
    throw new Error('Requested name is inadmissible');
  }

  const typeObj = typeList.find((item) => item.type === type);

  if (!type || !typeObj) {
    throw new Error('Requested type is inadmissible');
  }

  this.name = givenName;
  this.type = typeObj.type;
  this.attack = typeObj.attack;
  this.defence = typeObj.defence;
  this.level = 1;
  this.health = 100;
}
