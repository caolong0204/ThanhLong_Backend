const express = require("express");
require('dotenv').config();

const app = express();
const pathConfig = require("./path");
//sever port number
const PORT = process.env.PORT || 3000;

app.use(express.json());
console.log("dirname", __dirname);
global.__base = __dirname + "/";
global.__path_app = global.__base + pathConfig.folder_app + "/";
global.__path_models = __path_app + pathConfig.folder_models + "/";
global.__path_routers = __path_app + pathConfig.folder_routers + "/";
global.__path_configs = __path_app + pathConfig.folder_configs + "/";
global.__path_controllers = __path_app + pathConfig.folder_controllers + "/";

const route = require(__path_routers);
const db = require(__path_configs + "database");
db.connect();

route(app);

app.listen(PORT, () => console.log(`TL_BackEnd listening on port:${PORT}`));
