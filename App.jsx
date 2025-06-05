import { useState, useEffect } from 'react';
import { searchCompany } from './services/api';
import { savePDF } from './utils/pdfGenerator';
import { addToHistory, getHistory, getTheme, saveTheme } from './utils/storage';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ResultTabs from './components/ResultTabs';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import HistoryDialog from './components/HistoryDialog';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);
  
  // Carrega o tema salvo
  useEffect(() => {
    const savedTheme = getTheme();
    setIsDarkMode(savedTheme);
    
    if (savedTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  // Carrega o histórico
  useEffect(() => {
    setHistory(getHistory());
  }, []);
  
  // Alterna entre tema claro e escuro
  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      saveTheme(newMode);
      return newMode;
    });
  };
  
  // Realiza a busca
  const handleSearch = async (params) => {
    setIsLoading(true);
    setError(null);
    setSearchParams(params);
    setCompanyData(null);
    
    try {
      const data = await searchCompany(params);
      setCompanyData(data);
      
      // Adiciona ao histórico
      if (params.tipo === 'cnpj') {
        addToHistory({
          tipo: params.tipo,
          valor: params.valor,
          descricao: data.dados_gerais?.razao_social || ''
        });
      } else {
        addToHistory({
          tipo: params.tipo,
          valor: params.valor,
          descricao: data.message || ''
        });
      }
      
      // Atualiza o histórico
      setHistory(getHistory());
    } catch (error) {
      setError(error.message || 'Erro ao consultar dados.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Exporta os dados para PDF
  const handleExportPDF = () => {
    if (companyData) {
      savePDF(companyData);
    }
  };
  
  // Seleciona um item do histórico
  const handleSelectHistoryItem = (item) => {
    handleSearch({
      tipo: item.tipo,
      valor: item.valor
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        
        {isLoading && (
          <LoadingSpinner message="Buscando informações..." />
        )}
        
        {error && (
          <ErrorMessage 
            message={error} 
            onRetry={() => searchParams && handleSearch(searchParams)} 
          />
        )}
        
        {!isLoading && !error && companyData && (
          <ResultTabs 
            data={companyData} 
            onExportPDF={handleExportPDF}
            onShowHistory={() => setShowHistory(true)}
          />
        )}
      </main>
      
      <Footer />
      
      <HistoryDialog 
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        history={history}
        onSelectItem={handleSelectHistoryItem}
      />
    </div>
  );
}

export default App;

