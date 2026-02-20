import React, { useState } from 'react';
import styles from './Contato.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio
    console.log('Dados do formulário:', formData);
    setOpenSnackbar(true);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <section id="contato" className={styles.contato}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contato</h2>
        
        <div className={styles.content}>
          <div className={styles.infoSection}>
            <h3 className={styles.subtitle}>Entre em Contato</h3>
            <p className={styles.description}>
              Tem dúvidas, sugestões ou quer fazer parte da nossa campanha? 
              Entre em contato conosco! Estamos prontos para ouvir você e 
              construir juntos um futuro melhor para nossa cidade.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:contato@marcomadureira.com.br" className={styles.contactValue}>
                  contato@marcomadureira.com.br
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Telefone:</span>
                <a href="tel:+5511999999999" className={styles.contactValue}>
                  (11) 99999-9999
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Escritório:</span>
                <span className={styles.contactValue}>
                  Rua da Democracia, 123 - Centro
                </span>
              </div>
            </div>
          </div>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nome Completo"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              variant="outlined"
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 'var(--radius-md)',
                  '&:hover fieldset': {
                    borderColor: 'var(--primary-color)'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--primary-color)'
                  }
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'var(--primary-color)'
                }
              }}
            />
            
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 'var(--radius-md)',
                  '&:hover fieldset': {
                    borderColor: 'var(--primary-color)'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--primary-color)'
                  }
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'var(--primary-color)'
                }
              }}
            />
            
            <TextField
              fullWidth
              label="Telefone"
              name="telefone"
              type="tel"
              value={formData.telefone}
              onChange={handleChange}
              variant="outlined"
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 'var(--radius-md)',
                  '&:hover fieldset': {
                    borderColor: 'var(--primary-color)'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--primary-color)'
                  }
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'var(--primary-color)'
                }
              }}
            />
            
            <TextField
              fullWidth
              label="Mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              multiline
              rows={4}
              variant="outlined"
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 'var(--radius-md)',
                  '&:hover fieldset': {
                    borderColor: 'var(--primary-color)'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--primary-color)'
                  }
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'var(--primary-color)'
                }
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-color))',
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)'
                },
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                  '&:hover': {
                    transform: 'none'
                  }
                }
              }}
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success"
          sx={{ width: '100%' }}
        >
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contato;
