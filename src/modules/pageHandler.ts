import { Router, Request, Response } from "express";
import { resolveFilePath } from "./fileResolver";
import path from "path";

const router = Router();
const pageDir = '../public/pages/';

function errorResponse(res: Response) {
    res.redirect('/');
}

router.get("/", async (req: Request, res: Response) => {
    try {
        const filePath = await resolveFilePath({ baseDir: pageDir, path: 'index' });
        if (filePath) {
            res.sendFile(filePath);
        } else {
            errorResponse(res);
        }
    } catch (error) {
        console.error(error);
        errorResponse(res);
    }
});


router.get("/:category?/*", async (req: Request, res: Response) => {
    const { category, 0: page } = req.params;

    const htmlPath = path.join((category) ? category : '', page)

    try {
        const filePath = await resolveFilePath({ baseDir: pageDir, path: htmlPath });

        if (filePath) {
            res.sendFile(filePath);
        } else {
            errorResponse(res);
        }
    } catch (error) {
        console.error(error);
        errorResponse(res);
    }
});

export default router;
// use once decided when having a default landing page

// router.get("/", async (req: Request, res: Response) => {
//     try {
//         const filePath = await resolveFilePath(undefined, 'index');

//         if (filePath) {
//             res.sendFile(filePath);
//         } else {
//             res.status(404).send("Index page not found!");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Server error!");
//     }
// });