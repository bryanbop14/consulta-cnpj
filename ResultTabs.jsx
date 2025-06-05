import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, History } from 'lucide-react';
import DadosGerais from './tabs/DadosGerais';
import Endereco from './tabs/Endereco';
import Contatos from './tabs/Contatos';
import Atividades from './tabs/Atividades';
import Socios from './tabs/Socios';
import InfoFiscal from './tabs/InfoFiscal';

const ResultTabs = ({ data, onExportPDF, onShowHistory }) => {
  const [activeTab, setActiveTab] = useState('dados-gerais');
  
  if (!data) return null;
  
  return (
    <div className="mt-8 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Resultados para {data.dados_gerais?.cnpj || ''}
        </h2>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onExportPDF}
            className="flex items-center"
          >
            <Download className="mr-2 h-4 w-4" />
            Exportar PDF
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onShowHistory}
            className="flex items-center"
          >
            <History className="mr-2 h-4 w-4" />
            Histórico
          </Button>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <Tabs 
            defaultValue="dados-gerais" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full rounded-t-lg rounded-b-none">
              <TabsTrigger value="dados-gerais">Dados Gerais</TabsTrigger>
              <TabsTrigger value="endereco">Endereço</TabsTrigger>
              <TabsTrigger value="contatos">Contatos</TabsTrigger>
              <TabsTrigger value="atividades">Atividades</TabsTrigger>
              <TabsTrigger value="socios">Sócios</TabsTrigger>
              <TabsTrigger value="fiscal">Fiscal</TabsTrigger>
            </TabsList>
            
            <div className="p-6">
              <TabsContent value="dados-gerais">
                <DadosGerais data={data.dados_gerais} />
              </TabsContent>
              
              <TabsContent value="endereco">
                <Endereco data={data.endereco} />
              </TabsContent>
              
              <TabsContent value="contatos">
                <Contatos data={data.contatos} />
              </TabsContent>
              
              <TabsContent value="atividades">
                <Atividades data={data.atividades} />
              </TabsContent>
              
              <TabsContent value="socios">
                <Socios data={data.socios} />
              </TabsContent>
              
              <TabsContent value="fiscal">
                <InfoFiscal data={data.info_fiscal} />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultTabs;

