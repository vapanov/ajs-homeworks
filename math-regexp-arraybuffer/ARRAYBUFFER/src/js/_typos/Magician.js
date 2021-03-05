import MathCharacter from '../MathCharacter';

export default class Magician extends MathCharacter {
  constructor(name) {
    super(name, 'Magician');
    this.attackPoint = 40;
    this.defencePoint = 10;
  }
}
