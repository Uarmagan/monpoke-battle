import { IMonpoke } from '../interfaces/monpoke';
import { Monpoke } from './monpoke';

describe('monpoke', () => {
  let newMonpoke: IMonpoke;

  beforeEach(() => {
    newMonpoke = new Monpoke('Charmander', 10, 3);
  });

  test('Be initialized', () => {
    expect(newMonpoke).toBeInstanceOf(Monpoke);
    expect(newMonpoke.name).toBe('Charmander');
    expect(newMonpoke.hitpoints).toBe(10);
    expect(newMonpoke.attackPower).toBe(3);
  });
});
