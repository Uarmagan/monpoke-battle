import { IPlayer } from './interfaces/player';

export const commandArgs = {
  CREATE: (
    player: IPlayer,
    cmds: [string, string, number, number],
    enemyPlayer?: IPlayer,
  ): void => {
    const [teamName, monpokeName, hp, ap] = cmds;
    player.create(teamName, monpokeName, hp, ap);
    console.log(`${monpokeName} has been assigned to team ${teamName}!`);
  },
  ICHOOSEYOU: (
    player: IPlayer,
    commands?: string,
    enemyPlayer?: IPlayer,
  ): void => {
    player.iChooseYou(commands);
    console.log(`${commands} has entered the battle!`);
  },
  ATTACK: (player: IPlayer, commands?: string, enemyPlayer?: IPlayer): void => {
    const attackDamage = player.chosenMonpoke.getAttackDamage();
    enemyPlayer.chosenMonpoke.takeDamage(attackDamage);
    console.log(
      `${player.chosenMonpoke.name} attacked ${enemyPlayer.chosenMonpoke.name} for ${attackDamage} damage!`,
    );
  },
};
