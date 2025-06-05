import { Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Atividades = ({ data }) => {
  if (!data) return null;
  
  const formatCnae = (codigo) => {
    if (!codigo) return '';
    
    const codigoStr = String(codigo);
    if (codigoStr.length !== 7) return codigoStr;
    
    return `${codigoStr.slice(0, 4)}-${codigoStr.slice(4, 5)}/${codigoStr.slice(5, 7)}`;
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Atividades Econômicas</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-md font-medium mb-2 flex items-center">
            <Briefcase className="h-4 w-4 mr-2 text-primary" />
            Atividade Principal
          </h4>
          
          <div className="bg-muted/50 p-4 rounded-md">
            <div className="flex items-start">
              <Badge variant="outline" className="mr-2 mt-1">
                {formatCnae(data.principal?.codigo)}
              </Badge>
              <span>{data.principal?.descricao || 'Não informado'}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-md font-medium mb-2 flex items-center">
            <Briefcase className="h-4 w-4 mr-2 text-primary" />
            Atividades Secundárias
          </h4>
          
          {data.secundarias && data.secundarias.length > 0 ? (
            <div className="space-y-2">
              {data.secundarias.map((atividade, index) => (
                <div key={index} className="bg-muted/50 p-4 rounded-md">
                  <div className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      {formatCnae(atividade.codigo)}
                    </Badge>
                    <span>{atividade.descricao}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-muted/50 p-4 rounded-md text-muted-foreground">
              Nenhuma atividade secundária registrada
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Atividades;

