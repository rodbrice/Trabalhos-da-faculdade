import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise6() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 6: Layout Básico com CSS Grid</h1>
        <p className="exercise-description">
          Layout responsivo com CSS Grid contendo header, nav, main, aside e footer.
          Grid com 3 colunas e 3 linhas, onde header e footer ocupam todas as colunas.
        </p>
        <BackButton />
      </div>

      <div className="demo-area" style={{ padding: 0, border: 'none' }}>
        <div className="grid-layout-6">
          <header className="grid-header-6">Header</header>
          <nav className="grid-nav-6">Nav</nav>
          <main className="grid-main-6">Main Content</main>
          <aside className="grid-aside-6">Aside</aside>
          <footer className="grid-footer-6">Footer</footer>
        </div>
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<div class="grid-layout-6">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main Content</main>
  <aside>Aside</aside>
  <footer>Footer</footer>
</div>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.grid-layout-6 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 15px;
  min-height: 500px;
}

.grid-header-6 {
  grid-column: 1 / -1;
  background: #667eea;
  padding: 20px;
  color: white;
}

.grid-nav-6 {
  grid-column: 1 / 2;
  background: #764ba2;
  padding: 20px;
  color: white;
}

.grid-main-6 {
  grid-column: 2 / 3;
  background: #f093fb;
  padding: 20px;
  color: white;
}

.grid-aside-6 {
  grid-column: 3 / 4;
  background: #4facfe;
  padding: 20px;
  color: white;
}

.grid-footer-6 {
  grid-column: 1 / -1;
  background: #43e97b;
  padding: 20px;
  color: white;
}`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise6;
