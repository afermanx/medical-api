"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAgendamentoService = void 0;
const mocks_1 = require("../agenda/mocks");
const postAgendamentoService = async (payload) => {
    if (!payload.medico_id || !payload.paciente_nome || !payload.data_horario) {
        return {
            statusCode: 400,
            body: JSON.stringify({ mensagem: 'Payload inválido' }),
        };
    }
    const medico = mocks_1.mockMedicos.find((m) => m.id === payload.medico_id);
    if (!medico) {
        return {
            statusCode: 400,
            body: JSON.stringify({ mensagem: 'Medico nao encontrado' }),
        };
    }
    return {
        statusCode: 200,
        body: [
            {
                mensagem: 'Agendamento realizado com sucesso',
                agendamento: {
                    medico: medico.nome,
                    paciente: payload.paciente_nome,
                    data_horario: payload.data_horario,
                },
            }
        ],
    };
};
exports.postAgendamentoService = postAgendamentoService;
