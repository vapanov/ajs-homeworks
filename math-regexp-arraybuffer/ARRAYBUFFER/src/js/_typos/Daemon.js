import MathCharacter from '../MathCharacter';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name, 'Daemon');
    this.attackPoint = 25;
    this.defencePoint = 25;
  }
}
