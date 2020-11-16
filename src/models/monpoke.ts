import { IMonpoke } from '../interfaces/monpoke';
export class Monpoke implements IMonpoke {
  constructor(monpokeName, hitpoints, attackPower) {
    this.name = monpokeName;
    this.hitpoints = hitpoints;
    this.attackPower = attackPower;
  }

  name: string;
  hitpoints: number;
  attackPower: number;

  attack(): string {
    return 'monpoke attacked!';
  }

  takeDamage(attackHitPoints): string {
    this.hitpoints -= attackHitPoints;
    return `${this.name} got hit!`;
  }
}
