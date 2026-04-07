// Exercício 4: Produtos por categoria

export const products = [
  // Lanches (categoryId: 1)
  { id: 101, categoryId: 1, name: 'X-Burger Clássico', price: 25.90, description: 'Hambúrguer artesanal 180g, queijo cheddar, alface, tomate e molho especial.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', rating: 4.5 },
  { id: 102, categoryId: 1, name: 'X-Bacon Duplo', price: 32.90, description: 'Dois hambúrgueres 120g, bacon crocante, queijo e cebola caramelizada.', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400', rating: 4.7 },
  { id: 103, categoryId: 1, name: 'Hot Dog Especial', price: 18.90, description: 'Salsicha premium, purê, batata palha, milho, ervilha e molhos.', image: 'https://images.unsplash.com/photo-1612392062422-ef19b42f4a46?w=400', rating: 4.2 },
  { id: 104, categoryId: 1, name: 'Sanduíche de Frango', price: 22.90, description: 'Frango grelhado desfiado, cream cheese, rúcula e tomate seco.', image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=400', rating: 4.3 },
  { id: 105, categoryId: 1, name: 'Wrap Mexicano', price: 24.90, description: 'Tortilla com carne moída temperada, guacamole, pico de gallo e sour cream.', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400', rating: 4.4 },

  // Pizzas (categoryId: 2)
  { id: 201, categoryId: 2, name: 'Margherita', price: 39.90, description: 'Molho de tomate, mussarela de búfala, manjericão fresco e azeite.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400', rating: 4.8 },
  { id: 202, categoryId: 2, name: 'Pepperoni', price: 42.90, description: 'Molho de tomate, mussarela, pepperoni e orégano.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400', rating: 4.6 },
  { id: 203, categoryId: 2, name: 'Quatro Queijos', price: 44.90, description: 'Mussarela, gorgonzola, parmesão e catupiry.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400', rating: 4.5 },
  { id: 204, categoryId: 2, name: 'Portuguesa', price: 41.90, description: 'Presunto, ovos, cebola, azeitona, ervilha e mussarela.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', rating: 4.4 },

  // Bebidas (categoryId: 3)
  { id: 301, categoryId: 3, name: 'Coca-Cola 350ml', price: 6.90, description: 'Refrigerante Coca-Cola lata gelada.', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400', rating: 4.5 },
  { id: 302, categoryId: 3, name: 'Suco de Laranja', price: 9.90, description: 'Suco natural de laranja 500ml.', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400', rating: 4.7 },
  { id: 303, categoryId: 3, name: 'Água Mineral 500ml', price: 4.50, description: 'Água mineral sem gás.', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400', rating: 4.0 },
  { id: 304, categoryId: 3, name: 'Milkshake de Chocolate', price: 16.90, description: 'Milkshake cremoso de chocolate com chantilly.', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400', rating: 4.8 },

  // Sobremesas (categoryId: 4)
  { id: 401, categoryId: 4, name: 'Brownie com Sorvete', price: 19.90, description: 'Brownie de chocolate com sorvete de baunilha e calda quente.', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400', rating: 4.9 },
  { id: 402, categoryId: 4, name: 'Petit Gâteau', price: 22.90, description: 'Bolinho de chocolate com centro derretido e sorvete.', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400', rating: 4.8 },
  { id: 403, categoryId: 4, name: 'Churros (6 un)', price: 14.90, description: 'Churros crocantes com doce de leite e açúcar com canela.', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400', rating: 4.5 },

  // Brasileira (categoryId: 5)
  { id: 501, categoryId: 5, name: 'Feijoada Completa', price: 38.90, description: 'Feijoada tradicional com arroz, couve, farofa e laranja.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400', rating: 4.7 },
  { id: 502, categoryId: 5, name: 'Marmitex Executivo', price: 24.90, description: 'Arroz, feijão, bife acebolado, salada e farofa.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', rating: 4.3 },
  { id: 503, categoryId: 5, name: 'Coxinha (6 un)', price: 18.90, description: 'Coxinhas de frango com catupiry, massa crocante.', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', rating: 4.6 },

  // Japonesa (categoryId: 6)
  { id: 601, categoryId: 6, name: 'Combo Sushi (20 peças)', price: 49.90, description: 'Mix de sushis variados com molho shoyu e gengibre.', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400', rating: 4.8 },
  { id: 602, categoryId: 6, name: 'Temaki Salmão', price: 26.90, description: 'Temaki de salmão fresco com cream cheese e cebolinha.', image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400', rating: 4.6 },
  { id: 603, categoryId: 6, name: 'Hot Roll (10 un)', price: 29.90, description: 'Hot roll empanado e frito com salmão e cream cheese.', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400', rating: 4.5 },

  // Saudável (categoryId: 7)
  { id: 701, categoryId: 7, name: 'Salada Caesar', price: 26.90, description: 'Alface romana, croutons, frango grelhado, parmesão e molho caesar.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', rating: 4.4 },
  { id: 702, categoryId: 7, name: 'Bowl de Quinoa', price: 29.90, description: 'Quinoa, grão de bico, abacate, tomate cereja e molho tahine.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', rating: 4.6 },

  // Açaí (categoryId: 8)
  { id: 801, categoryId: 8, name: 'Açaí 500ml', price: 18.90, description: 'Açaí batido com banana, granola, leite em pó e mel.', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400', rating: 4.7 },
  { id: 802, categoryId: 8, name: 'Açaí 700ml Premium', price: 26.90, description: 'Açaí premium com frutas variadas, granola, leite ninho e calda de morango.', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400', rating: 4.9 },
];

export default products;

