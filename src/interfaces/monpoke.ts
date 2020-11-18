export interface IMonpoke {
  hitpoints: number;
  attackPower: number;
  name: string;

  attack(): number;
  takeDamage(damage): string;
}
