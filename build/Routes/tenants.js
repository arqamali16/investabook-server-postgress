"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tenants_1 = __importDefault(require("../Controllers/tenants"));
const tenantRouters = express_1.default.Router();
tenantRouters.get('/', tenants_1.default.getAllTenants);
tenantRouters.post('/', tenants_1.default.addTenant);
tenantRouters.put('/:paymentId', tenants_1.default.updateTenant);
tenantRouters.delete('/:paymentId', tenants_1.default.deletTenant);
// tenantRouter.get('/:paymentId', tenantController.deletProperty);
exports.default = tenantRouters;
