# Consulta CNPJ - Ferramenta de Consulta de Dados da Receita Federal

Uma aplicação web para consulta de dados de empresas por CNPJ ou CNAE na base da Receita Federal, exibindo informações detalhadas como razão social, endereço, contatos, atividades econômicas, regime tributário e quadro societário.

## Funcionalidades

- Consulta de empresas por CNPJ
- Consulta de empresas por CNAE
- Visualização de dados detalhados:
  - Dados gerais (razão social, nome fantasia, CNPJ, data de abertura, etc.)
  - Endereço completo
  - Contatos (telefone, e-mail)
  - Atividades econômicas (principal e secundárias)
  - Quadro societário
  - Informações fiscais (regime tributário, Simples Nacional, MEI)
- Exportação de dados para PDF
- Histórico de consultas
- Tema claro/escuro

## Tecnologias Utilizadas

### Backend
- Python 3.11
- Flask (framework web)
- Requests (para consultas à API)
- Redis (para cache, opcional)
- Flask-CORS (para permitir requisições cross-origin)

### Frontend
- React 19
- Vite (build tool)
- Tailwind CSS (estilização)
- jsPDF (geração de PDF)
- Lucide React (ícones)

## Estrutura do Projeto

```
cnpj-consulta/
├── api/                    # Backend Flask
│   ├── src/
│   │   ├── main.py         # Ponto de entrada da aplicação
│   │   ├── routes/         # Rotas da API
│   │   ├── services/       # Serviços de negócio
│   │   ├── utils/          # Utilitários
│   │   └── static/         # Arquivos estáticos
│   ├── venv/               # Ambiente virtual Python
│   └── requirements.txt    # Dependências Python
└── frontend/               # Frontend React
    ├── src/
    │   ├── components/     # Componentes React
    │   ├── services/       # Serviços de API
    │   └── utils/          # Utilitários
    ├── public/             # Arquivos públicos
    └── package.json        # Dependências JavaScript
```

## Instalação e Execução

### Requisitos

- Python 3.11 ou superior
- Node.js 20 ou superior
- npm, yarn ou pnpm

### Backend

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cnpj-consulta.git
cd cnpj-consulta
```

2. Configure o ambiente virtual Python:
```bash
cd api
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. Execute o servidor Flask:
```bash
python src/main.py
```

O servidor estará disponível em `http://localhost:5000`.

### Frontend

1. Instale as dependências:
```bash
cd frontend
npm install  # ou yarn install ou pnpm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev  # ou yarn dev ou pnpm dev
```

O frontend estará disponível em `http://localhost:5173`.

## Configuração

### Variáveis de Ambiente

#### Backend (api/.env)
```
FLASK_ENV=development
FLASK_DEBUG=1
PORT=5000
REDIS_URL=redis://localhost:6379  # Opcional, para cache
```

#### Frontend (frontend/.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Implantação em Produção

### Backend

1. Configure o servidor web (Nginx, Apache) para servir a aplicação Flask
2. Use Gunicorn ou uWSGI como servidor WSGI
3. Configure um serviço systemd para manter a aplicação em execução

### Frontend

1. Gere a build de produção:
```bash
cd frontend
npm run build  # ou yarn build ou pnpm build
```

2. Sirva os arquivos estáticos gerados na pasta `dist` usando um servidor web

## APIs Utilizadas

A aplicação utiliza a [Brasil API](https://brasilapi.com.br/) para consulta de dados de CNPJ. Esta é uma API gratuita e de código aberto que fornece dados públicos de empresas brasileiras.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Autor

Desenvolvido para fins educacionais.

---

**Nota**: Esta aplicação foi desenvolvida para fins educacionais e utiliza dados públicos disponibilizados pela Receita Federal do Brasil através de APIs de terceiros. Não há garantia de precisão ou atualidade dos dados exibidos.

