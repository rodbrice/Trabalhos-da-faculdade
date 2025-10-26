import React from 'react';
import { Link } from 'react-router-dom';

const Exercise6 = () => {
  // Objeto para armazenar informações do livro
  const book = {
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    year: 2020,
    pages: 706,
    genre: "Programming",
    available: true,
    publisher: "O'Reilly Media"
  };

  // Array para listar capítulos
  const chapters = [
    "Introduction to JavaScript",
    "Lexical Structure",
    "Types, Values, and Variables",
    "Expressions and Operators",
    "Statements",
    "Objects",
    "Arrays",
    "Functions",
    "Classes",
    "Modules",
    "The JavaScript Standard Library",
    "Iterators and Generators",
    "Asynchronous JavaScript",
    "Metaprogramming",
    "JavaScript in Web Browsers"
  ];

  // Array de objetos relacionados (outros livros)
  const relatedBooks = [
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
    { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008 }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Objetos e Arrays</h1>
          <p>Exercício 6: Tipos referenciados - Informações de livro</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="book-info">
          <h2>📚 Informações do Livro (Objeto)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div>
              <p><strong>Título:</strong> {book.title}</p>
              <p><strong>Autor:</strong> {book.author}</p>
              <p><strong>Ano:</strong> {book.year}</p>
            </div>
            <div>
              <p><strong>Páginas:</strong> {book.pages}</p>
              <p><strong>Gênero:</strong> {book.genre}</p>
              <p><strong>Editora:</strong> {book.publisher}</p>
            </div>
          </div>
          
          <div style={{ 
            background: book.available ? '#d4edda' : '#f8d7da', 
            color: book.available ? '#155724' : '#721c24',
            padding: '0.75rem', 
            borderRadius: '5px', 
            marginTop: '1rem',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Status: {book.available ? "Disponível" : "Indisponível"}
          </div>
        </div>

        <div className="chapters-list">
          <h2>📑 Lista de Capítulos (Array)</h2>
          <p>Total de capítulos: <strong>{chapters.length}</strong></p>
          
          <ol>
            {chapters.map((chapter, index) => (
              <li key={index}>
                <strong>Capítulo {index + 1}:</strong> {chapter}
              </li>
            ))}
          </ol>
        </div>

        <div className="content-box">
          <h2>📚 Livros Relacionados (Array de Objetos)</h2>
          <div className="cards-container">
            {relatedBooks.map((relatedBook, index) => (
              <div key={index} className="product-card">
                <h3>{relatedBook.title}</h3>
                <p><strong>Autor:</strong> {relatedBook.author}</p>
                <p><strong>Ano:</strong> {relatedBook.year}</p>
                <div className="category">Programação</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise6;