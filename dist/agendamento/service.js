"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAgendamentoService = void 0;
const postAgendamentoService = async (payload) => {
    if (!payload.medico_id || !payload.paciente_nome || !payload.data_horario) {
        return {
            statusCode: 400,
            body: JSON.stringify({ mensagem: 'Payload inválido' }),
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
            mensagem: 'Agendamento realizado com sucesso',
            agendamento: {
                medico: 'Dr. João Silva',
                paciente: payload.paciente_nome,
                data_horario: payload.data_horario,
            },
        }),
    };
};
exports.postAgendamentoService = postAgendamentoService;
