import { IMonpoke } from './monpoke';

export interface IAttack {
  monpokeAttack(attacker: IMonpoke, defender: IMonpoke): string;
}
