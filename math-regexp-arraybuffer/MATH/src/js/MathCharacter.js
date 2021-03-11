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
    let baseAttack = ((100 - (this.attackDistance - 1) * 10) / 100) * this.attackPoint;
    if (this.isStoned) {
      baseAttack -= Math.log2(this.attackDistance) * 5;
    }
    return baseAttack > 0 ? Math.floor(baseAttack) : 0;
  }
}
