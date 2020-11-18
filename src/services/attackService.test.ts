import { IAttackService } from '../interfaces/attackService';
import { IMonpoke } from '../interfaces/monpoke';
import { Monpoke } from '../models/monpoke';
import { AttackService } from './attackService';

describe('attack', () => {
  let attacker: IMonpoke;
  let defender: IMonpoke;
  let attack: IAttackService;

  beforeEach(() => {
    attack = new AttackService();
    attacker = new Monpoke('pikachu', 10, 5);
    defender = new Monpoke('Charmander', 10, 3);
  });

  test('Be initalized', () => {
    expect(attack).toBeInstanceOf(AttackService);
  });

  test('Monpoke attack', () => {
    attack.monpokeAttack(attacker, defender);
    expect(defender.hitpoints).toBe(5);
  });
});
