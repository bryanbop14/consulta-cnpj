import { useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="bg-card shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg 
            className="h-8 w-8 mr-2 text-primary" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            <path d="M9 14h.01"></path>
            <path d="M13 14h.01"></path>
            <path d="M9 18h.01"></path>
            <path d="M13 18h.01"></path>
          </svg>
          <h1 className="text-2xl font-bold text-primary">Consulta CNPJ</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
        >
          {isDarkMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;

