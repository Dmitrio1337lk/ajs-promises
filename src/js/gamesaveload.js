import read from './reader';
import json from './perser';
import GameSaving from './gamesave.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((result) => new GameSaving(JSON.parse(result)));
  }
}