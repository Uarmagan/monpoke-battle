import { IMonpoke } from '../interfaces/monpoke';
export class Monpoke implements IMonpoke {
  constructor(monpokeName: string, hitpoints: number, attackPower: number) {
    this.name = monpokeName;
    this.hitpoints = hitpoints;
    this.attackPower = attackPower;
  }

  name: string;
  hitpoints: number;
  attackPower: number;

  attack(): number {
    return this.attackPower;
  }

  takeDamage(damage: number): string {
    this.hitpoints -= damage;

    return `${this.name} got hit!`;
  }
}
