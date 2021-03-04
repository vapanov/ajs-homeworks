export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    // поскольку по условию задачи мы не должны добавлять в команду
    // именно один и тот же объект, не вижу смысла писать
    // более глубокую проверку равенства объектов
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error(`Character ${character.name} was added into the Team already`);
    }
  }

  addAll(...members) {
    members.forEach((member) => {
      try {
        this.add(member);
      } catch (err) {
        // eslint-disable-next-line no-console
        // console.error(err.message);
        /**
         * Уважаемый Александр! Вы пишете:
         * тут не должно быть console.log'а для ошибки нужно
         * использовать throw Error.
         * Внесите правку и присылайте на повторную проверку=)
         * Однако по условиям задачи:
         * Метод addAll должен иметь возможность добавлять произвольное количество персонажей (используйте rest-parameters) в команду. При этом задвоения быть не должно, ошибка генерироваться не должна.
         * Что же прикажете делать?
         **/
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
