import { Phone, Mail } from 'lucide-react';

const Contatos = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Contatos</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Telefone Principal</span>
            {data.telefone_1 ? (
              <a 
                href={`tel:${data.telefone_1.replace(/\D/g, '')}`} 
                className="font-medium flex items-center hover:text-primary"
              >
                <Phone className="h-4 w-4 mr-2" />
                {data.telefone_1}
              </a>
            ) : (
              <span className="font-medium text-muted-foreground">Não informado</span>
            )}
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Telefone Secundário</span>
            {data.telefone_2 ? (
              <a 
                href={`tel:${data.telefone_2.replace(/\D/g, '')}`} 
                className="font-medium flex items-center hover:text-primary"
              >
                <Phone className="h-4 w-4 mr-2" />
                {data.telefone_2}
              </a>
            ) : (
              <span className="font-medium text-muted-foreground">Não informado</span>
            )}
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Fax</span>
            {data.fax ? (
              <span className="font-medium">{data.fax}</span>
            ) : (
              <span className="font-medium text-muted-foreground">Não informado</span>
            )}
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">E-mail</span>
            {data.email ? (
              <a 
                href={`mailto:${data.email}`} 
                className="font-medium flex items-center hover:text-primary break-all"
              >
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                {data.email}
              </a>
            ) : (
              <span className="font-medium text-muted-foreground">Não informado</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatos;

