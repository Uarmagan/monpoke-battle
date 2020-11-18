import { IAttackService } from '../interfaces/attackService';
import { IMonpoke } from '../interfaces/monpoke';

export class AttackService implements IAttackService {
  monpokeAttack(attacker: IMonpoke, defender: IMonpoke): string {
    defender.takeDamage(attacker.attack());
    return `${attacker.name} attacked ${defender.name} for ${attacker.attackPower} damage`;
  }
}
