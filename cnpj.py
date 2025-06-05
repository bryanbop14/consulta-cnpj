from flask import Blueprint, jsonify, request
import logging
from src.services.cnpj_service import CNPJService
from src.utils.validators import validate_search_params
from src.utils.formatters import format_company_data

# Configuração de logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Criação do blueprint
cnpj_bp = Blueprint('cnpj', __name__)

# Instância do serviço
cnpj_service = CNPJService(use_cache=True)

@cnpj_bp.route('/search', methods=['GET'])
def search():
    """
    Endpoint para busca de empresas por CNPJ ou CNAE.
    
    Query parameters:
        tipo: Tipo de busca ('cnpj' ou 'cnae').
        valor: Valor a ser buscado.
        
    Returns:
        Dados da empresa ou mensagem de erro.
    """
    # Obtém os parâmetros da requisição
    params = {
        "tipo": request.args.get('tipo', ''),
        "valor": request.args.get('valor', '')
    }
    
    # Valida os parâmetros
    valid, message, validated_params = validate_search_params(params)
    if not valid:
        logger.warning(f"Parâmetros inválidos: {message}")
        return jsonify({"error": message}), 400
    
    try:
        # Realiza a busca de acordo com o tipo
        if validated_params["tipo"] == "cnpj":
            data = cnpj_service.get_company_data(validated_params["valor"])
        else:  # cnae
            data = cnpj_service.search_by_cnae(validated_params["valor"])
        
        # Verifica se houve erro na busca
        if "error" in data:
            logger.warning(f"Erro na busca: {data['error']}")
            return jsonify(data), 404
        
        # Formata os dados para exibição
        formatted_data = format_company_data(data) if validated_params["tipo"] == "cnpj" else data
        
        return jsonify(formatted_data)
        
    except ValueError as e:
        logger.warning(f"Erro de validação: {str(e)}")
        return jsonify({"error": str(e)}), 400
        
    except Exception as e:
        logger.error(f"Erro ao processar requisição: {str(e)}")
        return jsonify({"error": "Erro ao processar requisição"}), 500

@cnpj_bp.route('/cnpj/<string:cnpj>', methods=['GET'])
def get_cnpj(cnpj):
    """
    Endpoint para busca direta por CNPJ.
    
    Path parameters:
        cnpj: Número do CNPJ com ou sem formatação.
        
    Returns:
        Dados da empresa ou mensagem de erro.
    """
    try:
        # Busca os dados da empresa
        data = cnpj_service.get_company_data(cnpj)
        
        # Verifica se houve erro na busca
        if "error" in data:
            logger.warning(f"CNPJ não encontrado: {cnpj}")
            return jsonify(data), 404
        
        # Formata os dados para exibição
        formatted_data = format_company_data(data)
        
        return jsonify(formatted_data)
        
    except ValueError as e:
        logger.warning(f"CNPJ inválido: {cnpj} - {str(e)}")
        return jsonify({"error": str(e)}), 400
        
    except Exception as e:
        logger.error(f"Erro ao processar CNPJ {cnpj}: {str(e)}")
        return jsonify({"error": "Erro ao processar requisição"}), 500

@cnpj_bp.route('/cnae/<string:cnae>', methods=['GET'])
def get_cnae(cnae):
    """
    Endpoint para busca direta por CNAE.
    
    Path parameters:
        cnae: Código CNAE com ou sem formatação.
        
    Returns:
        Lista de empresas ou mensagem de erro.
    """
    try:
        # Busca empresas pelo CNAE
        data = cnpj_service.search_by_cnae(cnae)
        
        return jsonify(data)
        
    except ValueError as e:
        logger.warning(f"CNAE inválido: {cnae} - {str(e)}")
        return jsonify({"error": str(e)}), 400
        
    except Exception as e:
        logger.error(f"Erro ao processar CNAE {cnae}: {str(e)}")
        return jsonify({"error": "Erro ao processar requisição"}), 500

