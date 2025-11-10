import React from 'react';
import { Link } from 'react-router-dom';

const Exercise2 = () => {
  const reactHistory = [
    {
      year: "2011",
      title: "Nascimento do React",
      description: "Jordan Walke, engenheiro do Facebook, cria o primeiro protótipo do React para resolver problemas de performance em aplicações web complexas."
    },
    {
      year: "2013",
      title: "Open Source",
      description: "React é lançado como projeto open source durante a JSConf US. Inicialmente recebido com ceticismo pela comunidade devido ao JSX."
    },
    {
      year: "2014",
      title: "React Developer Tools",
      description: "Lançamento das ferramentas de desenvolvimento do React para Chrome e Firefox, facilitando o debugging de aplicações React."
    },
    {
      year: "2015",
      title: "React Native",
      description: "Facebook lança o React Native, permitindo o desenvolvimento de aplicações móveis nativas usando React."
    },
    {
      year: "2016",
      title: "React 15",
      description: "Melhoria significativa na performance e introdução do conceito de componentes funcionais com melhor suporte."
    },
    {
      year: "2017",
      title: "React 16 (Fiber)",
      description: "Lançamento da arquitetura Fiber, reescrevendo completamente o algoritmo de reconciliação do React para melhor performance."
    },
    {
      year: "2018",
      title: "React Hooks",
      description: "Introdução dos Hooks no React 16.8, revolucionando a forma como componentes funcionais gerenciam estado e efeitos colaterais."
    },
    {
      year: "2020",
      title: "Concurrent Mode",
      description: "Recursos experimentais para renderização concorrente, permitindo que o React pause e retome o trabalho de renderização."
    },
    {
      year: "2022",
      title: "React 18",
      description: "Lançamento oficial do React 18 com Concurrent Features, Automatic Batching e novos hooks como useId e useDeferredValue."
    },
    {
      year: "2023-2024",
      title: "Server Components",
      description: "Evolução contínua com React Server Components e melhorias no ecossistema, focando em performance e experiência do desenvolvedor."
    }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Histórico do ReactJs</h1>
          <p>Exercício 2: Linha do tempo dos marcos importantes do React</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="content-box">
          <h2>A Evolução do React</h2>
          <p>
            Desde seu lançamento em 2013, o React tem evoluído constantemente, 
            introduzindo conceitos inovadores que moldaram o desenvolvimento web moderno. 
            Aqui está uma linha do tempo dos momentos mais importantes da história do React.
          </p>
        </div>

        <div className="content-box">
          <h2>Linha do Tempo</h2>
          <div className="timeline">
            {reactHistory.map((item, index) => (
              <div key={index} className="timeline-item">
                <h3>{item.year} - {item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="content-box">
          <h2>Impacto na Comunidade</h2>
          <p>
            O React não apenas mudou a forma como desenvolvemos interfaces de usuário, 
            mas também influenciou outras bibliotecas e frameworks. Conceitos como 
            componentes, virtual DOM e programação declarativa se tornaram padrões 
            na indústria.
          </p>
          <p>
            Atualmente, o React é mantido pelo time do Meta (Facebook) e por uma 
            comunidade ativa de desenvolvedores ao redor do mundo, continuando a 
            evoluir para atender às necessidades do desenvolvimento web moderno.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exercise2;