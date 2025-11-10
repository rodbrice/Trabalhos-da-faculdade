import React from 'react';
import { Link } from 'react-router-dom';

const Exercise1 = () => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>O que é React?</h1>
          <p>Exercício 1: Conceitos básicos do React</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="content-box">
          <h2>O que é React</h2>
          <p>
            React é uma biblioteca JavaScript de código aberto para construção de interfaces 
            de usuário (UI), especialmente para aplicações web. Desenvolvido pelo Facebook 
            (agora Meta), o React foi lançado em 2013 e rapidamente se tornou uma das 
            ferramentas mais populares no desenvolvimento front-end.
          </p>
          
          <h3>Principais características do React:</h3>
          <ul>
            <li><strong>Baseado em componentes:</strong> O React permite criar interfaces complexas a partir de pequenos componentes reutilizáveis.</li>
            <li><strong>Virtual DOM:</strong> Utiliza um DOM virtual para otimizar as atualizações da interface, tornando as aplicações mais rápidas.</li>
            <li><strong>Unidirecional:</strong> O fluxo de dados segue uma direção única, facilitando o debugging e o entendimento do código.</li>
            <li><strong>JSX:</strong> Permite escrever HTML dentro do JavaScript.</li>
            <li><strong>Reativo:</strong> A interface se atualiza automaticamente quando o estado dos dados muda.</li>
          </ul>
          
          <h3>Por que usar React?</h3>
          <p>
            React facilita a criação de interfaces modernas e interativas, 
            atualizando automaticamente a tela quando os dados mudam.
          </p>
          
          <div className="user-profile">
            <h3>Flexbox: Direção e Eixo</h3>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '5px', flex: 1 }}>
                <h4>Eixo Principal (Main Axis)</h4>
                <p>Direção horizontal (row)</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '5px', flex: 1 }}>
                <h4>Eixo Transversal (Cross Axis)</h4>
                <p>Direção vertical (column)</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '1rem', maxWidth: '300px' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem', borderRadius: '5px' }}>Item 1</div>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem', borderRadius: '5px' }}>Item 2</div>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem', borderRadius: '5px' }}>Item 3</div>
            </div>
            <p><em>Exemplo de flex-direction: column</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise1;