import Person from './Person';

export default class Team {
  constructor(q) {
    this.from = 1;
    this.to = q;
  }

  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          const result = {
            done: false,
            value: new Person(),
          };
          current += 1;
          return result;
        }
        return {
          done: true,
        };
      },
    };
  }

  // не уверен, что правильно понял задание, реализовал возврат массива из персонажей

  giveMembers() {
    const returnTeam = [];
    for (const pers of this) {
      returnTeam.push(pers);
    }
    return returnTeam;
  }
}
