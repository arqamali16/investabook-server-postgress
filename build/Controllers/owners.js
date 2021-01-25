"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const getAllOwners = (req, res) => {
    db_1.default.query('SELECT * FROM owners', (err, dbRes) => {
        if (err)
            console.log('owners error', err);
        res.send(dbRes.rows);
        console.log(dbRes.rows);
    });
};
const addOwner = (req, res) => {
    // const { name, email, password } = req.body;
    // pool.query('INSERT INTO users(name,email,password) VALUES($1,$2,$3)', [name, email, password], (err, dbRes) => {
    // 	if (err) console.log('error', err);
    // 	res.send(dbRes.rows);
    // });
};
const getOwnersDetail = (req, res) => {
    // const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    // const token = jwt.sign({ id: 1234 }, 'secret', {
    // 	expiresIn: 86400, // expires in 24 hours
    // });
    // res.status(200).send({ auth: true, token });
};
const updateOwner = (req, res) => {
    // const { id } = req.params;
    // const { name, email, password } = req.body;
    // pool.query(
    // 	'UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4',
    // 	[name, email, password, id],
    // 	(err, dbRes) => {
    // 		if (err) res.send(err);
    // 		res.send('Details updated succesfully!');
    // 	},
    // );
};
const deletOwner = () => { };
exports.default = { getAllOwners, addOwner, getOwnersDetail, updateOwner, deletOwner };
