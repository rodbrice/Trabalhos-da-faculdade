// Dados mockados de candidaturas
// Serão gerenciados com AsyncStorage

export const mockApplications = [
  {
    id: '1',
    company: 'Tech Solutions',
    position: 'Desenvolvedor React Native Sênior',
    location: 'São Paulo, SP (Remoto)',
    salary: 'R$ 12.000 - R$ 15.000',
    status: 'applied', // applied, interview, offer, rejected
    appliedDate: '2026-03-15',
    icon: '💼',
    description: 'Desenvolvimento de aplicativos mobile para clientes nacionais e internacionais.',
    requirements: ['React Native', 'TypeScript', 'Redux', '5+ anos exp'],
  },
  {
    id: '2',
    company: 'StartupXYZ',
    position: 'Tech Lead Mobile',
    location: 'São Paulo, SP (Híbrido)',
    salary: 'R$ 15.000 - R$ 18.000',
    status: 'interview',
    appliedDate: '2026-03-10',
    icon: '🚀',
    description: 'Liderança técnica do time mobile, arquitetura de aplicações escaláveis.',
    requirements: ['React Native', 'Liderança', 'AWS', '6+ anos exp'],
  },
  {
    id: '3',
    company: 'Digital Agency',
    position: 'Desenvolvedor Full Stack',
    location: 'Rio de Janeiro, RJ (Remoto)',
    salary: 'R$ 10.000 - R$ 13.000',
    status: 'applied',
    appliedDate: '2026-03-20',
    icon: '🎨',
    description: 'Desenvolvimento de websites e aplicativos para clientes diversos.',
    requirements: ['React', 'Node.js', 'MongoDB', '4+ anos exp'],
  },
  {
    id: '4',
    company: 'FinTech Brasil',
    position: 'Mobile Developer',
    location: 'São Paulo, SP (Presencial)',
    salary: 'R$ 11.000 - R$ 14.000',
    status: 'rejected',
    appliedDate: '2026-03-01',
    icon: '💰',
    description: 'Desenvolvimento de app financeiro com alta segurança.',
    requirements: ['React Native', 'Security', 'CI/CD', '5+ anos exp'],
  },
  {
    id: '5',
    company: 'E-commerce Corp',
    position: 'Frontend Developer',
    location: 'Remoto',
    salary: 'R$ 9.000 - R$ 12.000',
    status: 'offer',
    appliedDate: '2026-02-28',
    icon: '🛒',
    description: 'Desenvolvimento de plataforma e-commerce responsiva.',
    requirements: ['React', 'Next.js', 'TailwindCSS', '3+ anos exp'],
  },
  {
    id: '6',
    company: 'GameDev Studio',
    position: 'React Native Developer',
    location: 'Belo Horizonte, MG (Remoto)',
    salary: 'R$ 10.000 - R$ 13.000',
    status: 'applied',
    appliedDate: '2026-03-22',
    icon: '🎮',
    description: 'Desenvolvimento de apps mobile para games e comunidades.',
    requirements: ['React Native', 'Gaming', 'WebSockets', '3+ anos exp'],
  },
];

// Status possíveis e suas cores
export const statusConfig = {
  applied: {
    label: 'Candidatura Enviada',
    color: '#2196F3',
    icon: '📤',
  },
  interview: {
    label: 'Em Processo Seletivo',
    color: '#FF9800',
    icon: '💬',
  },
  offer: {
    label: 'Proposta Recebida',
    color: '#4CAF50',
    icon: '✅',
  },
  rejected: {
    label: 'Não Selecionado',
    color: '#f44336',
    icon: '❌',
  },
};

