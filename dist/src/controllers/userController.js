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
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const user_1 = require("../models/user");
const company_1 = require("../models/company");
// Create new user
const createUser = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    const user = Object.assign({}, req.body);
    user_1.User.create(user)
        .then((data) => {
        res.status(200).json({
            status: "success",
            message: "User successfully created",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a user. " + err.message,
            payload: null,
        });
    });
};
exports.createUser = createUser;
// Get all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.User.findAll({
            attributes: { exclude: ["companyId"] },
            include: [{ model: company_1.Company, attributes: ["id", "name"] }],
        });
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json({
            message: "Error getting users",
            error
        });
    }
});
exports.getAllUsers = getAllUsers;
// Get user by id
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const user = yield user_1.User.findByPk(id, {
            attributes: { exclude: ["companyId"] },
            include: [{ model: company_1.Company, attributes: ["id", "name"] }],
        });
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).json({
            message: "Error getting user",
            error
        });
    }
});
exports.getUserById = getUserById;
// Update user
const updateUser = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    user_1.User.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "User successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "error",
                message: "Something happened updating the user.",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a user. " + err.message,
            payload: null,
        });
    });
};
exports.updateUser = updateUser;
// Delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield user_1.User.destroy({ where: { id } });
        res.status(200).json({
            message: "User deleted"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting user",
            error,
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map