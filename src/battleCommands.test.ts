import { battle, splitCommands } from './battleCommands';
import { Player } from './models/player';

describe('splitCommands', () => {
  test('splits any command into array', () => {
    const splitArray = splitCommands('this is split 123');
    console.log(splitArray);

    expect(splitArray).toBeInstanceOf(Array);
    expect(splitArray).toHaveLength(4);
  });
});

describe('command', () => {
  test('create', () => {
    const test = new Player();
    battle.create('testing 12 1');
  });
});
