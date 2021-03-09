import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    return (async () => {
      try {
        const readedData = await read();
        return await json(readedData);
      } catch (err) {
        return Promise.reject(err);
      }
    })();
  }
}
