"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAgendamento = void 0;
const service_1 = require("./service");
const postAgendamento = async (event, context) => {
    const payload = JSON.parse(event.body || '{}');
    const result = await (0, service_1.postAgendamentoService)(payload);
    return {
        statusCode: result.statusCode || 200,
        body: JSON.stringify(result),
    };
};
exports.postAgendamento = postAgendamento;
