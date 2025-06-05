import { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const SearchForm = ({ onSearch, isLoading }) => {
  const [searchType, setSearchType] = useState('cnpj');
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');

  const validateCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]/g, '');
    
    if (cnpj.length !== 14) {
      return false;
    }
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cnpj)) {
      return false;
    }
    
    // Validação do dígito verificador
    let sum = 0;
    let weight = 5;
    
    // Primeiro dígito verificador
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    
    let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    
    if (parseInt(cnpj.charAt(12)) !== digit) {
      return false;
    }
    
    // Segundo dígito verificador
    sum = 0;
    weight = 6;
    
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    
    digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    
    return parseInt(cnpj.charAt(13)) === digit;
  };

  const validateCNAE = (cnae) => {
    cnae = cnae.replace(/[^\d]/g, '');
    return cnae.length === 7;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!searchValue.trim()) {
      setError(`Por favor, digite um ${searchType.toUpperCase()}`);
      return;
    }
    
    if (searchType === 'cnpj' && !validateCNPJ(searchValue)) {
      setError('CNPJ inválido. Verifique o número digitado.');
      return;
    }
    
    if (searchType === 'cnae' && !validateCNAE(searchValue)) {
      setError('CNAE inválido. O CNAE deve conter 7 dígitos.');
      return;
    }
    
    onSearch({
      tipo: searchType,
      valor: searchValue
    });
  };

  const formatInput = (value) => {
    if (searchType === 'cnpj') {
      // Formata CNPJ: XX.XXX.XXX/XXXX-XX
      value = value.replace(/[^\d]/g, '');
      
      if (value.length <= 2) {
        return value;
      } else if (value.length <= 5) {
        return `${value.slice(0, 2)}.${value.slice(2)}`;
      } else if (value.length <= 8) {
        return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5)}`;
      } else if (value.length <= 12) {
        return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8)}`;
      } else {
        return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}-${value.slice(12, 14)}`;
      }
    } else if (searchType === 'cnae') {
      // Formata CNAE: XXXX-X/XX
      value = value.replace(/[^\d]/g, '');
      
      if (value.length <= 4) {
        return value;
      } else if (value.length <= 5) {
        return `${value.slice(0, 4)}-${value.slice(4)}`;
      } else {
        return `${value.slice(0, 4)}-${value.slice(4, 5)}/${value.slice(5, 7)}`;
      }
    }
    
    return value;
  };

  const handleInputChange = (e) => {
    const formattedValue = formatInput(e.target.value);
    setSearchValue(formattedValue);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold">
              Consulte dados de empresas por CNPJ ou CNAE
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder={searchType === 'cnpj' ? 'Digite o CNPJ' : 'Digite o CNAE'}
                value={searchValue}
                onChange={handleInputChange}
                className="w-full"
                aria-label={searchType === 'cnpj' ? 'Campo de CNPJ' : 'Campo de CNAE'}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full md:w-auto"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Buscando...
                </span>
              ) : (
                <span className="flex items-center">
                  <SearchIcon className="mr-2 h-4 w-4" />
                  Buscar
                </span>
              )}
            </Button>
          </div>
          
          <RadioGroup 
            value={searchType} 
            onValueChange={setSearchType}
            className="flex justify-center space-x-8"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cnpj" id="cnpj" />
              <Label htmlFor="cnpj">CNPJ</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cnae" id="cnae" />
              <Label htmlFor="cnae">CNAE</Label>
            </div>
          </RadioGroup>
          
          {error && (
            <div className="text-destructive text-center text-sm">
              {error}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchForm;

