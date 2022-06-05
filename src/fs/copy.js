import fs from 'fs/promises';
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const copy = async () => {
    try {
        const files = await fs.readdir(__dirname + '/files')
        await fs.mkdir(__dirname + '/files_copy');
        for(const file of files){
            await fs.appendFile(__dirname + '/files_copy/' + file, '');
            await fs.copyFile(__dirname + '/files/' + file, __dirname + '/files_copy/' + file);
        }
    } catch (err) {
        console.error(Error('FS operation failed'))
    }
}
await copy();
