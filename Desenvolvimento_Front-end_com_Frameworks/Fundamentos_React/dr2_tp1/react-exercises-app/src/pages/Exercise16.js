import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Componente para exibir informações do usuário
const UserCard = ({ user, onEdit, showDetails = true, cardStyle = 'default' }) => {
  const getAvatarInitials = (name) => {
    const names = name.split(' ');
    const initials = names.map(n => n.charAt(0)).join('');
    return initials.substring(0, 2).toUpperCase();
  };

  const getStatusColor = (status) => {
    const colors = {
      'ativo': '#28a745',
      'inativo': '#6c757d', 
      'pendente': '#ffc107',
      'bloqueado': '#dc3545'
    };
    return colors[status.toLowerCase()] || '#6c757d';
  };

  const cardStyles = {
    default: {
      background: 'white',
      border: '1px solid #e0e0e0'
    },
    premium: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: '2px solid #5a6fd8'
    },
    compact: {
      background: '#f8f9fa',
      border: '1px solid #dee2e6',
      padding: '1rem'
    }
  };

  return (
    <div 
      className="product-card" 
      style={{ 
        ...cardStyles[cardStyle],
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <div style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold',
          background: '#007bff',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto'
        }}>
          {getAvatarInitials(user.name)}
        </div>
      </div>
      
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        {user.name}
      </h3>
      
      {showDetails && (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Idade:</strong> {user.age} anos</p>
            <p><strong>Cargo:</strong> {user.role}</p>
            <p><strong>Departamento:</strong> {user.department}</p>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              background: getStatusColor(user.status),
              color: 'white',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              display: 'inline-block',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}>
              {user.status}
            </div>
          </div>
          
          <div style={{ fontSize: '0.9rem', color: cardStyle === 'premium' ? 'rgba(255,255,255,0.8)' : '#666' }}>
            <p>Salário: R$ {user.salary?.toLocaleString('pt-BR') || 'Não informado'}</p>
            <p>Contratado: {user.hireDate}</p>
            <p>ID: {user.id}</p>
          </div>
        </>
      )}
      
      {onEdit && (
        <button
          onClick={() => onEdit(user)}
          style={{
            background: cardStyle === 'premium' ? 'rgba(255,255,255,0.2)' : '#007bff',
            color: cardStyle === 'premium' ? 'white' : 'white',
            border: cardStyle === 'premium' ? '1px solid rgba(255,255,255,0.3)' : 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '1rem',
            width: '100%'
          }}
        >
          Editar Usuário
        </button>
      )}
    </div>
  );
};



const Exercise16 = () => {
  // Estados para controlar a aplicação
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewMode, setViewMode] = useState('detailed');
  const [editingUser, setEditingUser] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  
  // Lista de usuários
  const [users, setUsers] = useState([
    {
      id: 'USR001',
      name: 'Ana Silva',
      email: 'ana.silva@empresa.com',
      age: 28,
      role: 'Desenvolvedora Senior',
      department: 'Tecnologia',
      status: 'ativo',
      salary: 8500,
      hireDate: '2022-03-15'
    },
    {
      id: 'USR002', 
      name: 'Carlos Santos',
      email: 'carlos.santos@empresa.com',
      age: 35,
      role: 'Gerente de Projetos',
      department: 'Tecnologia',
      status: 'ativo', 
      salary: 12000,
      hireDate: '2021-08-10'
    },
    {
      id: 'USR003',
      name: 'Maria Oliveira', 
      email: 'maria.oliveira@empresa.com',
      age: 31,
      role: 'Designer UX',
      department: 'Design',
      status: 'ativo',
      salary: 7000,
      hireDate: '2023-01-20'
    },
    {
      id: 'USR004',
      name: 'João Pereira',
      email: 'joao.pereira@empresa.com', 
      age: 29,
      role: 'Analista de Marketing',
      department: 'Marketing',
      status: 'pendente',
      salary: 6500,
      hireDate: '2023-11-05'
    },
    {
      id: 'USR005',
      name: 'Fernanda Costa',
      email: 'fernanda.costa@empresa.com',
      age: 26,
      role: 'Analista Financeiro',
      department: 'Financeiro', 
      status: 'ativo',
      salary: 5800,
      hireDate: '2023-06-12'
    },
    {
      id: 'USR006',
      name: 'Roberto Lima',
      email: 'roberto.lima@empresa.com',
      age: 42,
      role: 'Diretor de Vendas',
      department: 'Vendas',
      status: 'inativo',
      salary: 15000,
      hireDate: '2020-02-28'
    }
  ]);

  // Função para editar usuário
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditingUser({...user});
    setShowEditForm(true);
  };

  // Função para salvar as alterações
  const handleSaveUser = () => {
    if (!editingUser) return;
    
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === editingUser.id ? editingUser : user
      )
    );
    
    setShowEditForm(false);
    setEditingUser(null);
    setSelectedUser(editingUser);
  };

  // Função para cancelar a edição
  const handleCancelEdit = () => {
    setShowEditForm(false);
    setEditingUser(null);
  };

  // Função para atualizar campos do usuário sendo editado
  const handleInputChange = (field, value) => {
    setEditingUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Função para adicionar novo usuário
  const handleAddUser = () => {
    const newUser = {
      id: `USR${String(users.length + 1).padStart(3, '0')}`,
      name: 'Novo Usuário',
      email: 'novo@empresa.com',
      age: 25,
      role: 'Estagiário',
      department: 'Tecnologia',
      status: 'ativo',
      salary: 3000,
      hireDate: new Date().toISOString().split('T')[0]
    };
    
    setUsers(prev => [...prev, newUser]);
    handleEditUser(newUser);
  };

  // Configuração das props do card
  const getCardProps = (user) => {
    const baseProps = {
      user: user,
      onEdit: handleEditUser
    };
    
    switch(viewMode) {
      case 'compact':
        return {
          ...baseProps,
          showDetails: false,
          cardStyle: 'compact'
        };
      case 'premium':
        return {
          ...baseProps,
          showDetails: true,
          cardStyle: user.salary > 10000 ? 'premium' : 'default'
        };
      default:
        return {
          ...baseProps,
          showDetails: true,
          cardStyle: 'default'
        };
    }
  };

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Props em React</h1>
          <p>Exercício 16: Passagem de dados entre componentes com props</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="content-box">
          <h2>Sistema de Funcionários</h2>
          <p>
            Sistema para gerenciar informações dos funcionários da empresa.
            Permite visualizar, editar e adicionar novos funcionários.
          </p>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4>Modo de Visualização:</h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { mode: 'detailed', label: 'Detalhado' },
                { mode: 'compact', label: 'Compacto' }, 
                { mode: 'premium', label: 'Premium (salário > R$ 10k)' }
              ].map(({ mode, label }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  style={{
                    background: viewMode === mode ? '#007bff' : '#e9ecef',
                    color: viewMode === mode ? 'white' : '#333',
                    border: '1px solid #ccc',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <button
              onClick={handleAddUser}
              style={{
                background: '#28a745',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              + Adicionar Novo Usuário
            </button>
          </div>
        </div>

        {/* Formulário de edição */}
        {showEditForm && editingUser && (
          <div className="content-box" style={{ background: '#f8f9fa', border: '2px solid #007bff' }}>
            <h2>Editando Usuário</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nome:</label>
                <input
                  type="text"
                  value={editingUser.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email:</label>
                <input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Idade:</label>
                <input
                  type="number"
                  value={editingUser.age}
                  onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Cargo:</label>
                <input
                  type="text"
                  value={editingUser.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Departamento:</label>
                <select
                  value={editingUser.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                >
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Financeiro">Financeiro</option>
                  <option value="Vendas">Vendas</option>
                  <option value="Recursos Humanos">Recursos Humanos</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Status:</label>
                <select
                  value={editingUser.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                >
                  <option value="ativo">Ativo</option>
                  <option value="inativo">Inativo</option>
                  <option value="pendente">Pendente</option>
                  <option value="bloqueado">Bloqueado</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Salário (R$):</label>
                <input
                  type="number"
                  value={editingUser.salary}
                  onChange={(e) => handleInputChange('salary', parseFloat(e.target.value) || 0)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Data de Contratação:</label>
                <input
                  type="date"
                  value={editingUser.hireDate}
                  onChange={(e) => handleInputChange('hireDate', e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center' }}>
              <button
                onClick={handleSaveUser}
                style={{
                  background: '#28a745',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Salvar Alterações
              </button>
              
              <button
                onClick={handleCancelEdit}
                style={{
                  background: '#6c757d',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Lista de todos os funcionários */}
        <div className="content-box">
          <h2>Todos os Funcionários</h2>
          <div className="cards-container">
            {users.map(user => (
              <UserCard 
                key={user.id}
                {...getCardProps(user)}
              />
            ))}
          </div>
        </div>

        {selectedUser && (
          <div className="content-box">
            <h2>Informações do Usuário</h2>
            <div style={{ background: '#e3f2fd', padding: '1.5rem', borderRadius: '8px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                <p><strong>Nome:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Cargo:</strong> {selectedUser.role}</p>
                <p><strong>Departamento:</strong> {selectedUser.department}</p>
                <p><strong>Status:</strong> {selectedUser.status}</p>
                <p><strong>Salário:</strong> R$ {selectedUser.salary?.toLocaleString('pt-BR')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise16;