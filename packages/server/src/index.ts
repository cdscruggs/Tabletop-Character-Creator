import express from "express";
import { createCluster } from "./util/cluster";
import { getLogger } from "./util/logger";
import { requestTime } from "./util/logger/timing";

async function initWorker() {
    const PORT = 5001;

    const app = express();
    app.use(requestTime);
    app.get("/_debug", (req, res) => {
        res.send("Hello World!");
    });

    app.listen(PORT, () => {
        getLogger("Chris.Init").info("Server successfully started", "Listen");
    });
}

createCluster(initWorker);
