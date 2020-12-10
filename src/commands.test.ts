import { IPlayer } from './interfaces/player';
import { Player } from './models/player';
import { commandArgs } from './commands';
describe('command', () => {
  let newPlayer: IPlayer;
  let enemyPlayer: IPlayer;

  beforeEach(() => {
    console.log = jest.fn();
    newPlayer = new Player();
    enemyPlayer = new Player();
  });

  test('create command creates a new team with monpoke', () => {
    commandArgs.CREATE(newPlayer, ['testTeam', 'testMonpoke', 12, 1]);
    expect(newPlayer.teamName).toBe('testTeam');
    expect(newPlayer.monpokeGroup[0].name).toBe('testMonpoke');
    expect(newPlayer.monpokeGroup[0].hitpoints).toBe(12);
    expect(newPlayer.monpokeGroup[0].attackPower).toBe(1);
    expect(console.log).toHaveBeenCalledWith(
      'testMonpoke has been assigned to team testTeam!',
    );
  });

  test('I Choose You command to pick pokemon', () => {
    newPlayer.create('testTeam', 'testMonpoke', 12, 1);
    commandArgs.ICHOOSEYOU(newPlayer, 'testMonpoke');
    expect(newPlayer.chosenMonpoke.name).toBe('testMonpoke');
  });

  test('Attack command inflicts damage on enemy monpoke', () => {
    newPlayer.create('MockTeam', 'MockMonpoke', 12, 3);
    enemyPlayer.create('EnemyTeam', 'enemyMonpoke', 10, 2);
    commandArgs.ICHOOSEYOU(newPlayer, 'MockMonpoke');
    commandArgs.ICHOOSEYOU(enemyPlayer, 'enemyMonpoke');
    commandArgs.ATTACK(newPlayer, '', enemyPlayer);
    expect(enemyPlayer.chosenMonpoke.hitpoints).toBe(7);
  });
});
