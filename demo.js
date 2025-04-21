import { fileURLToPath } from "url";
import path from "path";

const _filepath = fileURLToPath(import.meta.url);

const _dirname = path.dirname(_filepath);

console.log(_dirname);
