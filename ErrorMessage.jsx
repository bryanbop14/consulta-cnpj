import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <Card className="w-full max-w-md mx-auto mt-8 border-destructive">
      <CardContent className="pt-6 text-center">
        <div className="flex justify-center mb-4">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        
        <h3 className="text-lg font-semibold mb-2">Erro na consulta</h3>
        
        <p className="text-muted-foreground mb-6">
          {message || 'Ocorreu um erro ao processar sua solicitação.'}
        </p>
        
        <Button onClick={onRetry}>
          Tentar Novamente
        </Button>
      </CardContent>
    </Card>
  );
};

export default ErrorMessage;

