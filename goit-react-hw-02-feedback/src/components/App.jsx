import React from 'react';
import FeedbackApp from './FeedbackApp';
import './styles.css';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackApp />
    </div>
  );
};

export default App;
