# Manual do Usuário - Consulta CNPJ

## Introdução

Bem-vindo ao Manual do Usuário da aplicação Consulta CNPJ. Esta ferramenta permite consultar informações detalhadas de empresas brasileiras através do CNPJ (Cadastro Nacional da Pessoa Jurídica) ou CNAE (Classificação Nacional de Atividades Econômicas).

## Funcionalidades Principais

A aplicação Consulta CNPJ oferece as seguintes funcionalidades:

1. **Consulta por CNPJ**: Busca informações detalhadas de uma empresa específica
2. **Consulta por CNAE**: Busca empresas por código de atividade econômica
3. **Visualização de dados detalhados**: Exibe informações organizadas em abas
4. **Exportação para PDF**: Permite salvar os dados consultados em formato PDF
5. **Histórico de consultas**: Mantém registro das consultas realizadas
6. **Tema claro/escuro**: Permite alternar entre modos de visualização

## Como Usar

### Página Inicial

Ao acessar a aplicação, você verá a página inicial com um campo de busca e opções para selecionar o tipo de consulta (CNPJ ou CNAE).

### Consulta por CNPJ

1. Selecione a opção "CNPJ" (selecionada por padrão)
2. Digite o número do CNPJ no campo de busca
   - O CNPJ pode ser digitado com ou sem formatação (pontos, barras e traços)
   - Exemplo: 19.131.243/0001-97 ou 19131243000197
3. Clique no botão "Buscar" ou pressione Enter

### Consulta por CNAE

1. Selecione a opção "CNAE"
2. Digite o código CNAE no campo de busca
   - O CNAE pode ser digitado com ou sem formatação (pontos e traços)
   - Exemplo: 9430-8/00 ou 94308
3. Clique no botão "Buscar" ou pressione Enter

### Visualização dos Resultados

Após realizar uma consulta bem-sucedida, os resultados serão exibidos em abas organizadas por categoria:

#### Dados Gerais
- Razão Social
- Nome Fantasia
- CNPJ
- Data de Abertura
- Natureza Jurídica
- Situação Cadastral
- Data da Situação Cadastral
- Porte da Empresa
- Capital Social

#### Endereço
- Logradouro
- Número
- Complemento
- Bairro
- Cidade
- UF (Estado)
- CEP
- Link para visualização no Google Maps

#### Contatos
- Telefone Principal
- Telefone Secundário
- Fax
- E-mail

#### Atividades
- Atividade Principal (CNAE principal): Código e descrição
- Atividades Secundárias (CNAEs secundários): Códigos e descrições

#### Sócios
- Nome dos sócios
- CPF/CNPJ dos sócios
- Qualificação dos sócios (Administrador, Sócio, etc.)

#### Fiscal
- Regime Tributário
- Simples Nacional: Optante ou não e desde quando
- MEI: Se a empresa é optante pelo regime MEI

### Exportação para PDF

Para exportar os dados consultados para um arquivo PDF:

1. Realize uma consulta por CNPJ ou CNAE
2. Clique no botão "Exportar PDF" localizado acima das abas de resultados
3. O arquivo PDF será gerado e baixado automaticamente
4. O nome do arquivo seguirá o padrão "cnpj_XXXXXXXXXXXXXXXX.pdf"

### Histórico de Consultas

Para acessar o histórico de consultas realizadas:

1. Clique no botão "Histórico" localizado acima das abas de resultados
2. Uma janela será exibida com a lista de consultas recentes
3. Para repetir uma consulta, clique no botão "Consultar" ao lado do item desejado
4. Para fechar o histórico, clique no botão "Fechar" ou fora da janela

### Alternar Tema

Para alternar entre os temas claro e escuro:

1. Clique no ícone de sol/lua localizado no canto superior direito da página
2. O tema será alternado imediatamente
3. A preferência de tema será salva para futuras visitas

## Mensagens de Erro

A aplicação pode exibir as seguintes mensagens de erro:

- **CNPJ inválido. Verifique o número digitado.**: O número de CNPJ não está no formato correto ou não passou na validação de dígitos verificadores.
- **CNPJ não encontrado na base de dados.**: O CNPJ é válido, mas não foi encontrado na base de dados.
- **Erro ao consultar dados.**: Ocorreu um erro ao tentar acessar a API de consulta.
- **Busca por CNAE não disponível na API atual**: A API utilizada não suporta busca por CNAE.

## Dicas e Truques

- **Formatação automática**: A aplicação formata automaticamente os números de CNPJ e CNAE durante a exibição.
- **Consultas recentes**: O histórico armazena até 20 consultas recentes.
- **Responsividade**: A aplicação é totalmente responsiva e pode ser usada em dispositivos móveis.
- **Acessibilidade**: Todos os elementos da interface são acessíveis via teclado.

## Limitações

- A aplicação depende de APIs de terceiros para obter os dados, portanto a disponibilidade e precisão das informações estão sujeitas a essas fontes.
- Algumas informações podem não estar disponíveis para todas as empresas.
- A busca por CNAE pode não estar disponível em todas as APIs utilizadas.

## Suporte

Se você encontrar problemas ao usar a aplicação ou tiver sugestões de melhorias, por favor, entre em contato através do repositório do projeto ou pelo e-mail de suporte.

---

**Nota**: Esta aplicação foi desenvolvida para fins educacionais e utiliza dados públicos disponibilizados pela Receita Federal do Brasil através de APIs de terceiros. Não há garantia de precisão ou atualidade dos dados exibidos.

