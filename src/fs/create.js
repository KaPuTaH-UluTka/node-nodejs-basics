import fs from 'fs';
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const create = async () => {
    await fs.access(__dirname + '/files/fresh.txt', (async err => {
        if (!err) console.error(Error('FS operation failed'))
        else await fs.appendFile(__dirname + '/files/fresh.txt', 'I am fresh and young', (() => {
        }));
    }))
}

await create();





