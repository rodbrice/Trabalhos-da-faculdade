import React from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task11() {
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      caption: 'Montanhas majestosas'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
      caption: 'Floresta encantada'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      caption: 'Campo verdejante'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&h=400&fit=crop',
      caption: 'Lago tranquilo'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
      caption: 'Praia paradisíaca'
    }
  ];

  return (
    <div className="task-container">
      <BackButton />
      <div>
        <h2 className="rn-text" style={{ 
          color: 'white', 
          padding: '20px',
          fontSize: '1.8rem', 
          textAlign: 'center',
          backgroundColor: 'darkslategray'
        }}>
          📸 Galeria de Imagens
        </h2>
        <div className="horizontal-scroll">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img
                className="gallery-image"
                src={image.url}
                alt={image.caption}
              />
              <p className="rn-text" style={{ 
                color: 'white', 
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Task11;

