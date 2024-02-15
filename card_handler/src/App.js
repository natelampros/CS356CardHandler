import React, { useState } from 'react';
import quotes from './Quotes';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredQuotes = selectedCategory ? quotes.filter(quote => quote.category === selectedCategory) : quotes;

  return (
    <div>
      <nav className="navbar">
        <button className={`nav-button ${selectedCategory === '' ? 'active all' : ''}`} onClick={() => setSelectedCategory('')}>All</button>
        <button className={`nav-button ${selectedCategory === 'Movie' ? 'active movie' : ''}`} onClick={() => setSelectedCategory('Movie')}>Movie</button>
        <button className={`nav-button ${selectedCategory === 'Funny' ? 'active funny' : ''}`} onClick={() => setSelectedCategory('Funny')}>Funny</button>
        <button className={`nav-button ${selectedCategory === 'Inspirational' ? 'active inspirational' : ''}`} onClick={() => setSelectedCategory('Inspirational')}>Inspirational</button>
      </nav>
      
      <div className="container mt-4">
        <div className="row justify-content-center">
          {filteredQuotes.map((quote, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <Card
                text={quote.text}
                contributor={quote.contributor}
                category={quote.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
