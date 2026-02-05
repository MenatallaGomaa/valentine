import { useState } from 'react';
import { messages, reasons, dateIdeas } from '../data/content';
import './Generator.css';

function Generator({ onReady }) {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const handleGenerate = (category, array) => {
    setCurrentCategory(category);
    setCurrentItem(getRandomItem(array));
  };

  return (
    <div className="generator-container">
      <h1 className="generator-title">💕 Valentine's Generator 💕</h1>
      <p className="generator-subtitle">Click a button to generate something special!</p>
      
      <div className="button-group">
        <button 
          className="category-btn"
          onClick={() => handleGenerate('message', messages)}
        >
          💌 Get a Message
        </button>
        <button 
          className="category-btn"
          onClick={() => handleGenerate('reason', reasons)}
        >
          ❤️ Get a Reason
        </button>
        <button 
          className="category-btn"
          onClick={() => handleGenerate('date', dateIdeas)}
        >
          🎉 Get a Date Idea
        </button>
      </div>

      {currentItem && (
        <div className="result-container">
          <div className="result-box">
            <p className="result-text">{currentItem}</p>
          </div>
        </div>
      )}

      <button 
        className="ready-btn"
        onClick={onReady}
      >
        Ready for the question? 💝
      </button>
    </div>
  );
}

export default Generator;
