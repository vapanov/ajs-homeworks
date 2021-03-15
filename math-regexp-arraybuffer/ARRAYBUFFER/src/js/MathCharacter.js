import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.isStoned = false;
    this.attackDistance = 1;
  }

  set stoned(state) {
    this.isStoned = !!state;
  }

  get stoned() {
    return this.isStoned;
  }

  set attack(value) {
    this.attackPoint = value;
  }

  get attack() {
    let baseAttack = this.attackPoint - (this.attackDistance - 1) * 10;
    if (this.isStoned) {
      baseAttack = Math.floor(baseAttack - Math.log2(this.attackDistance) * 5);
    }
    return baseAttack > 0 ? baseAttack : 0;
  }
}
