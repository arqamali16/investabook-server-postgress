"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = process.env.PORT || 6000;
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// const loginRouter  = require('./routes/log-routes')
// const paymentsRouter = require('./routes/payments')
// app.use('/admin',loginRouter)
// app.use('/payment',paymentsRouter)
app.use('/', (req, res) => {
    res.send('<h1>Connected to Investabook-Server</h1>');
});
app.use((req, res) => {
    res.status(400).send('<h1>Page not found</h1>');
});
app.listen(port, () => {
    console.log(`Conncted to port ${port}`);
});
