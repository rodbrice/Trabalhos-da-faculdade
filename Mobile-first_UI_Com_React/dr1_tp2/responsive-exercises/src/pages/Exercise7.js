import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise7() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 7: Ajustando Responsividade com Meta Viewport</h1>
        <p className="exercise-description">
          Este exercício demonstra a importância da tag &lt;meta name="viewport"&gt; 
          e os efeitos de diferentes configurações no layout responsivo.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Tag Meta Viewport Atual:</div>
        <div className="code-snippet" style={{ marginTop: 0 }}>
          <pre>
{`<meta name="viewport" 
      content="width=device-width, initial-scale=1.0">`}
          </pre>
        </div>

        <div className="viewport-content-7">
          <h2>Observações dos Testes:</h2>
          
          <div className="observation-box-7">
            <h3>1. Sem a tag &lt;meta viewport&gt;</h3>
            <p>
              <strong>Observação:</strong> Ao remover a tag meta viewport, a página é renderizada 
              como se estivesse em um desktop, mesmo em dispositivos móveis. O navegador assume 
              uma largura padrão de aproximadamente 980px, fazendo com que todo o conteúdo apareça 
              reduzido. Os elementos ficam muito pequenos e é necessário dar zoom para ler o texto. 
              O layout responsivo simplesmente não funciona, pois os media queries não são acionados 
              corretamente. A experiência do usuário fica comprometida, exigindo scroll horizontal 
              e zoom constante.
            </p>
          </div>

          <div className="observation-box-7">
            <h3>2. Modificando o initial-scale</h3>
            <p>
              <strong>Teste realizado:</strong> Alterar de initial-scale=1.0 para initial-scale=2.0 
              e initial-scale=0.5
            </p>
            <p>
              <strong>Observação:</strong> Com initial-scale=2.0, a página carrega com um zoom de 200%, 
              fazendo com que tudo apareça ampliado. Os elementos ficam maiores que o viewport, 
              forçando o usuário a fazer scroll horizontal para ver o conteúdo completo. Com 
              initial-scale=0.5, o efeito é oposto - a página carrega com 50% do zoom, tornando 
              tudo muito pequeno. O initial-scale=1.0 é o ideal, pois carrega a página na escala 
              real (100%), proporcionando a melhor experiência de visualização inicial.
            </p>
          </div>

          <div className="observation-box-7">
            <h3>3. Experimentando outros valores de content</h3>
            <p>
              <strong>Testes realizados:</strong> width=500 e initial-scale=2
            </p>
            <p>
              <strong>Observação com width=500:</strong> Ao definir uma largura fixa de 500px, 
              o viewport passa a ter sempre essa largura, independente do dispositivo. Em telas 
              menores que 500px (como smartphones), isso causa scroll horizontal indesejado. 
              Em telas maiores, o conteúdo fica limitado a 500px, desperdiçando espaço. O valor 
              width=device-width é essencial para um layout verdadeiramente responsivo.
            </p>
            <p>
              <strong>Observação com initial-scale=2:</strong> Combinado com width=device-width, 
              o initial-scale=2 dobra o tamanho inicial de tudo, criando uma experiência ruim 
              onde o usuário precisa imediatamente reduzir o zoom para navegar normalmente. 
              A configuração padrão (width=device-width, initial-scale=1.0) é a mais adequada 
              para layouts responsivos modernos.
            </p>
          </div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>Configurações Testadas:</h3>
        <pre>
{`<!-- Configuração Ideal (atual) -->
<meta name="viewport" 
      content="width=device-width, initial-scale=1.0">

<!-- Teste 1: Sem meta viewport -->
<!-- Tag removida completamente -->

<!-- Teste 2: Initial-scale alterado -->
<meta name="viewport" 
      content="width=device-width, initial-scale=2.0">
<meta name="viewport" 
      content="width=device-width, initial-scale=0.5">

<!-- Teste 3: Largura fixa -->
<meta name="viewport" content="width=500">
<meta name="viewport" 
      content="width=device-width, initial-scale=2">`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise7;
