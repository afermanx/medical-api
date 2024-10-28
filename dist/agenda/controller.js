"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgendas = void 0;
const service_1 = require("./service");
const getAgendas = async () => {
    const agendas = await (0, service_1.getAgendasService)();
    return {
        statusCode: 200,
        body: JSON.stringify({ medicos: agendas }),
    };
};
exports.getAgendas = getAgendas;
