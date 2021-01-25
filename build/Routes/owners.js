"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const owners_1 = __importDefault(require("../Controllers/owners"));
const ownersRouter = express_1.default.Router();
ownersRouter.get('/', owners_1.default.getAllOwners);
ownersRouter.post('/', owners_1.default.addOwner);
ownersRouter.put('/:id', owners_1.default.updateOwner);
ownersRouter.delete('/:id', owners_1.default.deletOwner);
exports.default = ownersRouter;
