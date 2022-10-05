import dotenv from 'dotenv';
import express from 'express';
import user from './route/user.route';
import nft from './route/nft.route';
import cors from "cors";
import helmet from 'helmet';
import './lib/database';
dotenv.config();

const app: any = express();
app.use(helmet());
app.use(cors());
app.use(user);
app.use(nft);

const http = require("http").Server(app);

http.listen(process.env.PORT, function() {
    console.log(`listening on *:${process.env.PORT}`);
});

export default app;