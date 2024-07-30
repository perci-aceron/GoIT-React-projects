import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const FeedbackApp = () => {
  const [state, setState] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  const handleFeedback = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const countTotalFeedback = () => state.Good + state.Neutral + state.Bad;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section>
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            Good={state.Good}
            Neutral={state.Neutral}
            Bad={state.Bad}
          />
        )}
      </Section>
    </div>
  );
};

export default FeedbackApp;
