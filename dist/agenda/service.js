"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgendasService = void 0;
const mocks_1 = require("./mocks");
const getAgendasService = async () => {
    return mocks_1.mockMedicos;
};
exports.getAgendasService = getAgendasService;
