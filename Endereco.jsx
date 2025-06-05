import { MapPin } from 'lucide-react';

const Endereco = ({ data }) => {
  if (!data) return null;
  
  const enderecoConcatenado = `${data.logradouro || ''}, ${data.numero || ''} ${data.complemento ? `- ${data.complemento}` : ''}, ${data.bairro || ''}, ${data.municipio || ''} - ${data.uf || ''}, ${data.cep || ''}`;
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoConcatenado)}`;
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Endereço</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Logradouro</span>
            <span className="font-medium">{data.logradouro || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Número</span>
            <span className="font-medium">{data.numero || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Complemento</span>
            <span className="font-medium">{data.complemento || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Bairro</span>
            <span className="font-medium">{data.bairro || 'Não informado'}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Cidade</span>
            <span className="font-medium">{data.municipio || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">UF</span>
            <span className="font-medium">{data.uf || 'Não informado'}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">CEP</span>
            <span className="font-medium">{data.cep || 'Não informado'}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <a 
          href={googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:underline"
        >
          <MapPin className="h-4 w-4 mr-1" />
          Ver no Google Maps
        </a>
      </div>
    </div>
  );
};

export default Endereco;

