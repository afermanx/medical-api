"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../agenda/controller");
const controller_2 = require("../agendamento/controller");
const service_1 = require("../agenda/service");
const service_2 = require("../agendamento/service");
const mocks_1 = require("../agenda/mocks");
const aws_lambda_mock_context_1 = __importDefault(require("aws-lambda-mock-context"));
jest.mock('../agenda/service');
jest.mock('../agendamento/service');
describe('Agenda Handlers', () => {
    const ctx = (0, aws_lambda_mock_context_1.default)(); // Contexto mock
    const callback = jest.fn(); // Callback mock
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should return agendas', async () => {
        service_1.getAgendasService.mockResolvedValue(mocks_1.mockMedicos);
        const event = {
            httpMethod: 'GET',
            path: '/agendas',
            body: null,
            headers: {},
            pathParameters: null,
            queryStringParameters: null,
            multiValueQueryStringParameters: null,
            requestContext: {
                accountId: '123456789012',
                apiId: '1234567890',
                domainName: 'test.execute-api.us-east-1.amazonaws.com',
                domainPrefix: 'test',
                httpMethod: 'GET',
                path: '/agendas',
                stage: 'test',
                requestId: 'c8u5m2u6s0',
                requestTimeEpoch: Date.now(),
                resourceId: 'abc123',
                resourcePath: '/agendas',
                identity: {
                    cognitoIdentityPoolId: null,
                    accountId: null,
                    cognitoIdentityId: null,
                    caller: null,
                    sourceIp: '127.0.0.1',
                    principalOrgId: null,
                    accessKey: null,
                    userArn: null,
                    userAgent: 'PostmanRuntime/7.26.8',
                    user: null,
                },
            },
            resource: '',
        };
        const result = await (0, controller_1.getAgendas)(event, ctx, callback); // Passa os 3 argumentos
        expect(result).toEqual({
            statusCode: 200,
            body: JSON.stringify({ medicos: mocks_1.mockMedicos }),
        });
        expect(service_1.getAgendasService).toHaveBeenCalledTimes(1);
    });
    it('should create an agendamento', async () => {
        const payload = { doctorId: 1, date: '2024-10-05 09:00' };
        const mockResponse = { statusCode: 201, message: 'Agendamento criado com sucesso' };
        service_2.postAgendamentoService.mockResolvedValue(mockResponse);
        const event = {
            body: JSON.stringify(payload),
            httpMethod: 'POST',
            path: '/agendamento',
            headers: {},
            pathParameters: null,
            queryStringParameters: null,
            multiValueQueryStringParameters: null,
            requestContext: {
                accountId: '123456789012',
                apiId: '1234567890',
                domainName: 'test.execute-api.us-east-1.amazonaws.com',
                domainPrefix: 'test',
                httpMethod: 'POST',
                path: '/agendamento',
                stage: 'test',
                requestId: 'c8u5m2u6s0',
                requestTimeEpoch: Date.now(),
                resourceId: 'abc123',
                resourcePath: '/agendamento',
                identity: {
                    cognitoIdentityPoolId: null,
                    accountId: null,
                    cognitoIdentityId: null,
                    caller: null,
                    sourceIp: '127.0.0.1',
                    principalOrgId: null,
                    accessKey: null,
                    userArn: null,
                    userAgent: 'PostmanRuntime/7.26.8',
                    user: null,
                },
            },
            resource: '',
        };
        const result = await (0, controller_2.postAgendamento)(event, ctx, callback); // Passa os 3 argumentos
        expect(result).toEqual({
            statusCode: mockResponse.statusCode,
            body: JSON.stringify(mockResponse),
        });
        expect(service_2.postAgendamentoService).toHaveBeenCalledWith(payload);
    });
});
