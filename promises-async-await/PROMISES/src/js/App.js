import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

const result = GameSavingLoader.load()
  .then((saving) => new GameSaving(saving))
  .catch((error) => {
    throw new Error(error.message);
  });

export default result;
