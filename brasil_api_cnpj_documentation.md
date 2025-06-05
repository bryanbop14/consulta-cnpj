# Brasil API - Documentação da API CNPJ

## Endpoint

```
GET /cnpj/v1/{cnpj}
```

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| cnpj | string | O Cadastro Nacional da Pessoa Jurídica é um número único que identifica uma pessoa jurídica e outros tipos de arranjo jurídico sem personalidade jurídica junto à Receita Federal. |

## Resposta

A API retorna um objeto JSON com os seguintes campos:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| uf | string | Sigla da unidade da federação em que se encontra o estabelecimento. |
| cep | integer | Código de endereçamento postal referente ao logradouro no qual o estabelecimento está localizado. |
| qsa | array | Quadro de sócios e administradores. |
| cnpj | string | Número do CNPJ. |
| pais | null/string | País onde a empresa está registrada. |
| email | null/string | E-mail da empresa. |
| porte | string | Porte da empresa (ex: "DEMAIS"). |
| bairro | string | Bairro onde a empresa está localizada. |
| numero | string | Número do endereço. |
| ddd_fax | string | DDD do fax. |
| municipio | string | Município onde a empresa está localizada. |
| logradouro | string | Nome da rua/avenida. |
| cnae_fiscal | string | Código da atividade econômica principal. |
| codigo_pais | null/integer | Código do país. |
| complemento | string | Complemento do endereço. |
| codigo_porte | integer | Código do porte da empresa. |
| razao_social | string | Razão social da empresa. |
| nome_fantasia | string | Nome fantasia da empresa. |
| capital_social | number | Capital social da empresa. |
| ddd_telefone_1 | string | DDD e telefone principal. |
| ddd_telefone_2 | string | DDD e telefone secundário. |
| opcao_pelo_mei | null/boolean | Indica se é optante pelo MEI. |
| descricao_porte | string | Descrição do porte da empresa. |
| codigo_municipio | integer | Código do município. |
| cnaes_secundarios | array | Lista de CNAEs secundários. |
| natureza_juridica | string | Natureza jurídica da empresa. |
| situacao_especial | string | Situação especial da empresa. |
| opcao_pelo_simples | null/boolean | Indica se é optante pelo Simples Nacional. |
| situacao_cadastral | integer | Código da situação cadastral. |
| data_opcao_pelo_mei | null/string | Data de opção pelo MEI. |
| data_exclusao_do_mei | null/string | Data de exclusão do MEI. |
| cnae_fiscal_descricao | string | Descrição da atividade econômica principal. |
| codigo_municipio_ibge | integer | Código do município no IBGE. |
| data_inicio_atividade | string | Data de início das atividades. |
| data_situacao_especial | null/string | Data da situação especial. |
| data_opcao_pelo_simples | null/string | Data de opção pelo Simples Nacional. |
| data_situacao_cadastral | string | Data da situação cadastral. |
| nome_cidade_no_exterior | string | Nome da cidade no exterior, se aplicável. |
| codigo_natureza_juridica | integer | Código da natureza jurídica. |
| data_exclusao_do_simples | null/string | Data de exclusão do Simples Nacional. |
| motivo_situacao_cadastral | integer | Código do motivo da situação cadastral. |
| ente_federativo_responsavel | string | Ente federativo responsável. |
| identificador_matriz_filial | integer | Identificador de matriz ou filial. |

### Quadro de Sócios e Administradores (QSA)

Cada item do array `qsa` contém:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| pais | string/null | Nome do país onde se localiza o sócio. |
| nome_socio | string | Nome do sócio (pessoa física ou razão social). |
| codigo_pais | integer/null | Código do país onde se localiza o sócio. |
| faixa_etaria | string | Faixa etária do sócio. |
| cnpj_cpf_do_socio | string | CPF ou CNPJ do sócio. |
| qualificacao_socio | string | Qualificação do sócio (cargo/função). |

## Exemplo de Uso

```
GET https://brasilapi.com.br/api/cnpj/v1/19131243000197
```

## Exemplo de Resposta

```json
{
  "uf": "SP",
  "cep": "01311902",
  "qsa": [
    { ... }
  ],
  "cnpj": "19131243000197",
  "pais": null,
  "email": null,
  "porte": "DEMAIS",
  "bairro": "BELA VISTA",
  "numero": "37",
  "ddd_fax": "",
  "municipio": "SAO PAULO",
  "logradouro": "PAULISTA 37",
  "cnae_fiscal": 9430800,
  "codigo_pais": null,
  "complemento": "ANDAR 4",
  "codigo_porte": 5,
  "razao_social": "OPEN KNOWLEDGE BRASIL",
  "nome_fantasia": "REDE PELO CONHECIMENTO LIVRE",
  "capital_social": 0,
  "ddd_telefone_1": "1123851939",
  "ddd_telefone_2": "",
  "opcao_pelo_mei": null,
  "descricao_porte": "",
  "codigo_municipio": 7107,
  "cnaes_secundarios": [ ... ],
  "natureza_juridica": "Associação Privada",
  "situacao_especial": "",
  "opcao_pelo_simples": null,
  "situacao_cadastral": 2,
  "data_opcao_pelo_mei": null,
  "data_exclusao_do_mei": null,
  "cnae_fiscal_descricao": "Atividades de associações de defesa de direitos sociais",
  "codigo_municipio_ibge": 3550308,
  "data_inicio_atividade": "2013-10-03",
  "data_situacao_especial": null,
  "data_opcao_pelo_simples": null,
  "data_situacao_cadastral": "2013-10-03",
  "nome_cidade_no_exterior": "",
  "codigo_natureza_juridica": 3999,
  "data_exclusao_do_simples": null,
  "motivo_situacao_cadastral": 0,
  "ente_federativo_responsavel": "",
  "identificador_matriz_filial": 1
}
```

## Observações

- A API Brasil API é gratuita e não requer autenticação.
- Há limites de uso não especificados claramente na documentação.
- A API não fornece informações sobre inscrições estaduais.
- A API não permite busca por CNAE diretamente, apenas por CNPJ.

