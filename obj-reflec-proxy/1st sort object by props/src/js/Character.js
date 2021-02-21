export default class Character {
  constructor(name, type) {
    const minNameLength = 2; // may be taken from actual politics
    const maxNameLength = 10;
    if (!(name.length >= minNameLength && name.length <= maxNameLength)) {
      throw new Error(
        `Wrong name length. Name should be winthin ${minNameLength}-${maxNameLength}`
      );
    }
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!type || !types.includes(type)) {
      throw new Error(`Wrong character type. Right types: ${types}`);
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (!this.health) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
    return 1;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
