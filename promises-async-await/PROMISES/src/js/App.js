import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

export default new Promise((resolve) => {
  GameSavingLoader.load()
    .then((save) => resolve(new GameSaving(save)))
    .catch((error) => {
      throw new Error(error.message);
    });
});
