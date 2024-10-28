import { Medico } from './interface';
import { mockMedicos } from './mocks';

export const getAgendasService = async (): Promise<Medico[]> => {
  return mockMedicos;
};
