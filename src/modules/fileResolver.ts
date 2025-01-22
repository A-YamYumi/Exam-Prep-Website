import { promisify } from "util";
import glob from "glob";
import path from "path";
import { headerParameter } from "../interfaces/parameter";

const globPromise = promisify(glob);

/**
 * @param category
 * @param page
 * @param baseDir
 */
export async function resolveFilePath(param: headerParameter): Promise<string | null> {
    try {
        let filePaths: string[];
        //Check if catagory exist
        const pathPattern = path.join(__dirname, param.baseDir, `${param.path}.html`);
        filePaths = await globPromise(pathPattern);

        if (filePaths.length > 0) return path.resolve(filePaths[0]);

        return null;
    } catch (error) {
        console.error('Error resolving file path:', error);
        return null;
    }
}
