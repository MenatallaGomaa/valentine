import { useState } from 'react';
import Generator from './components/Generator';
import ValentineQuestion from './components/ValentineQuestion';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('generator');

  const handleReady = () => {
    setCurrentView('question');
  };

  const handleBackToGenerator = () => {
    setCurrentView('generator');
  };

  return (
    <div className="app">
      {currentView === 'generator' ? (
        <Generator onReady={handleReady} />
      ) : (
        <ValentineQuestion onBack={handleBackToGenerator} />
      )}
    </div>
  );
}

export default App;
