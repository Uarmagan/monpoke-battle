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
    newPlayer.create(new Monpoke('Pikachu', 2, 10), 'TeamTest');
    expect(newPlayer.monpokeGroup[0]).toBeInstanceOf(Monpoke);
  });

  test('choose a monpoke', () => {
    newPlayer.create(new Monpoke('Pikachu', 2, 10), 'TeamTest');
    newPlayer.iChooseYou('Pikachu');
    expect(newPlayer.chosenMonpoke).toBeInstanceOf(Monpoke);
    expect(newPlayer.chosenMonpoke.name).toBe('Pikachu');
  });
});
