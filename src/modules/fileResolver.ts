import { promisify } from "util";
import glob from "glob";
import path from "path";

const globPromise = promisify(glob);

/**
 * @param category
 * @param page
 * @param baseDir
 */
export async function resolveFilePath(category: string | undefined, page: string, baseDir: string = '../public/pages'): Promise<string | null> {
    try {
        let filePaths: string[];
        if (category) {
            const pathPattern = path.join(__dirname, baseDir, category, `${page}.html`);
            filePaths = await globPromise(pathPattern);
        } else {
            const pathPattern = path.join(__dirname, baseDir, `${page}.html`);
            filePaths = await globPromise(pathPattern);
        }

        if (filePaths.length > 0) return path.resolve(filePaths[0]);

        return null;
    } catch (error) {
        console.error('Error resolving file path:', error);
        return null;
    }
}
