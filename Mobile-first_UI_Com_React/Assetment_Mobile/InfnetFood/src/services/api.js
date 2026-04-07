// Exercício 15: Integração com APIs externas
// ViaCEP para auto-preenchimento de endereço no Checkout
// API de imagem aleatória para pratos

import axios from 'axios';

const VIA_CEP_BASE = 'https://viacep.com.br/ws';

/**
 * Busca endereço pelo CEP usando a API ViaCEP
 * @param {string} cep - CEP no formato 00000000 ou 00000-000
 * @returns {object} Dados do endereço
 */
export const fetchAddressByCep = async (cep) => {
  try {
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length !== 8) {
      throw new Error('CEP deve ter 8 dígitos');
    }
    const response = await axios.get(`${VIA_CEP_BASE}/${cleanCep}/json/`);
    if (response.data.erro) {
      throw new Error('CEP não encontrado');
    }
    return {
      street: response.data.logradouro,
      neighborhood: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf,
      cep: response.data.cep,
      complement: response.data.complemento,
    };
  } catch (error) {
    console.error('Erro ao buscar CEP:', error.message);
    throw error;
  }
};

/**
 * Retorna URL de imagem aleatória de comida via Unsplash Source
 * @param {string} query - Termo de busca (ex: 'hamburger', 'pizza')
 * @returns {string} URL da imagem
 */
export const getRandomFoodImage = (query = 'food') => {
  return `https://source.unsplash.com/400x300/?${encodeURIComponent(query)}`;
};

export default { fetchAddressByCep, getRandomFoodImage };

