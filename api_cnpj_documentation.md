# API Consulta CNPJ - Receita Federal (gov.br)

## Endpoints de Produção

*   **Consulta Básica:** `https://apigateway.conectagov.estaleiro.serpro.gov.br/api-cnpj-basica/v2/basica`
    *   Retorna um conjunto básico de campos.

*   **Consulta CNPJ-QSA - Quadro de Sócios e Administradores:** `https://apigateway.conectagov.estaleiro.serpro.gov.br/api-cnpj-qsa/v2/qsa`
    *   Retorna informações sobre o Quadro de Sócios e Administradores.

*   **Consulta CNPJ-Empresa - Informações detalhadas sobre a empresa:** `https://apigateway.conectagov.estaleiro.serpro.gov.br/api-cnpj-empresa/v2/empresa`
    *   Retorna informações detalhadas sobre a empresa, incluindo dados cadastrais, fiscais e de contato.

## Endpoints de Homologação (Sandbox)

*   **Consulta Básica:** `https://h-apigateway.conectagov.np.estaleiro.serpro.gov.br/api-cnpj-basica/v2/basica`

*   **Consulta CNPJ-QSA - Quadro de Sócios e Administradores:** `https://h-apigateway.conectagov.np.estaleiro.serpro.gov.br/api-cnpj-qsa/v2/qsa`

*   **Consulta CNPJ-Empresa - Informações detalhadas sobre a empresa:** `https://h-apigateway.conectagov.np.estaleiro.serpro.gov.br/api-cnpj-empresa/v2/empresa`

## Autenticação

*   **Endpoint Access Token URL de Produção:** `https://apigateway.conectagov.estaleiro.serpro.gov.br/oauth2/jwt-token`

*   **Endpoint Access Token URL de Homologação:** `https://h-apigateway.conectagov.np.estaleiro.serpro.gov.br/oauth2/jwt-token`

## Campos Retornados (Consulta CNPJ-Empresa - V2)

Os campos abaixo são retornados pela API de Consulta CNPJ-Empresa e cobrem a maioria dos requisitos do usuário:

*   **ni:** Número de Inscrição da Pessoa Jurídica (CNPJ)
*   **tipoEstabelecimento:** Tipo de estabelecimento da Pessoa Jurídica (Matriz, Filial)
*   **nomeEmpresarial:** Razão Social
*   **nomeFantasia:** Nome Fantasia
*   **situacaoCadastral:** Situação Cadastral (Código e Descrição)
*   **dataSituacaoCadastral:** Data da Situação Cadastral
*   **naturezaJuridica:** Natureza Jurídica (Código e Descrição)
*   **dataAbertura:** Data de Abertura
*   **cnaePrincipal:** Atividade Principal (Código e Descrição)
*   **cnaeSecundarias:** Atividades Secundárias (Códigos e Descrições)
*   **endereco:** Endereço Completo (Logradouro, Número, Complemento, Bairro, Cidade, UF, CEP)
*   **municipioJurisdicao:** Município de Jurisdição do endereço
*   **telefone:** Telefone (várias ocorrências)
*   **correioEletronico:** E-mails oficiais
*   **capitalSocial:** Capital Social Registrado
*   **porteEmpresa:** Porte da Empresa (ME, EPP, Demais empresas)
*   **situacaoEspecial:** Tipos de Situação Especial da Pessoa Jurídica
*   **dataSituacaoEspecial:** Data em que a empresa entrou na Situação Especial
*   **informacoesAdicionais:** Informações Referentes a MEI e optante pelo SIMPLES
*   **listaPeriodoSimples:** Períodos em que a empresa optou pelo SIMPLES
*   **socios:** Quadro Societário (Nome, CPF, Cargo/Função)

**Observações:**

*   A API não parece retornar diretamente informações sobre Inscrições Estaduais. Será necessário investigar se essa informação pode ser obtida de outra forma ou se o usuário pode abrir mão dela.
*   A API da Receita Federal requer autenticação via JWT Token. Será necessário entender o processo para obter esse token.


