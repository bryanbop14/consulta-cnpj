const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-12 py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Consulta CNPJ - Desenvolvido para fins educacionais
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Sobre
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Termos de Uso
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

