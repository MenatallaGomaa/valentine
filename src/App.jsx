import { useState } from 'react';
import Generator from './components/Generator';
import ValentineQuestion from './components/ValentineQuestion';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('generator');

  const handleReady = () => {
    setCurrentView('question');
  };

  return (
    <div className="app">
      {currentView === 'generator' ? (
        <Generator onReady={handleReady} />
      ) : (
        <ValentineQuestion />
      )}
    </div>
  );
}

export default App;
