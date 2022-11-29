import fs from 'fs';
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const write = async () => {
    const stream = fs.createWriteStream(__dirname + '/files/fileToWrite.txt');
    process.stdin.pipe(stream);
};

await write();
