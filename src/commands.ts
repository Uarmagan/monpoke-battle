import { IPlayer } from './interfaces/player';

export const commands = {
  create: (player: IPlayer, commands?: string, enemyPlayer?: IPlayer): void => {
    const cmds = splitCommands(commands);
    if (cmds.length !== 4) throw Error();
    const [teamName, monpokeName, hp, ap]: [
      string,
      string,
      number,
      number,
    ] = cmds;

    player.create(teamName, monpokeName, hp, ap);

    console.log(`${monpokeName} has been assigned to team ${teamName}!`);
  },
  iChooseYou: (
    player: IPlayer,
    commands?: string,
    enemyPlayer?: IPlayer,
  ): void => {
    player.iChooseYou(commands);
    console.log(`${commands} has entered the battle!`);
  },
  attack: (player: IPlayer, commands?: string, enemyPlayer?: IPlayer): void => {
    const attackDamage = player.chosenMonpoke.getAttackDamage();
    enemyPlayer.chosenMonpoke.takeDamage(attackDamage);
    console.log(
      `${player.chosenMonpoke.name} attacked ${enemyPlayer.chosenMonpoke.name} for ${attackDamage} damage!`,
    );
  },
};

export const splitCommands = (args: string): any => {
  return args.split(' ').map((cmd) => (isNaN(+cmd) ? cmd : +cmd));
};
