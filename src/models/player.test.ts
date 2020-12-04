import { IPlayer } from '../interfaces/player';
// import { IMonpoke } from '../interfaces/monpoke';
import { Monpoke } from './monpoke';
import { Player } from './player';

describe('player', () => {
  let newPlayer: IPlayer;

  beforeEach(() => {
    newPlayer = new Player();
  });

  test('Be initialized', () => {
    expect(newPlayer).toBeInstanceOf(Player);
  });

  test('Create a team with a monpoke', () => {
    newPlayer.create('TeamTest', 'Raichu', 4, 1);
    expect(newPlayer.monpokeGroup[0]).toBeInstanceOf(Monpoke);
    expect(newPlayer.teamName).toBe('TeamTest');
  });

  test('choose a monpoke', () => {
    newPlayer.create('TeamTest', 'Raichu', 4, 1);
    newPlayer.iChooseYou('Raichu');
    expect(newPlayer.chosenMonpoke).toBeInstanceOf(Monpoke);
    expect(newPlayer.chosenMonpoke.name).toBe('Raichu');
  });
});
