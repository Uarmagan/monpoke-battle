import { promises as fs } from 'fs';
import { Player } from './models/player';
import { commandArgs } from './commands';
// import { commandArgs } from './commands';
// import { Player } from './models/player';
export async function readFile() {
  try {
    const playerOne = new Player();
    const playerTwo = new Player();
    const PlayerArr = [playerOne, playerTwo];
    // read contents of the file
    const data = await fs.readFile(process.argv[2], 'utf8');
    // split the contents by new line
    const lines = data
      .split(/\r?\n/)
      .filter((el) => el !== '')
      .map((el) => el.split(' ').map((cmd) => (isNaN(+cmd) ? cmd : +cmd)));

    lines.some((commandArr) => {
      const [action, ...args] = commandArr;
      commandArgs[action](playerOne, args, playerTwo);
      commandArgs[action](playerTwo, args, playerOne);
      console.log('turn done');
      console.log(playerOne.chosenMonpoke);

      return playerOne.chosenMonpoke.hitpoints <= 0;
    });
  } catch (err) {
    console.error(err);
  }
}

readFile();
