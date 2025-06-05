import { Card, CardContent } from '@/components/ui/card';

const DadosGerais = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Dados Gerais</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Razão Social</span>
            <span className="font-medium">{data.razao_social || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Nome Fantasia</span>
            <span className="font-medium">{data.nome_fantasia || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">CNPJ</span>
            <span className="font-medium">{data.cnpj || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Data de Abertura</span>
            <span className="font-medium">{data.data_abertura || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Natureza Jurídica</span>
            <span className="font-medium">{data.natureza_juridica || 'Não informado'}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Situação Cadastral</span>
            <span className={`font-medium ${data.situacao_cadastral === 'ATIVA' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {data.situacao_cadastral || 'Não informado'}
            </span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Data da Situação Cadastral</span>
            <span className="font-medium">{data.data_situacao_cadastral || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Porte da Empresa</span>
            <span className="font-medium">{data.porte || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Capital Social</span>
            <span className="font-medium">{data.capital_social || 'Não informado'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadosGerais;

