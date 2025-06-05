# Wireframes da Aplicação de Consulta CNPJ

## Página Principal (One-Page)

A aplicação será uma página única com diferentes seções que são exibidas ou ocultadas conforme a interação do usuário.

### Cabeçalho

```
+----------------------------------------------------------------------+
|                                                                      |
|  [Logo] Consulta CNPJ                                [Modo Escuro]   |
|                                                                      |
+----------------------------------------------------------------------+
```

### Formulário de Busca

```
+----------------------------------------------------------------------+
|                                                                      |
|  Consulte dados de empresas por CNPJ ou CNAE                         |
|                                                                      |
|  +----------------------------------+  +-------------------------+   |
|  | Digite CNPJ ou CNAE              |  | Buscar                  |   |
|  +----------------------------------+  +-------------------------+   |
|                                                                      |
|  [ ] CNPJ  [ ] CNAE                                                  |
|                                                                      |
+----------------------------------------------------------------------+
```

### Área de Carregamento

```
+----------------------------------------------------------------------+
|                                                                      |
|                        [Ícone de Carregamento]                       |
|                                                                      |
|                      Buscando informações...                         |
|                                                                      |
+----------------------------------------------------------------------+
```

### Área de Resultados - Visão Geral

```
+----------------------------------------------------------------------+
|                                                                      |
|  Resultados para CNPJ: XX.XXX.XXX/XXXX-XX                            |
|                                                                      |
|  +------------------------------------------------------------------+|
|  | [Dados Gerais] [Endereço] [Contatos] [Atividades] [Sócios] [Fiscal]||
|  +------------------------------------------------------------------+|
|                                                                      |
|  +------------------------------------------------------------------+|
|  |                                                                  ||
|  |                     [Conteúdo da Aba Selecionada]                ||
|  |                                                                  ||
|  +------------------------------------------------------------------+|
|                                                                      |
|  [Exportar PDF]                      [Histórico de Consultas]        |
|                                                                      |
+----------------------------------------------------------------------+
```

### Aba: Dados Gerais

```
+----------------------------------------------------------------------+
|                                                                      |
|  DADOS GERAIS                                                        |
|                                                                      |
|  Razão Social: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX              |
|  Nome Fantasia: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX              |
|  CNPJ: XX.XXX.XXX/XXXX-XX                                           |
|  Data de Abertura: XX/XX/XXXX                                       |
|  Natureza Jurídica: XXXXXXXXXXXXXXXXXXXXXXXXX                        |
|                                                                      |
|  Situação Cadastral: XXXXXXXX                                        |
|  Data da Situação Cadastral: XX/XX/XXXX                              |
|  Porte da Empresa: XXXXXXXXX                                         |
|  Capital Social: R$ XX.XXX,XX                                        |
|                                                                      |
+----------------------------------------------------------------------+
```

### Aba: Endereço

```
+----------------------------------------------------------------------+
|                                                                      |
|  ENDEREÇO                                                            |
|                                                                      |
|  Logradouro: XXXXXXXXXXXXXXXXXXXXXXXXXX                              |
|  Número: XXXXX                                                       |
|  Complemento: XXXXXXXXXXXXXXXXXX                                     |
|  Bairro: XXXXXXXXXXXXXXXX                                            |
|  Cidade: XXXXXXXXXXXXXXXX                                            |
|  UF: XX                                                              |
|  CEP: XXXXX-XXX                                                      |
|                                                                      |
|  [Mapa com a localização]                                            |
|                                                                      |
+----------------------------------------------------------------------+
```

### Aba: Contatos

```
+----------------------------------------------------------------------+
|                                                                      |
|  CONTATOS                                                            |
|                                                                      |
|  Telefone Principal: (XX) XXXX-XXXX                                  |
|  Telefone Secundário: (XX) XXXX-XXXX                                 |
|  Fax: (XX) XXXX-XXXX                                                 |
|                                                                      |
|  E-mail: XXXXXXXXXXXXXXXXXXXXX                                       |
|                                                                      |
+----------------------------------------------------------------------+
```

### Aba: Atividades Econômicas

```
+----------------------------------------------------------------------+
|                                                                      |
|  ATIVIDADES ECONÔMICAS                                               |
|                                                                      |
|  Atividade Principal:                                                |
|  XXXX-X/XX - XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX              |
|                                                                      |
|  Atividades Secundárias:                                             |
|  XXXX-X/XX - XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX              |
|  XXXX-X/XX - XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX              |
|  XXXX-X/XX - XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX              |
|                                                                      |
+----------------------------------------------------------------------+
```

### Aba: Quadro Societário

```
+----------------------------------------------------------------------+
|                                                                      |
|  QUADRO SOCIETÁRIO                                                   |
|                                                                      |
|  +------------------------------------------------------------------+|
|  | Nome                | CPF/CNPJ        | Qualificação             ||
|  |---------------------|-----------------|----------------------------|
|  | XXXXXXXXXXXXXXXXXX  | XXX.XXX.XXX-XX  | XXXXXXXXXXXXXXXXXX       ||
|  | XXXXXXXXXXXXXXXXXX  | XXX.XXX.XXX-XX  | XXXXXXXXXXXXXXXXXX       ||
|  | XXXXXXXXXXXXXXXXXX  | XXX.XXX.XXX-XX  | XXXXXXXXXXXXXXXXXX       ||
|  +------------------------------------------------------------------+|
|                                                                      |
+----------------------------------------------------------------------+
```

### Aba: Informações Fiscais

```
+----------------------------------------------------------------------+
|                                                                      |
|  INFORMAÇÕES FISCAIS                                                 |
|                                                                      |
|  Regime Tributário: XXXXXXXXXXXXXXXXXX                               |
|                                                                      |
|  Simples Nacional: [Sim/Não]                                         |
|  Data de Opção pelo Simples: XX/XX/XXXX                              |
|  Data de Exclusão do Simples: XX/XX/XXXX                             |
|                                                                      |
|  MEI: [Sim/Não]                                                      |
|  Data de Opção pelo MEI: XX/XX/XXXX                                  |
|  Data de Exclusão do MEI: XX/XX/XXXX                                 |
|                                                                      |
+----------------------------------------------------------------------+
```

### Mensagem de Erro

```
+----------------------------------------------------------------------+
|                                                                      |
|                          [Ícone de Erro]                             |
|                                                                      |
|                  CNPJ não encontrado na base de dados.               |
|                                                                      |
|                  Verifique se o número está correto.                 |
|                                                                      |
|                          [Tentar Novamente]                          |
|                                                                      |
+----------------------------------------------------------------------+
```

### Histórico de Consultas

```
+----------------------------------------------------------------------+
|                                                                      |
|  HISTÓRICO DE CONSULTAS                                              |
|                                                                      |
|  +------------------------------------------------------------------+|
|  | CNPJ/CNAE            | Razão Social/Descrição      | Data        ||
|  |---------------------|---------------------------|---------------|
|  | XX.XXX.XXX/XXXX-XX  | XXXXXXXXXXXXXXXXXXXXXXXXX | XX/XX/XXXX   ||
|  | XX.XXX.XXX/XXXX-XX  | XXXXXXXXXXXXXXXXXXXXXXXXX | XX/XX/XXXX   ||
|  | XXXX-X/XX           | XXXXXXXXXXXXXXXXXXXXXXXXX | XX/XX/XXXX   ||
|  +------------------------------------------------------------------+|
|                                                                      |
|                             [Fechar]                                 |
|                                                                      |
+----------------------------------------------------------------------+
```

### Rodapé

```
+----------------------------------------------------------------------+
|                                                                      |
|  © 2025 Consulta CNPJ - Desenvolvido por [Nome]                      |
|                                                                      |
|  [Links Úteis] [Sobre] [Termos de Uso]                               |
|                                                                      |
+----------------------------------------------------------------------+
```

## Design Responsivo

### Versão Mobile - Formulário de Busca

```
+---------------------------+
|                           |
| [Logo] Consulta CNPJ      |
|                           |
+---------------------------+
|                           |
| Consulte dados de empresas|
| por CNPJ ou CNAE          |
|                           |
| +-------------------------+
| | Digite CNPJ ou CNAE     |
| +-------------------------+
|                           |
| [ ] CNPJ  [ ] CNAE        |
|                           |
| +-------------------------+
| | Buscar                  |
| +-------------------------+
|                           |
+---------------------------+
```

### Versão Mobile - Resultados

```
+---------------------------+
|                           |
| [Logo] Consulta CNPJ      |
|                           |
+---------------------------+
|                           |
| Resultados para CNPJ:     |
| XX.XXX.XXX/XXXX-XX        |
|                           |
| [Selecione uma seção ▼]   |
| - Dados Gerais            |
| - Endereço                |
| - Contatos                |
| - Atividades              |
| - Sócios                  |
| - Fiscal                  |
|                           |
| +-------------------------+
| |                         |
| | [Conteúdo da Seção]     |
| |                         |
| +-------------------------+
|                           |
| [Exportar PDF]            |
| [Histórico de Consultas]  |
|                           |
+---------------------------+
```

## Observações de Design

1. **Cores**:
   - Esquema de cores profissional e limpo
   - Modo escuro disponível
   - Cores de destaque para informações importantes

2. **Tipografia**:
   - Fonte sans-serif para melhor legibilidade
   - Tamanhos adequados para diferentes dispositivos

3. **Ícones**:
   - Uso de ícones para melhorar a compreensão visual
   - Ícones consistentes em toda a aplicação

4. **Responsividade**:
   - Layout adaptável para desktop, tablet e mobile
   - Reorganização de elementos em telas menores
   - Menu dropdown para navegação em dispositivos móveis

5. **Acessibilidade**:
   - Alto contraste quando necessário
   - Textos alternativos para imagens
   - Navegação por teclado

