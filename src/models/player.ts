import { exit } from 'process';
import { IMonpoke } from '../interfaces/monpoke';
import { IPlayer } from '../interfaces/player';
export class Player implements IPlayer {
  monpokeGroup: IMonpoke[] = [];
  chosenMonpoke: IMonpoke;
  teamName: string;
  turn: boolean;

  create(monpoke: IMonpoke, teamName: string): string {
    if (!this.teamName) {
      this.teamName = teamName;
    }
    this.monpokeGroup.push(monpoke);
    return `${monpoke.name} has been assigned to team ${teamName}`;
  }

  iChooseYou(monpokeName: string): string {
    this.chosenMonpoke = this.monpokeGroup.find(
      (monpoke) => monpoke.name === monpokeName,
    );
    if (this.chosenMonpoke === undefined) exit(1);

    return `${this.chosenMonpoke}`;
  }
}
