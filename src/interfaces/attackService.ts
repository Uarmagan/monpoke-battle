import { IMonpoke } from './monpoke';

export interface IAttackService {
  monpokeAttack(attacker: IMonpoke, defender: IMonpoke): string;
}
