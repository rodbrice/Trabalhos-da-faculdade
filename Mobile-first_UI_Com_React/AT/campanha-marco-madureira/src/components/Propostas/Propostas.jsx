import React from 'react';
import styles from './Propostas.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Propostas = () => {
  const mainPropostas = [
    {
      id: 1,
      titulo: 'Educação de Qualidade',
      descricao: 'Investimento em escolas públicas, capacitação de professores e tecnologia na educação para garantir um futuro melhor para nossas crianças.',
      imagem: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      titulo: 'Saúde para Todos',
      descricao: 'Ampliação das unidades de saúde, redução das filas de espera e atendimento humanizado para toda a população.',
      imagem: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      titulo: 'Mobilidade Urbana',
      descricao: 'Transporte público eficiente, ciclovias seguras e infraestrutura viária de qualidade para melhorar o deslocamento na cidade.',
      imagem: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      titulo: 'Geração de Empregos',
      descricao: 'Incentivos fiscais para empresas, apoio ao empreendedorismo local e programas de qualificação profissional.',
      imagem: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop'
    }
  ];

  const outrasPropostas = [
    'Programa de habitação popular com financiamento facilitado',
    'Revitalização de praças e áreas de lazer em todos os bairros',
    'Implementação de energia solar em prédios públicos',
    'Criação de centros de atendimento ao idoso',
    'Ampliação do programa de segurança comunitária'
  ];

  return (
    <section id="propostas" className={styles.propostas}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Propostas</h2>
        
        <div className={styles.cardsGrid}>
          {mainPropostas.map((proposta) => (
            <Card 
              key={proposta.id} 
              className={styles.card}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 'var(--shadow-xl)'
                },
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                  '&:hover': {
                    transform: 'none'
                  }
                }
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={proposta.imagem}
                alt={proposta.titulo}
                sx={{
                  objectFit: 'cover'
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography 
                  gutterBottom 
                  variant="h6" 
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'var(--primary-color)',
                    fontSize: { xs: '1.1rem', md: '1.25rem' }
                  }}
                >
                  {proposta.titulo}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7
                  }}
                >
                  {proposta.descricao}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={styles.outrasPropostas}>
          <h3 className={styles.outrasTitle}>Outras Propostas</h3>
          <List className={styles.lista}>
            {outrasPropostas.map((proposta, index) => (
              <ListItem 
                key={index} 
                className={styles.listaItem}
                sx={{
                  py: 1.5,
                  borderBottom: '1px solid var(--border-color)',
                  '&:last-child': {
                    borderBottom: 'none'
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckCircleOutlineIcon 
                    sx={{ 
                      color: 'var(--secondary-color)',
                      fontSize: '1.5rem'
                    }} 
                  />
                </ListItemIcon>
                <ListItemText 
                  primary={proposta}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                      fontSize: { xs: '0.95rem', md: '1rem' }
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </section>
  );
};

export default Propostas;
