"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const payments_1 = __importDefault(require("../Controllers/payments"));
const paymentRouters = express_1.default.Router();
paymentRouters.get('/', payments_1.default.getAllPayments);
paymentRouters.post('/', payments_1.default.addPayment);
paymentRouters.put('/:paymentId', payments_1.default.updatePayment);
paymentRouters.delete('/:paymentId', payments_1.default.deletPayment);
paymentRouters.get('/:paymentId', payments_1.default.deletPayment);
exports.default = paymentRouters;
