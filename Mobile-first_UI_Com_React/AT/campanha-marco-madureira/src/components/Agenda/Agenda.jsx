import React from 'react';
import styles from './Agenda.module.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';

const Agenda = () => {
  const eventos = [
    {
      id: 1,
      titulo: 'Comício na Praça Central',
      data: '15 de Janeiro, 2025',
      horario: '18:00',
      local: 'Praça da República, Centro',
      tipo: 'Comício'
    },
    {
      id: 2,
      titulo: 'Debate com Empresários',
      data: '18 de Janeiro, 2025',
      horario: '10:00',
      local: 'Associação Comercial',
      tipo: 'Debate'
    },
    {
      id: 3,
      titulo: 'Caminhada no Bairro Esperança',
      data: '20 de Janeiro, 2025',
      horario: '09:00',
      local: 'Rua das Flores, Bairro Esperança',
      tipo: 'Caminhada'
    },
    {
      id: 4,
      titulo: 'Reunião com Lideranças Comunitárias',
      data: '22 de Janeiro, 2025',
      horario: '14:00',
      local: 'Centro Comunitário Vila Nova',
      tipo: 'Reunião'
    },
    {
      id: 5,
      titulo: 'Carreata pelo Centro',
      data: '25 de Janeiro, 2025',
      horario: '16:00',
      local: 'Saída: Praça da Matriz',
      tipo: 'Carreata'
    },
    {
      id: 6,
      titulo: 'Encontro com Jovens',
      data: '28 de Janeiro, 2025',
      horario: '19:00',
      local: 'Universidade Municipal',
      tipo: 'Encontro'
    }
  ];

  const getChipColor = (tipo) => {
    const colors = {
      'Comício': 'primary',
      'Debate': 'secondary',
      'Caminhada': 'success',
      'Reunião': 'info',
      'Carreata': 'warning',
      'Encontro': 'default'
    };
    return colors[tipo] || 'default';
  };

  return (
    <section id="agenda" className={styles.agenda}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Agenda</h2>
        
        <div className={styles.eventosGrid}>
          {eventos.map((evento) => (
            <article key={evento.id} className={styles.eventoCard}>
              <div className={styles.eventoHeader}>
                <Chip 
                  label={evento.tipo} 
                  color={getChipColor(evento.tipo)}
                  size="small"
                  sx={{
                    fontWeight: 500,
                    fontSize: '0.75rem'
                  }}
                />
              </div>
              
              <h3 className={styles.eventoTitulo}>{evento.titulo}</h3>
              
              <div className={styles.eventoInfo}>
                <div className={styles.infoItem}>
                  <CalendarTodayIcon className={styles.icon} />
                  <span>{evento.data}</span>
                </div>
                
                <div className={styles.infoItem}>
                  <AccessTimeIcon className={styles.icon} />
                  <span>{evento.horario}</span>
                </div>
                
                <div className={styles.infoItem}>
                  <LocationOnIcon className={styles.icon} />
                  <span>{evento.local}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
