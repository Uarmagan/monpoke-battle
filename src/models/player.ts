import { exit } from 'process';
import { IMonpoke } from '../interfaces/monpoke';
import { IPlayer } from '../interfaces/player';
import { Monpoke } from './monpoke';
export class Player implements IPlayer {
  monpokeGroup: IMonpoke[] = [];
  chosenMonpoke: IMonpoke;
  teamName: string;
  turn: boolean;

  create(
    teamName: string,
    monpokeName: string,
    hp: number,
    ap: number,
  ): string {
    if (!this.teamName) {
      this.teamName = teamName;
    }
    this.monpokeGroup.push(new Monpoke(monpokeName, hp, ap));
    return `${monpokeName} has been assigned to team ${teamName}`;
  }

  iChooseYou(monpokeName: string): string {
    this.chosenMonpoke = this.monpokeGroup.find(
      (monpoke) => monpoke.name === monpokeName,
    );
    if (this.chosenMonpoke === undefined) exit(1);

    return `${this.chosenMonpoke}`;
  }
}
