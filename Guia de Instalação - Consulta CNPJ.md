# Guia de Instalação - Consulta CNPJ

Este guia fornece instruções detalhadas para instalar e configurar a aplicação Consulta CNPJ em diferentes ambientes.

## Requisitos do Sistema

### Requisitos Mínimos
- CPU: 1 núcleo
- RAM: 1GB
- Armazenamento: 500MB de espaço livre
- Sistema Operacional: Linux, macOS ou Windows

### Software Necessário
- Python 3.11 ou superior
- Node.js 20 ou superior
- npm, yarn ou pnpm
- Git (opcional, para clonar o repositório)

## Instalação Passo a Passo

### 1. Obter o Código-Fonte

#### Opção 1: Clonar o Repositório (recomendado)
```bash
git clone https://github.com/seu-usuario/cnpj-consulta.git
cd cnpj-consulta
```

#### Opção 2: Download do Arquivo ZIP
1. Baixe o arquivo ZIP do repositório
2. Extraia o conteúdo para uma pasta de sua escolha
3. Abra um terminal e navegue até a pasta extraída

### 2. Configurar o Backend (API Flask)

#### Configurar o Ambiente Virtual Python
```bash
cd api
python -m venv venv
```

#### Ativar o Ambiente Virtual
- **Linux/macOS**:
  ```bash
  source venv/bin/activate
  ```
- **Windows (PowerShell)**:
  ```powershell
  .\venv\Scripts\Activate.ps1
  ```
- **Windows (Command Prompt)**:
  ```cmd
  venv\Scripts\activate.bat
  ```

#### Instalar Dependências
```bash
pip install -r requirements.txt
```

#### Configurar Variáveis de Ambiente (Opcional)
Crie um arquivo `.env` na pasta `api` com o seguinte conteúdo:
```
FLASK_ENV=development
FLASK_DEBUG=1
PORT=5000
```

### 3. Configurar o Frontend (React)

#### Instalar Dependências
```bash
cd ../frontend
npm install  # ou yarn install ou pnpm install
```

#### Configurar Variáveis de Ambiente (Opcional)
Crie um arquivo `.env` na pasta `frontend` com o seguinte conteúdo:
```
VITE_API_URL=http://localhost:5000/api
```

### 4. Executar a Aplicação em Modo de Desenvolvimento

#### Iniciar o Backend
```bash
cd ../api
source venv/bin/activate  # No Windows: venv\Scripts\activate
python src/main.py
```

O servidor Flask estará disponível em `http://localhost:5000`.

#### Iniciar o Frontend
Em um novo terminal:
```bash
cd ../frontend
npm run dev  # ou yarn dev ou pnpm dev
```

O frontend estará disponível em `http://localhost:5173`.

## Implantação em Produção

### Backend (API Flask)

#### Opção 1: Usando Gunicorn (Recomendado para Linux/macOS)
1. Instale o Gunicorn:
   ```bash
   pip install gunicorn
   ```

2. Execute o servidor:
   ```bash
   cd api
   gunicorn -w 4 -b 0.0.0.0:5000 'src.main:app'
   ```

#### Opção 2: Usando uWSGI
1. Instale o uWSGI:
   ```bash
   pip install uwsgi
   ```

2. Crie um arquivo `uwsgi.ini`:
   ```ini
   [uwsgi]
   module = src.main:app
   master = true
   processes = 4
   socket = 0.0.0.0:5000
   vacuum = true
   die-on-term = true
   ```

3. Execute o servidor:
   ```bash
   uwsgi --ini uwsgi.ini
   ```

### Frontend (React)

1. Gere a build de produção:
   ```bash
   cd frontend
   npm run build  # ou yarn build ou pnpm build
   ```

2. Os arquivos estáticos serão gerados na pasta `dist`.

3. Configure um servidor web (Nginx, Apache) para servir os arquivos estáticos.

#### Exemplo de Configuração Nginx
```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    # Frontend
    location / {
        root /caminho/para/cnpj-consulta/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Configuração Systemd (Linux)

Para manter o backend em execução como um serviço:

1. Crie um arquivo de serviço:
   ```bash
   sudo nano /etc/systemd/system/cnpj-consulta.service
   ```

2. Adicione o seguinte conteúdo:
   ```ini
   [Unit]
   Description=CNPJ Consulta API
   After=network.target

   [Service]
   User=seu-usuario
   WorkingDirectory=/caminho/para/cnpj-consulta/api
   Environment="PATH=/caminho/para/cnpj-consulta/api/venv/bin"
   ExecStart=/caminho/para/cnpj-consulta/api/venv/bin/gunicorn -w 4 -b 0.0.0.0:5000 'src.main:app'
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```

3. Habilite e inicie o serviço:
   ```bash
   sudo systemctl enable cnpj-consulta
   sudo systemctl start cnpj-consulta
   ```

## Solução de Problemas

### Problema: O Backend não Inicia
- Verifique se o ambiente virtual está ativado
- Verifique se todas as dependências foram instaladas
- Verifique se a porta 5000 não está sendo usada por outro processo

### Problema: O Frontend não Conecta ao Backend
- Verifique se o backend está em execução
- Verifique se a URL da API está configurada corretamente no frontend
- Verifique se o CORS está configurado corretamente no backend

### Problema: Erro ao Instalar Dependências
- Verifique se você tem as versões corretas de Python e Node.js instaladas
- Tente limpar o cache do npm: `npm cache clean --force`
- Verifique se você tem permissões para instalar pacotes

## Atualizações

Para atualizar a aplicação:

1. Obtenha as últimas alterações:
   ```bash
   git pull origin main
   ```

2. Atualize as dependências:
   ```bash
   cd api
   source venv/bin/activate
   pip install -r requirements.txt

   cd ../frontend
   npm install
   ```

3. Reinicie os serviços.

## Suporte

Se você encontrar problemas durante a instalação ou uso da aplicação, por favor, abra uma issue no repositório do projeto.

