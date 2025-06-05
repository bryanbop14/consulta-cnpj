import { Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LoadingSpinner = ({ message }) => {
  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardContent className="pt-6 text-center">
        <div className="flex justify-center mb-4">
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
        </div>
        
        <p className="text-muted-foreground">
          {message || 'Buscando informações...'}
        </p>
      </CardContent>
    </Card>
  );
};

export default LoadingSpinner;

