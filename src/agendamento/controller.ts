import { APIGatewayProxyHandler } from 'aws-lambda';
import { postAgendamentoService } from './service';

export const postAgendamento: APIGatewayProxyHandler = async (event) => {
  const payload = JSON.parse(event.body || '{}');
  const result = await postAgendamentoService(payload);

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result),
  };
};
