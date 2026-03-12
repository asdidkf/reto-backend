"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompany = exports.updateCompany = exports.getCompanyById = exports.getAllCompanies = exports.createCompany = void 0;
const company_1 = require("../models/company");
const user_1 = require("../models/user");
//Create new company 
const createCompany = (req, res) => {
    //Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    // Save Company in the database 
    const company = Object.assign({}, req.body);
    company_1.Company.create(company)
        .then((data) => {
        res.status(200).json({
            status: "success",
            message: "Product successfully created",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a product. " + err.message,
            payload: null,
        });
    });
};
exports.createCompany = createCompany;
// Get all companies 
const getAllCompanies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companies = yield company_1.Company.findAll({
            include: [{
                    model: user_1.User,
                    attributes: { exclude: ["password", "companyId", "createdAt", "updatedAt"] }
                }]
        });
        return res.status(200).json(companies);
    }
    catch (error) {
        return res.status(500).json({
            "message": "Error getting products",
            error
        });
    }
});
exports.getAllCompanies = getAllCompanies;
// Get company by Id 
const getCompanyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const company = yield company_1.Company.findByPk(id, {
            include: [{
                    model: user_1.User,
                    attributes: { exclude: ["password", "companyId", "createdAt", "updatedAt"] }
                }]
        });
        return res.status(200).json(company);
    }
    catch (error) {
        return res.status(500).json({
            "message": "Error getting products",
            error
        });
    }
});
exports.getCompanyById = getCompanyById;
// Modify company 
const updateCompany = (req, res) => {
    // Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save Company in the database 
    company_1.Company.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Product successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "error",
                message: "Something happened updating the product. ",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a product. " + err.message,
            payload: null,
        });
    });
};
exports.updateCompany = updateCompany;
// Delete a Product with the specified id in the request 
const deleteCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield company_1.Company.destroy({ where: { id } });
        res.status(200).json({ message: "Product deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting products",
            error,
        });
    }
});
exports.deleteCompany = deleteCompany;
//# sourceMappingURL=companyController.js.map