import { useState } from 'react';
import { messages, reasons, dateIdeas } from '../data/content';
import './Generator.css';

function Generator({ onReady }) {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [indices, setIndices] = useState({
    message: 0,
    reason: 0,
    date: 0
  });

  const getNextItem = (category, array) => {
    const categoryKey = category === 'message' ? 'message' : category === 'reason' ? 'reason' : 'date';
    const currentIndex = indices[categoryKey];
    const item = array[currentIndex];
    
    // Move to next index, reset to 0 if we've reached the end
    setIndices(prev => ({
      ...prev,
      [categoryKey]: (currentIndex + 1) % array.length
    }));
    
    return item;
  };

  const handleGenerate = (category, array) => {
    setCurrentCategory(category);
    setCurrentItem(getNextItem(category, array));
  };

  return (
    <div className="generator-container">
      <h1 className="generator-title">💕 Life After You 💕</h1>
      <p className="generator-subtitle">Discover all the reasons why you're my everything 💖</p>
      
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
