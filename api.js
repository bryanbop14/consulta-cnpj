// URL base da API
const API_BASE_URL = import.meta.env.PROD 
  ? '/api' 
  : 'https://5000-ivqutlrwtlg842tj9t00u-07af5fe8.manusvm.computer/api';

/**
 * Busca dados de uma empresa por CNPJ ou CNAE
 * @param {Object} params - Parâmetros de busca
 * @param {string} params.tipo - Tipo de busca ('cnpj' ou 'cnae')
 * @param {string} params.valor - Valor a ser buscado
 * @returns {Promise<Object>} - Dados da empresa ou erro
 */
export const searchCompany = async (params) => {
  try {
    const queryParams = new URLSearchParams({
      tipo: params.tipo,
      valor: params.valor
    });
    
    const response = await fetch(`${API_BASE_URL}/search?${queryParams}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('CNPJ não encontrado na base de dados.');
      }
      throw new Error('Erro ao consultar dados.');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
};

/**
 * Busca dados de uma empresa diretamente pelo CNPJ
 * @param {string} cnpj - CNPJ da empresa
 * @returns {Promise<Object>} - Dados da empresa ou erro
 */
export const getCnpj = async (cnpj) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cnpj/${cnpj}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('CNPJ não encontrado na base de dados.');
      }
      throw new Error('Erro ao consultar dados.');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
};

/**
 * Busca empresas por CNAE
 * @param {string} cnae - Código CNAE
 * @returns {Promise<Object>} - Lista de empresas ou erro
 */
export const getCnae = async (cnae) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cnae/${cnae}`);
    
    if (!response.ok) {
      throw new Error('Erro ao consultar dados.');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
};

