import { IMonpoke } from '../interfaces/monpoke';
import { IPlayer } from '../interfaces/player';
export class Player implements IPlayer {
  monpokeGroup: IMonpoke[] = [];
  chosenMonpoke: IMonpoke;
  teamName: string;
  turn: boolean;

  create(monpoke: IMonpoke, teamName: string): string {
    this.monpokeGroup.push(monpoke);
    return `name: ${teamName} and ${monpoke.name} created`;
  }

  iChooseYou(monpokeName): string {
    this.chosenMonpoke = this.monpokeGroup.find(
      (monpoke) => monpoke.name === monpokeName,
    );

    return `I choose you, ${monpokeName}`;
  }
}
