import fs from "fs/promises";
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const isExist = async (path) => {
    try {
        await fs.access(path);

        return true;
    } catch {
        return false;
    }
};

export const rename = async () => {
    try {
        const filePath = await isExist(__dirname + '/files/wrongFilename.txt')
        const newFilePath = await isExist(__dirname + '/files/properFilename.md');

        if (newFilePath || !filePath) {
            throw new Error('FS operation failed');
        }

        await fs.rename(__dirname + '/files/wrongFilename.txt', __dirname + '/files/properFilename.md')

    } catch (err) {
        console.error(err)
    }
}
await rename();
