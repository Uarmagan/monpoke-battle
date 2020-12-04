import { Player } from './models/player';
export const battle = {
  create: (commands: string) => {
    return commands;
  },
};

export const splitCommands = (args: string): (string | number)[] => {
  return args.split(' ').map((cmd) => (isNaN(+cmd) ? cmd : +cmd));
};
