export default class GameSaving {
  constructor(input) {
    const data = JSON.parse(input);
    this.id = data.id; // id сохранения
    this.created = data.created; // timestamp создания
    this.userInfo = {
      id: data.userInfo.id, // user id
      name: data.userInfo.name, // user name
      level: data.userInfo.level, // user level
      points: data.userInfo.points, // user points
    };
  }
}
