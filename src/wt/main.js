import {Worker} from "worker_threads";
import {cpus} from "os";
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const workerPromise = (index, workerData) => () => new Promise((resolve) => {
    const worker = new Worker(__dirname + "/worker.js", {
        workerData,
    });

    worker.on("error", (error) => {
        resolve({ workerId: index, data: null, status: "error" });
    });
    worker.on("message", (result) => {
        resolve({ workerId: index, data: result, status: "resolved" });
    });
});

export const performCalculations = async () => {
    const workers = [];
    for (let index = 0; index < cpus().length; index++) {
        workers.push(workerPromise(index + 1, 10 + index));
    }

    return await Promise.all(workers.map((worker) => worker()));
};

console.log(await performCalculations());

