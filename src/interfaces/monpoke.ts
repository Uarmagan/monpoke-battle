export interface IMonpoke {
  hitpoints: number;
  attackPower: number;

  attack(): string;
  takeDamage(attackHitPoints): string;
}
