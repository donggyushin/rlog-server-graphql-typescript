"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_graphql_1 = __importDefault(require("express-graphql"));
var fs_1 = __importDefault(require("fs"));
var graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
var cors_1 = __importDefault(require("cors"));
var schema_1 = __importDefault(require("./schema"));
require("./mongoose/mongoose");
require("./models");
var dotenv_1 = __importDefault(require("dotenv"));
var restApi_1 = __importDefault(require("./restApi"));
var http_1 = __importDefault(require("http"));
var https_1 = __importDefault(require("https"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var env = process.env.NODE_ENV || 'dev';
console.log(__dirname);
var key = fs_1.default.readFileSync(__dirname + '/secret/privkey.pem');
var cert = fs_1.default.readFileSync(__dirname + '/secret/cert.pem');
var chain = fs_1.default.readFileSync(__dirname + '/secret/chain.pem');
var credentials = {
    key: key,
    cert: cert,
    ca: chain
};
dotenv_1.default.config();
var app = express_1.default();
app.use(express_fileupload_1.default({
    useTempFiles: true
}));
var httpServer = http_1.default.createServer(app);
var httpsServer = https_1.default.createServer(credentials, app);
var PORT = process.env.PORT;
// Allow cross-origin requests
app.use(cors_1.default());
app.use('/api', restApi_1.default);
app.use('/graphql', express_graphql_1.default({
    schema: schema_1.default,
    graphiql: true
}));
// Add graphql playground middleware into express middleware
app.use('/playground', graphql_playground_middleware_express_1.default({
    endpoint: '/graphql'
}));
if (env === 'dev') {
    httpServer.listen(PORT, function () { return console.log("Graphql server listening on port " + PORT); });
}
else {
    httpsServer.listen(PORT, function () { return console.log("Graphql server listening on port " + PORT); });
}
