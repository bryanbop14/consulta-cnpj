import re
from typing import Dict, Any, Tuple, Union

def validate_cnpj(cnpj: str) -> Tuple[bool, str]:
    """
    Valida se o CNPJ tem o formato correto.
    
    Args:
        cnpj: Número do CNPJ com ou sem formatação.
        
    Returns:
        Tupla (válido, mensagem) onde:
        - válido: True se o CNPJ for válido, False caso contrário.
        - mensagem: Mensagem de erro ou sucesso.
    """
    # Remove caracteres não numéricos
    cnpj_digits = ''.join(filter(str.isdigit, cnpj))
    
    # Verifica se tem 14 dígitos
    if not cnpj_digits or len(cnpj_digits) != 14:
        return False, "CNPJ deve conter 14 dígitos"
    
    # Verifica se todos os dígitos são iguais (caso inválido)
    if len(set(cnpj_digits)) == 1:
        return False, "CNPJ inválido"
    
    # Primeiro dígito verificador
    soma = 0
    peso = 5
    for i in range(12):
        soma += int(cnpj_digits[i]) * peso
        peso = 9 if peso == 2 else peso - 1
    
    resto = soma % 11
    digito1 = 0 if resto < 2 else 11 - resto
    
    if int(cnpj_digits[12]) != digito1:
        return False, "CNPJ inválido (dígito verificador incorreto)"
    
    # Segundo dígito verificador
    soma = 0
    peso = 6
    for i in range(13):
        soma += int(cnpj_digits[i]) * peso
        peso = 9 if peso == 2 else peso - 1
    
    resto = soma % 11
    digito2 = 0 if resto < 2 else 11 - resto
    
    if int(cnpj_digits[13]) != digito2:
        return False, "CNPJ inválido (dígito verificador incorreto)"
    
    return True, "CNPJ válido"

def validate_cnae(cnae: str) -> Tuple[bool, str]:
    """
    Valida se o CNAE tem o formato correto.
    
    Args:
        cnae: Código CNAE com ou sem formatação.
        
    Returns:
        Tupla (válido, mensagem) onde:
        - válido: True se o CNAE for válido, False caso contrário.
        - mensagem: Mensagem de erro ou sucesso.
    """
    # Remove caracteres não numéricos
    cnae_digits = ''.join(filter(str.isdigit, cnae))
    
    # Verifica se tem 7 dígitos (padrão CNAE)
    if not cnae_digits:
        return False, "CNAE não pode estar vazio"
    
    if len(cnae_digits) != 7:
        return False, "CNAE deve conter 7 dígitos"
    
    # Formato padrão do CNAE: NNNN-N/NN
    # Não implementamos validação completa pois depende de uma base de CNAEs válidos
    
    return True, "CNAE válido"

def validate_search_params(params: Dict[str, Any]) -> Tuple[bool, str, Dict[str, Any]]:
    """
    Valida os parâmetros de busca.
    
    Args:
        params: Dicionário com os parâmetros de busca.
        
    Returns:
        Tupla (válido, mensagem, parâmetros_validados) onde:
        - válido: True se os parâmetros forem válidos, False caso contrário.
        - mensagem: Mensagem de erro ou sucesso.
        - parâmetros_validados: Dicionário com os parâmetros validados.
    """
    validated_params = {}
    
    # Verifica se o tipo de busca foi especificado
    if "tipo" not in params:
        return False, "Tipo de busca não especificado", {}
    
    tipo = params["tipo"].lower()
    validated_params["tipo"] = tipo
    
    if tipo not in ["cnpj", "cnae"]:
        return False, "Tipo de busca inválido. Use 'cnpj' ou 'cnae'", {}
    
    # Verifica se o valor de busca foi especificado
    if "valor" not in params or not params["valor"]:
        return False, f"Valor de {tipo.upper()} não especificado", {}
    
    valor = params["valor"]
    validated_params["valor"] = valor
    
    # Valida o valor de acordo com o tipo
    if tipo == "cnpj":
        valid, message = validate_cnpj(valor)
        if not valid:
            return False, message, {}
    elif tipo == "cnae":
        valid, message = validate_cnae(valor)
        if not valid:
            return False, message, {}
    
    return True, f"{tipo.upper()} válido", validated_params

