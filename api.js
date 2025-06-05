const API_BASE_URL = 'https://publica.cnpja.com.br';

export const searchCompany = async (params) => {
  try {
    const { tipo, valor } = params;

    if (tipo !== 'cnpj') {
      throw new Error('Tipo de consulta inválido. Use "cnpj".');
    }

    const response = await fetch(`${API_BASE_URL}/${tipo}/${valor}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('CNPJ não encontrado.');
      }
      throw new Error('Erro na consulta à API.');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error.message);
    throw error;
  }
};
