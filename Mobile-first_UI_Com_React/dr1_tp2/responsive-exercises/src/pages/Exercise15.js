import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise15() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 15: Media Query - prefers-color-scheme</h1>
        <p className="exercise-description">
          Detecta a preferência de esquema de cores do usuário (claro ou escuro) e ajusta 
          o layout automaticamente. Mude as configurações do seu sistema para testar!
        </p>
        <BackButton />
      </div>

      <div className="demo-area" style={{ padding: 0, border: 'none' }}>
        <div className="color-scheme-demo-15">
          <header className="scheme-header-15">
            <h1>🎨 Preferência de Cores do Sistema</h1>
            <p className="current-scheme-15"></p>
          </header>
          
          <main className="scheme-main-15">
            <section className="scheme-card-15">
              <h2>O que é prefers-color-scheme?</h2>
              <p>
                É uma media query que detecta se o usuário configurou seu sistema 
                operacional para usar um tema claro ou escuro.
              </p>
            </section>

            <section className="scheme-card-15">
              <h2>Por que usar?</h2>
              <p>
                Respeitar a preferência do usuário melhora a experiência, reduz 
                fadiga ocular e economiza bateria em telas OLED.
              </p>
            </section>

            <section className="scheme-card-15">
              <h2>Como testar?</h2>
              <p>
                No Windows: Configurações → Personalização → Cores<br/>
                No Mac: Preferências → Geral → Aparência<br/>
                No Linux: Configurações de tema do sistema
              </p>
            </section>
          </main>
          
          <footer className="scheme-footer-15">
            <p>💡 Altere o tema do sistema e veja a página mudar automaticamente!</p>
          </footer>
        </div>
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<div class="color-scheme-demo-15">
  <header class="scheme-header-15">
    <h1>Preferência de Cores do Sistema</h1>
  </header>
  <main class="scheme-main-15">
    <section class="scheme-card-15">...</section>
  </main>
  <footer class="scheme-footer-15">...</footer>
</div>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS - Tema Light (padrão):</h3>
        <pre>
{`/* Tema claro (light) - padrão */
.color-scheme-demo-15 {
  background: #ffffff;
  color: #333333;
}

.scheme-header-15 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.scheme-card-15 {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.current-scheme-15::before {
  content: "☀️ Modo Claro Ativado";
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS - Tema Dark:</h3>
        <pre>
{`/* Tema escuro (dark) */
@media (prefers-color-scheme: dark) {
  .color-scheme-demo-15 {
    background: #1a1a1a;
    color: #e0e0e0;
  }
  
  .scheme-header-15 {
    background: linear-gradient(135deg, #4a5fd9 0%, #5a3a82 100%);
  }
  
  .scheme-card-15 {
    background: #2a2a2a;
    border: 1px solid #404040;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
  
  .scheme-footer-15 {
    background: #2a2a2a;
    border-top: 1px solid #404040;
  }
  
  .current-scheme-15::before {
    content: "🌙 Modo Escuro Ativado";
  }
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>Conceito:</h3>
        <pre style={{ color: '#fff' }}>
{`Valores de prefers-color-scheme:
- light: Usuário prefere tema claro
- dark: Usuário prefere tema escuro
- no-preference: Sem preferência definida

Benefícios:
✓ Respeita a escolha do usuário
✓ Reduz fadiga ocular
✓ Economiza bateria (OLED)
✓ Melhora acessibilidade

Dica:
Teste sempre ambos os temas para garantir
boa legibilidade e contraste adequado.`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise15;
