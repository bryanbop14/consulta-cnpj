import { Users } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Socios = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center">
        <Users className="h-5 w-5 mr-2 text-primary" />
        Quadro Societário
      </h3>
      
      {data && data.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>CPF/CNPJ</TableHead>
                <TableHead>Qualificação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((socio, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{socio.nome || 'Não informado'}</TableCell>
                  <TableCell>{socio.cpf_cnpj || 'Não informado'}</TableCell>
                  <TableCell>{socio.qualificacao || 'Não informado'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="bg-muted/50 p-4 rounded-md text-muted-foreground">
          Nenhum sócio registrado
        </div>
      )}
    </div>
  );
};

export default Socios;

