# Arquitetura da Aplicação de Consulta CNPJ

## Visão Geral

A aplicação será uma ferramenta web one-page para consulta de dados de empresas por CNPJ ou CNAE na base da Receita Federal. A arquitetura será dividida em frontend e backend, seguindo um modelo cliente-servidor.

## Tecnologias Escolhidas

### Frontend
- **Framework**: React.js
- **Biblioteca de UI**: Tailwind CSS para estilização
- **Biblioteca de Componentes**: Shadcn/UI para componentes pré-estilizados
- **Ícones**: Lucide Icons
- **Gráficos** (se necessário): Recharts

### Backend
- **Framework**: Flask (Python)
- **Cache**: Redis (opcional, para otimizar consultas repetidas)
- **Logs**: Logging padrão do Python

## Estrutura da Aplicação

### Frontend (React)

```
/frontend
  /public
    favicon.ico
    index.html
  /src
    /components
      /ui
        Button.jsx
        Card.jsx
        Input.jsx
        ...
      Header.jsx
      Footer.jsx
      SearchForm.jsx
      ResultsDisplay.jsx
      CompanyDetails.jsx
      LoadingSpinner.jsx
      ErrorMessage.jsx
    /hooks
      useCompanySearch.js
    /services
      api.js
    /utils
      formatters.js
      validators.js
    App.jsx
    index.jsx
    styles.css
  package.json
  tailwind.config.js
```

### Backend (Flask)

```
/backend
  /app
    /api
      __init__.py
      routes.py
    /services
      __init__.py
      cnpj_service.py
      cnae_service.py
    /utils
      __init__.py
      formatters.py
      validators.py
    __init__.py
    config.py
  requirements.txt
  run.py
```

## Fluxo de Dados

1. O usuário insere um CNPJ ou CNAE no formulário de busca no frontend
2. O frontend valida o formato da entrada
3. Uma requisição é enviada ao backend
4. O backend verifica se os dados já estão em cache
   - Se sim, retorna os dados do cache
   - Se não, faz uma requisição à API da Brasil API ou outra API escolhida
5. O backend processa e formata os dados recebidos
6. Os dados são retornados ao frontend
7. O frontend exibe os resultados de forma organizada e amigável

## APIs Externas

Após análise das opções disponíveis, escolhemos a **Brasil API** como fonte principal de dados por ser:
- Gratuita
- Não exigir autenticação
- Fornecer dados completos
- Ter boa documentação
- Ser mantida pela comunidade

Como alternativa de backup, podemos implementar a integração com a API oficial da Receita Federal, que requer autenticação.

## Funcionalidades Principais

1. **Busca por CNPJ**:
   - Validação de formato de CNPJ
   - Exibição de resultados detalhados

2. **Busca por CNAE** (implementação indireta):
   - Como a Brasil API não suporta busca direta por CNAE, implementaremos uma solução alternativa:
     - Manter uma base de dados local de CNAEs
     - Permitir busca por código ou descrição de CNAE
     - Para empresas com o CNAE selecionado, usar a API da Receita Federal ou outra fonte

3. **Exibição de Dados**:
   - Informações básicas (razão social, nome fantasia, CNPJ, etc.)
   - Endereço completo
   - Contatos
   - Atividades econômicas (CNAE principal e secundários)
   - Regime tributário
   - Quadro societário
   - Situação cadastral

4. **Recursos Adicionais**:
   - Exportação de dados em PDF
   - Histórico de consultas recentes (armazenado localmente)
   - Modo escuro/claro

## Interface do Usuário

A interface será uma página única (one-page) com design responsivo, contendo:

1. **Cabeçalho**: Logo e título da aplicação
2. **Formulário de Busca**: Campo para entrada de CNPJ ou CNAE com validação
3. **Área de Resultados**: Exibição organizada em abas ou seções:
   - Dados Gerais
   - Endereço
   - Contatos
   - Atividades Econômicas
   - Quadro Societário
   - Informações Fiscais
4. **Rodapé**: Informações sobre a aplicação e links úteis

## Considerações de Segurança e Performance

1. **Segurança**:
   - Validação de entradas no frontend e backend
   - Sanitização de dados
   - Proteção contra ataques comuns (XSS, CSRF)

2. **Performance**:
   - Implementação de cache para consultas frequentes
   - Carregamento lazy de componentes
   - Otimização de imagens e recursos

3. **Acessibilidade**:
   - Conformidade com WCAG 2.1
   - Suporte a navegação por teclado
   - Textos alternativos para imagens

## Limitações Conhecidas

1. A Brasil API não fornece informações sobre inscrições estaduais
2. Não há busca direta por CNAE na Brasil API
3. Podem existir limites de requisições não documentados

## Próximos Passos

1. Implementar wireframes detalhados da interface
2. Configurar o ambiente de desenvolvimento
3. Desenvolver o backend com integração à API escolhida
4. Desenvolver o frontend com foco na experiência do usuário
5. Realizar testes de integração e usabilidade
6. Implementar melhorias baseadas nos testes

