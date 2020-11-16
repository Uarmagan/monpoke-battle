import { promises as fs } from 'fs';
async function readFile() {
  try {
    // read contents of the file
    const data = await fs.readFile(process.argv[2], 'utf8');
    // split the contents by new line
    const lines = data.split(/\r?\n/);
    // print all lines
    lines.forEach((line) => {});
  } catch (err) {
    console.error(err);
  }
}

readFile();
