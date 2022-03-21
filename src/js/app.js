import GameSavingLoader from './gamesaveload';

GameSavingLoader.load().then((saving) => {
  return saving;
}, (error) => {
  throw new Error(error);
});