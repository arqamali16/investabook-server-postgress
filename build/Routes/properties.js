"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const properties_1 = __importDefault(require("../Controllers/properties"));
const propertyRouter = express_1.default.Router();
propertyRouter.get('/', properties_1.default.getAllProperties);
propertyRouter.post('/', properties_1.default.addProperty);
propertyRouter.put('/:paymentId', properties_1.default.updateProperty);
propertyRouter.delete('/:paymentId', properties_1.default.deletProperty);
propertyRouter.get('/:paymentId', properties_1.default.deletProperty);
exports.default = propertyRouter;
