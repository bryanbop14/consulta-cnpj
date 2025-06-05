import { useState } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const HistoryDialog = ({ isOpen, onClose, history, onSelectItem }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Histórico de Consultas</DialogTitle>
          <DialogDescription>
            Consultas realizadas recentemente
          </DialogDescription>
        </DialogHeader>
        
        {history && history.length > 0 ? (
          <div className="max-h-[400px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>CNPJ/CNAE</TableHead>
                  <TableHead>Razão Social/Descrição</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="w-[100px]">Ação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {history.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.valor}</TableCell>
                    <TableCell>{item.descricao || '-'}</TableCell>
                    <TableCell>{item.data}</TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          onSelectItem(item);
                          onClose();
                        }}
                      >
                        Consultar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="py-6 text-center text-muted-foreground">
            Nenhuma consulta no histórico
          </div>
        )}
        
        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HistoryDialog;

