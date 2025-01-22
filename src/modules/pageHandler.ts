import express, { Request, Response } from "express";
import { resolveFilePath } from "./fileResolver";

const router = express.Router();
const pagesDir = '../public/pages'

router.get('/', (req: Request, res: Response) => {
    res.redirect('/subject')
})


router.get("/:category?/*", async (req: Request, res: Response) => {
    const { category, 0: page } = req.params;

    try {
        const filePath = await resolveFilePath(category, page, pagesDir);

        if (filePath) {
            res.sendFile(filePath);
        } else {
            res.status(404).send("Page not found!");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error!");
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