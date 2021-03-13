import Person from './Person';

export default class Team {
  constructor(quant) {
    this.from = 1;
    this.to = quant;
  }

  *[Symbol.iterator]() {
    for (let i = 1; i <= this.to; i += 1) {
      yield new Person();
    }
  }
}
