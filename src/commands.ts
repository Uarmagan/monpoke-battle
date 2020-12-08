import { Player } from './models/player';
export const commands = {
  create: (player: Player, commands: string): void => {
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
};

export const splitCommands = (args: string): any => {
  return args.split(' ').map((cmd) => (isNaN(+cmd) ? cmd : +cmd));
};
