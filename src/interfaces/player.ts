import { IMonpoke } from '../interfaces/monpoke';
export interface IPlayer {
  monpokeGroup: IMonpoke[];
  chosenMonpoke: IMonpoke;
  teamName: string;
  turn: boolean;

  create(teamName: string, monpokeName: string, hp: number, ap: number): string;
  iChooseYou(monpokeName: string): string;
}
