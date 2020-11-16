import { IMonpoke } from '../interfaces/monpoke';
export interface IPlayer {
  monpoke: IMonpoke[];
  chosenMonpoke: IMonpoke;
  teamName: string;
  turn: boolean;

  create(monpoke: IMonpoke, teamName: string): string;
  iChooseYou(monpokeName: string): string;
}
