import { commands, splitCommands } from './commands';
import { IPlayer } from './interfaces/player';
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
  let newPlayer: IPlayer;

  beforeEach(() => {
    console.log = jest.fn();
    newPlayer = new Player();
  });

  test('create command creates a new team with monpoke', () => {
    commands.create(newPlayer, 'testTeam testMonpoke 123 1234');
    expect(newPlayer.teamName).toBe('testTeam');
    expect(newPlayer.monpokeGroup[0].name).toBe('testMonpoke');
    expect(newPlayer.monpokeGroup[0].hitpoints).toBe(123);
    expect(newPlayer.monpokeGroup[0].attackPower).toBe(1234);
    expect(console.log).toHaveBeenCalledWith(
      'testMonpoke has been assigned to team testTeam!',
    );
  });
});
