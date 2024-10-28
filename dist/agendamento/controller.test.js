"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
describe('postAgendamento', () => {
    it('should return status code 400 for invalid payload', async () => {
        const event = {
            body: JSON.stringify({}), // Coloque aqui um payload inválido
            // Adicione outras propriedades necessárias, como headers, pathParameters, etc.
        }; // Cast to any to suppress TypeScript errors
        const context = {}; // Crie um contexto mockado se necessário
        const result = await (0, controller_1.postAgendamento)(event, context);
        expect(result.statusCode).toBe(400);
        expect(JSON.parse(result.body).mensagem).toBe('Payload inválido');
    });
    it('should return status code 200 for valid payload', async () => {
        const event = {
            body: JSON.stringify({ /* Payload válido */}),
            // Adicione outras propriedades necessárias
        }; // Cast to any to suppress TypeScript errors
        const context = {}; // Crie um contexto mockado se necessário
        const result = await (0, controller_1.postAgendamento)(event, context);
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).mensagem).toBe('Agendamento realizado com sucesso');
    });
});
