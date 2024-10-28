"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const service_1 = require("./service");
// Mock do serviço
jest.mock('./service', () => ({
    postAgendamentoService: jest.fn(),
}));
describe('postAgendamento', () => {
    const event = {
        body: JSON.stringify({
            medico_id: 1,
            paciente_nome: 'Alex',
            data_horario: '2024-11-28T14:00:00Z',
        }),
        // Adicione outras propriedades necessárias para o mock do evento
        headers: {},
        httpMethod: 'POST',
        path: '/agendamento',
        isBase64Encoded: false,
        queryStringParameters: null,
        pathParameters: null,
        stageVariables: null,
        requestContext: null,
        resource: '',
    };
    it('deve retornar 400 se o payload for inválido', async () => {
        service_1.postAgendamentoService.mockResolvedValue({
            statusCode: 400,
            body: { mensagem: 'Payload inválido' },
        });
        const result = await (0, controller_1.postAgendamento)(event);
        expect(result.statusCode).toBe(400);
        expect(JSON.parse(result.body).mensagem).toBe('Payload inválido');
    });
    it('deve retornar 404 se o médico não for encontrado', async () => {
        service_1.postAgendamentoService.mockResolvedValue({
            statusCode: 404,
            body: { mensagem: 'Médico não encontrado' },
        });
        const result = await (0, controller_1.postAgendamento)(event);
        expect(result.statusCode).toBe(404);
        expect(JSON.parse(result.body).mensagem).toBe('Médico não encontrado');
    });
    it('deve retornar 200 se o agendamento for criado com sucesso', async () => {
        service_1.postAgendamentoService.mockResolvedValue({
            statusCode: 200,
            body: {
                mensagem: 'Agendamento realizado com sucesso',
                agendamento: {
                    medico: 'Dr. João Silva',
                    paciente: 'Alex',
                    data_horario: new Date('2024-11-28T14:00:00Z').toISOString(),
                },
            },
        });
        const result = await (0, controller_1.postAgendamento)(event);
        expect(result.statusCode).toBe(200);
        const body = JSON.parse(result.body);
        expect(body.mensagem).toBe('Agendamento realizado com sucesso');
        expect(body.agendamento.medico).toBe('Dr. João Silva');
        expect(body.agendamento.paciente).toBe('Alex');
        expect(body.agendamento.data_horario).toBe(new Date('2024-11-28T14:00:00Z').toISOString());
    });
});
