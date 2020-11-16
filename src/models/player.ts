import { IMonpoke } from '../interfaces/monpoke';
import { IPlayer } from '../interfaces/player';
export class Player implements IPlayer {
  monpoke: IMonpoke[];
  chosenMonpoke: IMonpoke;
  teamName: string;
  turn: boolean;

  create(monpoke: IMonpoke, teamName: string) {
    return `name: ${teamName} and ${monpoke.name} created`;
  }

  iChooseYou(monpokeName) {
    return `I choose you, ${monpokeName}`;
  }
}
