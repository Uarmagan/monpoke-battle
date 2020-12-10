import { exit } from 'process';
import { IMonpoke } from '../interfaces/monpoke';
import { IPlayer } from '../interfaces/player';
import { Monpoke } from './monpoke';
export class Player implements IPlayer {
  monpokeGroup: IMonpoke[] = [];
  chosenMonpoke: IMonpoke;
  teamName: string;
  turn: boolean;

  create(teamName: string, monpokeName: string, hp: number, ap: number): void {
    if (!this.teamName) {
      this.teamName = teamName;
    }
    this.monpokeGroup.push(new Monpoke(monpokeName, hp, ap));
  }

  iChooseYou(monpokeName: string): void {
    this.chosenMonpoke = this.monpokeGroup.find(
      (monpoke) => monpoke.name === monpokeName,
    );
    if (this.chosenMonpoke === undefined) exit(1);
  }
}
