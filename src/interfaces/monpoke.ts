export interface IMonpoke {
  hitpoints: number;
  attackPower: number;
  name: string;

  attack(): string;
  takeDamage(attackHitPoints): string;
}
