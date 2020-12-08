export interface IMonpoke {
  hitpoints: number;
  attackPower: number;
  name: string;

  getAttackDamage(): number;
  takeDamage(damage): string;
}
