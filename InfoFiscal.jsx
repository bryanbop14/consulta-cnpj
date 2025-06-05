import { FileText, Check, X } from 'lucide-react';

const InfoFiscal = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center">
        <FileText className="h-5 w-5 mr-2 text-primary" />
        Informações Fiscais
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Regime Tributário</span>
            <span className="font-medium">{data.regime_tributario || 'Não informado'}</span>
          </div>
          
          <div className="bg-muted/50 p-4 rounded-md">
            <h4 className="text-md font-medium mb-3">Simples Nacional</h4>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-sm text-muted-foreground mr-2">Optante:</span>
                {data.simples_nacional?.optante ? (
                  <span className="flex items-center text-green-600 dark:text-green-400">
                    <Check className="h-4 w-4 mr-1" />
                    Sim
                  </span>
                ) : (
                  <span className="flex items-center text-red-600 dark:text-red-400">
                    <X className="h-4 w-4 mr-1" />
                    Não
                  </span>
                )}
              </div>
              
              {data.simples_nacional?.optante && (
                <>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Data de Opção</span>
                    <span className="font-medium">{data.simples_nacional?.data_opcao || 'Não informado'}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Data de Exclusão</span>
                    <span className="font-medium">{data.simples_nacional?.data_exclusao || 'Não informado'}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <h4 className="text-md font-medium mb-3">Microempreendedor Individual (MEI)</h4>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-sm text-muted-foreground mr-2">Optante:</span>
                {data.mei?.optante ? (
                  <span className="flex items-center text-green-600 dark:text-green-400">
                    <Check className="h-4 w-4 mr-1" />
                    Sim
                  </span>
                ) : (
                  <span className="flex items-center text-red-600 dark:text-red-400">
                    <X className="h-4 w-4 mr-1" />
                    Não
                  </span>
                )}
              </div>
              
              {data.mei?.optante && (
                <>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Data de Opção</span>
                    <span className="font-medium">{data.mei?.data_opcao || 'Não informado'}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Data de Exclusão</span>
                    <span className="font-medium">{data.mei?.data_exclusao || 'Não informado'}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoFiscal;

