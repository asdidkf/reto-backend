"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyRouter = (0, express_1.Router)();
companyRouter.get('/', (req, res) => {
    res.send('Get a list of all companies');
});
companyRouter.get('/:id', (req, res) => {
    res.send(`Get the company with id:  ${req.params.id}`);
});
companyRouter.post('/', (req, res) => {
    res.send(`Add a new company with ID: ${req.body.id}`);
});
companyRouter.patch('/:id', (req, res) => {
    res.send(`Update the data of company ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and ${req.body.stock}`);
});
companyRouter.delete('/', (req, res) => {
    res.send(`Deleting the company ${req.body.id}`);
});
exports.default = companyRouter;
//# sourceMappingURL=companyRoutes.js.map