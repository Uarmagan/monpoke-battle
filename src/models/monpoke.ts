import { IMonpoke } from '../interfaces/monpoke';
export class Monpoke implements IMonpoke {
  constructor(monpokeName, hitpoints, attackPower) {
    this.monkpokeName = monpokeName;
    this.hitpoints = hitpoints;
    this.attackPower = attackPower;
  }

  monkpokeName: string;
  hitpoints: number;
  attackPower: number;

  attack(): string {
    return 'monpoke attacked!';
  }

  takeDamage(attackHitPoints): string {
    this.hitpoints -= attackHitPoints;
    return `${this.monkpokeName} got hit!`;
  }
}
