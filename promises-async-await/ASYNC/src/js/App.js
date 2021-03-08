import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

export default (async () => {
  try {
    const response = await GameSavingLoader.load();
    const result = new GameSaving(response);
    return result;
  } catch (err) {
    return Promise.reject(err);
  }
})();
