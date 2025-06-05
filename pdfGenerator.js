import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

/**
 * Gera um PDF com os dados da empresa
 * @param {Object} data - Dados da empresa
 * @returns {Blob} - Arquivo PDF gerado
 */
export const generatePDF = (data) => {
  // Cria um novo documento PDF
  const doc = new jsPDF();
  
  // Configurações
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  
  // Adiciona título
  doc.setFontSize(18);
  doc.setTextColor(40, 40, 40);
  doc.text('Relatório de Consulta CNPJ', pageWidth / 2, 20, { align: 'center' });
  
  // Adiciona data e hora
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  const now = new Date();
  doc.text(`Gerado em: ${now.toLocaleDateString()} às ${now.toLocaleTimeString()}`, pageWidth / 2, 27, { align: 'center' });
  
  // Linha separadora
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, 30, pageWidth - margin, 30);
  
  // Dados Gerais
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  doc.text('Dados Gerais', margin, 40);
  
  const dadosGerais = [
    ['Razão Social', data.dados_gerais?.razao_social || 'Não informado'],
    ['Nome Fantasia', data.dados_gerais?.nome_fantasia || 'Não informado'],
    ['CNPJ', data.dados_gerais?.cnpj || 'Não informado'],
    ['Data de Abertura', data.dados_gerais?.data_abertura || 'Não informado'],
    ['Natureza Jurídica', data.dados_gerais?.natureza_juridica || 'Não informado'],
    ['Situação Cadastral', data.dados_gerais?.situacao_cadastral || 'Não informado'],
    ['Data da Situação Cadastral', data.dados_gerais?.data_situacao_cadastral || 'Não informado'],
    ['Porte da Empresa', data.dados_gerais?.porte || 'Não informado'],
    ['Capital Social', data.dados_gerais?.capital_social || 'Não informado']
  ];
  
  doc.autoTable({
    startY: 45,
    head: [['Campo', 'Valor']],
    body: dadosGerais,
    theme: 'grid',
    headStyles: { fillColor: [60, 60, 60] },
    styles: { fontSize: 10 },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 'auto' }
    }
  });
  
  // Endereço
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  doc.text('Endereço', margin, doc.lastAutoTable.finalY + 15);
  
  const endereco = [
    ['Logradouro', data.endereco?.logradouro || 'Não informado'],
    ['Número', data.endereco?.numero || 'Não informado'],
    ['Complemento', data.endereco?.complemento || 'Não informado'],
    ['Bairro', data.endereco?.bairro || 'Não informado'],
    ['Cidade', data.endereco?.municipio || 'Não informado'],
    ['UF', data.endereco?.uf || 'Não informado'],
    ['CEP', data.endereco?.cep || 'Não informado']
  ];
  
  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 20,
    head: [['Campo', 'Valor']],
    body: endereco,
    theme: 'grid',
    headStyles: { fillColor: [60, 60, 60] },
    styles: { fontSize: 10 },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 'auto' }
    }
  });
  
  // Contatos
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  doc.text('Contatos', margin, doc.lastAutoTable.finalY + 15);
  
  const contatos = [
    ['Telefone Principal', data.contatos?.telefone_1 || 'Não informado'],
    ['Telefone Secundário', data.contatos?.telefone_2 || 'Não informado'],
    ['Fax', data.contatos?.fax || 'Não informado'],
    ['E-mail', data.contatos?.email || 'Não informado']
  ];
  
  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 20,
    head: [['Campo', 'Valor']],
    body: contatos,
    theme: 'grid',
    headStyles: { fillColor: [60, 60, 60] },
    styles: { fontSize: 10 },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 'auto' }
    }
  });
  
  // Nova página para atividades e sócios
  doc.addPage();
  
  // Atividade Principal
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  doc.text('Atividade Principal', margin, 20);
  
  const atividadePrincipal = [
    ['Código', data.atividades?.principal?.codigo || 'Não informado'],
    ['Descrição', data.atividades?.principal?.descricao || 'Não informado']
  ];
  
  doc.autoTable({
    startY: 25,
    body: atividadePrincipal,
    theme: 'grid',
    styles: { fontSize: 10 },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 'auto' }
    }
  });
  
  // Atividades Secundárias
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  doc.text('Atividades Secundárias', margin, doc.lastAutoTable.finalY + 15);
  
  if (data.atividades?.secundarias && data.atividades.secundarias.length > 0) {
    const atividadesSecundarias = data.atividades.secundarias.map(atividade => [
      atividade.codigo || 'Não informado',
      atividade.descricao || 'Não informado'
    ]);
    
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 20,
      head: [['Código', 'Descrição']],
      body: atividadesSecundarias,
      theme: 'grid',
      headStyles: { fillColor: [60, 60, 60] },
      styles: { fontSize: 10 },
      columnStyles: {
        0: { cellWidth: 80 },
        1: { cellWidth: 'auto' }
      }
    });
  } else {
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Nenhuma atividade secundária registrada', margin, doc.lastAutoTable.finalY + 25);
  }
  
  // Quadro Societário
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  doc.text('Quadro Societário', margin, doc.lastAutoTable.finalY + 25);
  
  if (data.socios && data.socios.length > 0) {
    const socios = data.socios.map(socio => [
      socio.nome || 'Não informado',
      socio.cpf_cnpj || 'Não informado',
      socio.qualificacao || 'Não informado'
    ]);
    
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 30,
      head: [['Nome', 'CPF/CNPJ', 'Qualificação']],
      body: socios,
      theme: 'grid',
      headStyles: { fillColor: [60, 60, 60] },
      styles: { fontSize: 10 }
    });
  } else {
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Nenhum sócio registrado', margin, doc.lastAutoTable.finalY + 35);
  }
  
  // Informações Fiscais
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  doc.text('Informações Fiscais', margin, doc.lastAutoTable.finalY + 25);
  
  const infoFiscal = [
    ['Regime Tributário', data.info_fiscal?.regime_tributario || 'Não informado'],
    ['Optante pelo Simples Nacional', data.info_fiscal?.simples_nacional?.optante ? 'Sim' : 'Não'],
    ['Data de Opção pelo Simples', data.info_fiscal?.simples_nacional?.data_opcao || 'Não informado'],
    ['Data de Exclusão do Simples', data.info_fiscal?.simples_nacional?.data_exclusao || 'Não informado'],
    ['Optante pelo MEI', data.info_fiscal?.mei?.optante ? 'Sim' : 'Não'],
    ['Data de Opção pelo MEI', data.info_fiscal?.mei?.data_opcao || 'Não informado'],
    ['Data de Exclusão do MEI', data.info_fiscal?.mei?.data_exclusao || 'Não informado']
  ];
  
  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 30,
    head: [['Campo', 'Valor']],
    body: infoFiscal,
    theme: 'grid',
    headStyles: { fillColor: [60, 60, 60] },
    styles: { fontSize: 10 },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 'auto' }
    }
  });
  
  // Rodapé
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Página ${i} de ${pageCount}`, pageWidth - margin, doc.internal.pageSize.getHeight() - 10);
    doc.text('Consulta CNPJ - Documento gerado para fins informativos', margin, doc.internal.pageSize.getHeight() - 10);
  }
  
  // Retorna o PDF como blob
  return doc.output('blob');
};

/**
 * Salva o PDF gerado
 * @param {Object} data - Dados da empresa
 */
export const savePDF = (data) => {
  const doc = generatePDF(data);
  const url = URL.createObjectURL(doc);
  
  // Cria um link para download
  const link = document.createElement('a');
  link.href = url;
  link.download = `cnpj_${data.dados_gerais?.cnpj?.replace(/[^\d]/g, '')}.pdf`;
  link.click();
  
  // Limpa o objeto URL
  setTimeout(() => URL.revokeObjectURL(url), 100);
};

