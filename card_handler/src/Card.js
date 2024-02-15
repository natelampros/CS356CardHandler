import React from 'react';
import './Card.css'; // Make sure to include the CSS file

const getCategoryColor = (category) => {
  switch (category.toLowerCase()) {
    case 'movie':
      return 'category-movie';
    case 'funny':
      return 'category-funny';
    case 'inspirational':
      return 'category-inspirational';
    default:
      return 'category-default';
  }
};

const Card = ({ text, contributor, category }) => {
    const categoryClass = getCategoryColor(category);
    return (
        <div className="card-container">
        <div className="contributor-container">
          <span className="contributor">{contributor}</span>
        </div>
        <div className="card-text">“{text}”</div>
        <div className="card-footer">
          <span className={`card-category ${categoryClass}`}>{category}</span>
        </div>
      </div>
    );
};

export default Card;
