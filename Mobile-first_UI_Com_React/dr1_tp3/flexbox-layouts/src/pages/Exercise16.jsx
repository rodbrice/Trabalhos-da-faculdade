import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import './Exercise16.css';

function Exercise16() {
  const teamMembers = [
    { name: 'Brice Roduit', linkedin: 'https://linkedin.com/in/brice-roduit', avatar: 'BR' }
  ];

  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 16: Footer com Avatar e LinkedIn</h1>
        <p className="exercise-description">Footer detalhado com membros do grupo, avatar e link para LinkedIn.</p>
        <BackButton />
      </div>

      <div className="demo-area">
        <footer className="team-footer-ex16">
          <h3>Desenvolvido por:</h3>
          <div className="team-members-ex16">
            {teamMembers.map((member, index) => (
              <div key={index} className="member-card-ex16">
                <div className="avatar-ex16">{member.avatar}</div>
                <div className="member-info-ex16">
                  <h4>{member.name}</h4>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%230077b5' viewBox='0 0 24 24'%3E%3Cpath d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/%3E%3C/svg%3E" alt="LinkedIn" style={{ width: '20px', marginLeft: '0.5rem' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="copyright-ex16">&copy; 2025 - Projeto Acadêmico</p>
        </footer>
      </div>

      <div className="code-snippet">
        <h3>Footer.jsx com equipe:</h3>
        <pre>{`const Footer = () => {
  const team = [
    { name: 'João Silva', linkedin: '...', avatar: 'JS' },
    { name: 'Maria Santos', linkedin: '...', avatar: 'MS' }
  ];

  return (
    <footer className="team-footer">
      <h3>Desenvolvido por:</h3>
      {team.map(member => (
        <div className="member-card">
          <div className="avatar">{member.avatar}</div>
          <h4>{member.name}</h4>
          <a href={member.linkedin}>LinkedIn</a>
        </div>
      ))}
    </footer>
  );
};`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise16;
