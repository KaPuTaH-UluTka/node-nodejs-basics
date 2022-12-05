import fs from "fs/promises";
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const remove = async () => {
    try {
        await fs.unlink(__dirname + '/files/fileToRemove.txt')
    } catch (err) {
        console.error(Error('FS operation failed'))
    }
};
await remove();
