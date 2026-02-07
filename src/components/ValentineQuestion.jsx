import { useState, useRef } from 'react';
import './ValentineQuestion.css';

function ValentineQuestion() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef(null);

  const moveNoButton = () => {
    if (yesClicked) return; // Don't move if yes is already clicked
    
    const button = noButtonRef.current;
    if (!button) return;

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonRect = button.getBoundingClientRect();
    
    // Calculate safe movement area (keep button fully visible with padding)
    const padding = 20;
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;
    
    // Calculate how far we can move in each direction
    const maxMoveRight = viewportWidth - buttonRect.right - padding;
    const maxMoveLeft = buttonRect.left - padding;
    const maxMoveDown = viewportHeight - buttonRect.bottom - padding;
    const maxMoveUp = buttonRect.top - padding;
    
    // Generate random movement (can be positive or negative)
    // Use larger movements for more dramatic effect
    const moveRangeX = Math.min(maxMoveRight, maxMoveLeft) * 2;
    const moveRangeY = Math.min(maxMoveDown, maxMoveUp) * 2;
    
    const randomX = (Math.random() - 0.5) * moveRangeX;
    const randomY = (Math.random() - 0.5) * moveRangeY;
    
    // Clamp to safe bounds
    const clampedX = Math.max(-maxMoveLeft, Math.min(maxMoveRight, randomX));
    const clampedY = Math.max(-maxMoveUp, Math.min(maxMoveDown, randomY));
    
    setNoPosition({ x: clampedX, y: clampedY });
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    moveNoButton();
  };

  const handleNoTouchStart = (e) => {
    e.preventDefault();
    moveNoButton();
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  if (yesClicked) {
    return (
      <div className="celebration-container">
        <div className="celebration-content">
          <h1 className="celebration-title">🎉 YAY! 🎉</h1>
          <p className="celebration-text">I'm so happy you said yes!</p>
          <p className="celebration-text">Happy Valentine's Day, my love! 💕</p>
          <div className="hearts">💖💕💗💓💝💖💕💗</div>
        </div>
      </div>
    );
  }

  return (
    <div className="question-container">
      <h1 className="question-title">Will you be my Valentine? 💕</h1>
      <div className="button-wrapper">
        <button 
          className="yes-btn"
          onClick={handleYesClick}
        >
          Yes! 💖
        </button>
        <button
          ref={noButtonRef}
          className="no-btn"
          onMouseEnter={moveNoButton}
          onClick={handleNoClick}
          onTouchStart={handleNoTouchStart}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            transition: 'transform 0.3s ease'
          }}
        >
          No 😢
        </button>
      </div>
    </div>
  );
}

export default ValentineQuestion;
