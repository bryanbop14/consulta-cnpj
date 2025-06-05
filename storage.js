/**
 * Chave para armazenar o histórico de consultas no localStorage
 */
const HISTORY_KEY = 'cnpj_consulta_history';

/**
 * Número máximo de itens no histórico
 */
const MAX_HISTORY_ITEMS = 20;

/**
 * Obtém o histórico de consultas do localStorage
 * @returns {Array} - Histórico de consultas
 */
export const getHistory = () => {
  try {
    const history = localStorage.getItem(HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Erro ao obter histórico:', error);
    return [];
  }
};

/**
 * Adiciona um item ao histórico de consultas
 * @param {Object} item - Item a ser adicionado
 * @param {string} item.tipo - Tipo de consulta ('cnpj' ou 'cnae')
 * @param {string} item.valor - Valor consultado
 * @param {string} item.descricao - Descrição do item (razão social ou descrição do CNAE)
 */
export const addToHistory = (item) => {
  try {
    const history = getHistory();
    
    // Verifica se o item já existe no histórico
    const existingIndex = history.findIndex(
      h => h.tipo === item.tipo && h.valor === item.valor
    );
    
    // Se o item já existe, remove-o para adicioná-lo novamente no topo
    if (existingIndex !== -1) {
      history.splice(existingIndex, 1);
    }
    
    // Adiciona o novo item no início do array
    history.unshift({
      ...item,
      data: new Date().toLocaleDateString()
    });
    
    // Limita o tamanho do histórico
    const limitedHistory = history.slice(0, MAX_HISTORY_ITEMS);
    
    // Salva o histórico atualizado
    localStorage.setItem(HISTORY_KEY, JSON.stringify(limitedHistory));
    
    return limitedHistory;
  } catch (error) {
    console.error('Erro ao adicionar ao histórico:', error);
    return getHistory();
  }
};

/**
 * Limpa o histórico de consultas
 */
export const clearHistory = () => {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (error) {
    console.error('Erro ao limpar histórico:', error);
  }
};

/**
 * Salva o tema atual (claro/escuro) no localStorage
 * @param {boolean} isDark - Se o tema é escuro
 */
export const saveTheme = (isDark) => {
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  } catch (error) {
    console.error('Erro ao salvar tema:', error);
  }
};

/**
 * Obtém o tema salvo no localStorage
 * @returns {boolean} - Se o tema é escuro
 */
export const getTheme = () => {
  try {
    const theme = localStorage.getItem('theme');
    return theme === 'dark';
  } catch (error) {
    console.error('Erro ao obter tema:', error);
    return false;
  }
};

