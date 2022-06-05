import {spawn} from 'child_process'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const spawnChildProcess = async (args) => {
    const scriptPath = __dirname + '/files/script.js'
    const child = spawn('node', [scriptPath, ...args]);
    child.stdout.on('data', data => process.stdout.write(data));
    process.stdin.on('data', data => child.stdin.write(data));

};
await spawnChildProcess(['someString', 'anotherString', 1, 22, 333])

