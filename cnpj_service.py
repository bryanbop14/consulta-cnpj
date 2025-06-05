import requests
import json
import logging
from typing import Dict, Any, Optional, Union

# Configuração de logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class CNPJService:
    """
    Serviço para consulta de dados de CNPJ utilizando a Brasil API.
    """
    
    def __init__(self, use_cache: bool = True):
        """
        Inicializa o serviço de consulta de CNPJ.
        
        Args:
            use_cache: Se True, utiliza cache para consultas repetidas.
        """
        self.base_url = "https://brasilapi.com.br/api"
        self.use_cache = use_cache
        self.cache = {}  # Cache simples em memória
    
    def _format_cnpj(self, cnpj: str) -> str:
        """
        Formata o CNPJ removendo caracteres especiais.
        
        Args:
            cnpj: Número do CNPJ com ou sem formatação.
            
        Returns:
            CNPJ formatado apenas com números.
        """
        return ''.join(filter(str.isdigit, cnpj))
    
    def _validate_cnpj(self, cnpj: str) -> bool:
        """
        Valida se o CNPJ tem o formato correto.
        
        Args:
            cnpj: Número do CNPJ apenas com dígitos.
            
        Returns:
            True se o CNPJ for válido, False caso contrário.
        """
        if not cnpj or not cnpj.isdigit():
            return False
        
        if len(cnpj) != 14:
            return False
            
        # Implementação da validação do dígito verificador do CNPJ
        # Primeiro dígito verificador
        soma = 0
        peso = 5
        for i in range(12):
            soma += int(cnpj[i]) * peso
            peso = 9 if peso == 2 else peso - 1
        
        resto = soma % 11
        digito1 = 0 if resto < 2 else 11 - resto
        
        if int(cnpj[12]) != digito1:
            return False
        
        # Segundo dígito verificador
        soma = 0
        peso = 6
        for i in range(13):
            soma += int(cnpj[i]) * peso
            peso = 9 if peso == 2 else peso - 1
        
        resto = soma % 11
        digito2 = 0 if resto < 2 else 11 - resto
        
        return int(cnpj[13]) == digito2
    
    def get_company_data(self, cnpj: str) -> Dict[str, Any]:
        """
        Consulta os dados de uma empresa pelo CNPJ.
        
        Args:
            cnpj: Número do CNPJ com ou sem formatação.
            
        Returns:
            Dicionário com os dados da empresa ou mensagem de erro.
            
        Raises:
            ValueError: Se o CNPJ for inválido.
            Exception: Se ocorrer um erro na consulta.
        """
        # Formata o CNPJ
        formatted_cnpj = self._format_cnpj(cnpj)
        
        # Valida o CNPJ
        if not self._validate_cnpj(formatted_cnpj):
            raise ValueError("CNPJ inválido")
        
        # Verifica se os dados estão em cache
        if self.use_cache and formatted_cnpj in self.cache:
            logger.info(f"Dados do CNPJ {formatted_cnpj} encontrados em cache")
            return self.cache[formatted_cnpj]
        
        try:
            # Faz a requisição à API
            url = f"{self.base_url}/cnpj/v1/{formatted_cnpj}"
            logger.info(f"Consultando API: {url}")
            
            response = requests.get(url)
            response.raise_for_status()  # Lança exceção para códigos de erro HTTP
            
            data = response.json()
            
            # Armazena os dados em cache
            if self.use_cache:
                self.cache[formatted_cnpj] = data
            
            return data
            
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 404:
                logger.warning(f"CNPJ {formatted_cnpj} não encontrado na API")
                return {"error": "CNPJ não encontrado na base de dados"}
            else:
                logger.error(f"Erro HTTP ao consultar CNPJ {formatted_cnpj}: {e}")
                raise Exception(f"Erro ao consultar CNPJ: {e}")
                
        except requests.exceptions.RequestException as e:
            logger.error(f"Erro de conexão ao consultar CNPJ {formatted_cnpj}: {e}")
            raise Exception(f"Erro de conexão ao consultar CNPJ: {e}")
            
        except Exception as e:
            logger.error(f"Erro inesperado ao consultar CNPJ {formatted_cnpj}: {e}")
            raise Exception(f"Erro inesperado ao consultar CNPJ: {e}")
    
    def search_by_cnae(self, cnae: str) -> Dict[str, Any]:
        """
        Busca empresas por CNAE.
        
        Nota: A Brasil API não suporta busca direta por CNAE.
        Esta é uma implementação simulada para demonstração.
        
        Args:
            cnae: Código CNAE com ou sem formatação.
            
        Returns:
            Mensagem informando que a funcionalidade não está disponível.
        """
        # Formata o CNAE removendo caracteres especiais
        formatted_cnae = ''.join(filter(str.isdigit, cnae))
        
        # Como a Brasil API não suporta busca por CNAE, retornamos uma mensagem informativa
        return {
            "message": "Busca por CNAE não disponível na API atual",
            "cnae": formatted_cnae,
            "suggestion": "Para buscar empresas por CNAE, seria necessário implementar uma solução alternativa, como manter uma base de dados local de CNAEs ou utilizar outra API."
        }

