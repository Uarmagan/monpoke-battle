import { IAttack } from '../interfaces/attack';
import { IMonpoke } from '../interfaces/monpoke';

export class AttackService implements IAttack {
  monpokeAttack(attacker: IMonpoke, defender: IMonpoke): string {
    defender.takeDamage(attacker.attack());
    return 'got attacked';
  }
}
