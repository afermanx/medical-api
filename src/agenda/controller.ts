import { APIGatewayProxyHandler } from 'aws-lambda';
import { getAgendasService } from './service';

export const getAgendas: APIGatewayProxyHandler = async () => {
  const agendas = await getAgendasService();
  return {
    statusCode: 200,
    body: JSON.stringify({ medicos: agendas }),
  };
};
