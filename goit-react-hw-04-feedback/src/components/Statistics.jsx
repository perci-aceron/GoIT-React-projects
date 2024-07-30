const Statistics = ({ Good, Neutral, Bad }) => {
  const countTotalFeedback = () => Good + Neutral + Bad;
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : (Good / total) * 100;
  };

  return (
    <div>
      <h2>Statistics</h2>
      {countTotalFeedback() === 0 ? (
        <p>No feedback given yet</p>
      ) : (
        <div>
          <p>Good: {Good}</p>
          <p>Neutral: {Neutral}</p>
          <p>Bad: {Bad}</p>
          <p>Total: {countTotalFeedback()}</p>
          <p>
            Positive Feedback: {countPositiveFeedbackPercentage().toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
};

export default Statistics;
