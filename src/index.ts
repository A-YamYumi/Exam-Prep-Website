import express from "express";
import router from "./modules/pageHandler";

const app = express();
const port = 5000;

app.use(express.static(`${__dirname}/public`));

app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});