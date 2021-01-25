"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const owners_1 = __importDefault(require("./Routes/owners"));
const properties_1 = __importDefault(require("./Routes/properties"));
const payments_1 = __importDefault(require("./Routes/payments"));
const tenants_1 = __importDefault(require("./Routes/tenants"));
const port = process.env.PORT || 6000;
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/owner', owners_1.default);
app.use('/payment', payments_1.default);
app.use('/tenant', tenants_1.default);
app.use('/property', properties_1.default);
app.use('/', (req, res) => {
    res.send('<h1>Connected to Investabook-Server</h1>');
});
app.use((req, res) => {
    res.status(400).send('<h1>Page not found</h1>');
});
app.listen(port, () => {
    console.log(`Conncted to port ${port}`);
});
