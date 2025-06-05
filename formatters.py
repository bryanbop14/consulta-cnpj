from typing import Dict, Any, List, Optional
import re
from datetime import datetime

def format_cnpj(cnpj: str) -> str:
    """
    Formata um CNPJ para o padrão XX.XXX.XXX/XXXX-XX.
    
    Args:
        cnpj: CNPJ apenas com números.
        
    Returns:
        CNPJ formatado.
    """
    if not cnpj or len(cnpj) != 14:
        return cnpj
    
    return f"{cnpj[:2]}.{cnpj[2:5]}.{cnpj[5:8]}/{cnpj[8:12]}-{cnpj[12:]}"

def format_cep(cep: str) -> str:
    """
    Formata um CEP para o padrão XXXXX-XXX.
    
    Args:
        cep: CEP apenas com números.
        
    Returns:
        CEP formatado.
    """
    if not cep or len(cep) != 8:
        return cep
    
    return f"{cep[:5]}-{cep[5:]}"

def format_phone(phone: str) -> str:
    """
    Formata um número de telefone para o padrão (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.
    
    Args:
        phone: Número de telefone apenas com números.
        
    Returns:
        Telefone formatado.
    """
    if not phone:
        return ""
    
    # Remove caracteres não numéricos
    phone_digits = re.sub(r'\D', '', phone)
    
    if len(phone_digits) == 10:  # Telefone fixo
        return f"({phone_digits[:2]}) {phone_digits[2:6]}-{phone_digits[6:]}"
    elif len(phone_digits) == 11:  # Celular
        return f"({phone_digits[:2]}) {phone_digits[2:7]}-{phone_digits[7:]}"
    else:
        return phone  # Retorna o original se não conseguir formatar

def format_date(date_str: Optional[str]) -> str:
    """
    Formata uma data no formato ISO para o padrão DD/MM/AAAA.
    
    Args:
        date_str: Data no formato ISO (AAAA-MM-DD).
        
    Returns:
        Data formatada ou string vazia se a data for None.
    """
    if not date_str:
        return ""
    
    try:
        date_obj = datetime.fromisoformat(date_str)
        return date_obj.strftime("%d/%m/%Y")
    except (ValueError, TypeError):
        return date_str  # Retorna o original se não conseguir formatar

def format_currency(value: Optional[float]) -> str:
    """
    Formata um valor para o padrão de moeda brasileira.
    
    Args:
        value: Valor numérico.
        
    Returns:
        Valor formatado como moeda (R$ X.XXX,XX).
    """
    if value is None:
        return "R$ 0,00"
    
    return f"R$ {value:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")

def format_company_data(data: Dict[str, Any]) -> Dict[str, Any]:
    """
    Formata os dados da empresa para exibição.
    
    Args:
        data: Dados da empresa retornados pela API.
        
    Returns:
        Dados formatados para exibição.
    """
    if "error" in data:
        return data
    
    formatted_data = {
        "dados_gerais": {
            "razao_social": data.get("razao_social", ""),
            "nome_fantasia": data.get("nome_fantasia", ""),
            "cnpj": format_cnpj(data.get("cnpj", "")),
            "data_abertura": format_date(data.get("data_inicio_atividade", "")),
            "natureza_juridica": data.get("natureza_juridica", ""),
            "situacao_cadastral": _get_situacao_cadastral(data.get("situacao_cadastral", 0)),
            "data_situacao_cadastral": format_date(data.get("data_situacao_cadastral", "")),
            "porte": data.get("porte", ""),
            "capital_social": format_currency(data.get("capital_social", 0)),
        },
        "endereco": {
            "logradouro": data.get("logradouro", ""),
            "numero": data.get("numero", ""),
            "complemento": data.get("complemento", ""),
            "bairro": data.get("bairro", ""),
            "municipio": data.get("municipio", ""),
            "uf": data.get("uf", ""),
            "cep": format_cep(str(data.get("cep", ""))),
        },
        "contatos": {
            "telefone_1": format_phone(data.get("ddd_telefone_1", "")),
            "telefone_2": format_phone(data.get("ddd_telefone_2", "")),
            "fax": format_phone(data.get("ddd_fax", "")),
            "email": data.get("email", ""),
        },
        "atividades": {
            "principal": {
                "codigo": data.get("cnae_fiscal", ""),
                "descricao": data.get("cnae_fiscal_descricao", ""),
            },
            "secundarias": _format_cnaes_secundarios(data.get("cnaes_secundarios", [])),
        },
        "socios": _format_socios(data.get("qsa", [])),
        "info_fiscal": {
            "regime_tributario": data.get("descricao_porte", ""),
            "simples_nacional": {
                "optante": data.get("opcao_pelo_simples", False),
                "data_opcao": format_date(data.get("data_opcao_pelo_simples", "")),
                "data_exclusao": format_date(data.get("data_exclusao_do_simples", "")),
            },
            "mei": {
                "optante": data.get("opcao_pelo_mei", False),
                "data_opcao": format_date(data.get("data_opcao_pelo_mei", "")),
                "data_exclusao": format_date(data.get("data_exclusao_do_mei", "")),
            },
        },
    }
    
    return formatted_data

def _get_situacao_cadastral(codigo: int) -> str:
    """
    Retorna a descrição da situação cadastral com base no código.
    
    Args:
        codigo: Código da situação cadastral.
        
    Returns:
        Descrição da situação cadastral.
    """
    situacoes = {
        1: "NULA",
        2: "ATIVA",
        3: "SUSPENSA",
        4: "INAPTA",
        8: "BAIXADA",
    }
    
    return situacoes.get(codigo, "DESCONHECIDA")

def _format_cnaes_secundarios(cnaes: List[Dict[str, Any]]) -> List[Dict[str, str]]:
    """
    Formata a lista de CNAEs secundários.
    
    Args:
        cnaes: Lista de CNAEs secundários.
        
    Returns:
        Lista formatada de CNAEs secundários.
    """
    formatted_cnaes = []
    
    for cnae in cnaes:
        formatted_cnaes.append({
            "codigo": cnae.get("codigo", ""),
            "descricao": cnae.get("descricao", ""),
        })
    
    return formatted_cnaes

def _format_socios(socios: List[Dict[str, Any]]) -> List[Dict[str, str]]:
    """
    Formata a lista de sócios.
    
    Args:
        socios: Lista de sócios.
        
    Returns:
        Lista formatada de sócios.
    """
    formatted_socios = []
    
    for socio in socios:
        formatted_socios.append({
            "nome": socio.get("nome_socio", ""),
            "cpf_cnpj": socio.get("cnpj_cpf_do_socio", ""),
            "qualificacao": socio.get("qualificacao_socio", ""),
        })
    
    return formatted_socios

