import { AgendamentoDTO } from './dto';
import {mockMedicos} from '../agenda/mocks';

export const postAgendamentoService = async (
  payload: AgendamentoDTO
) => {
  if (!payload.medico_id || !payload.paciente_nome || !payload.data_horario) {
    return {
      statusCode: 400,
      body: JSON.stringify({ mensagem: 'Payload inválido' }),
    };
  }
  const medico = mockMedicos.find((m) => m.id === payload.medico_id);
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
