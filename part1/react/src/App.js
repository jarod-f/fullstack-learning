import { useState } from "react";


/******************************************************************************
 *                          App Code Local Functions                          *
 ******************************************************************************/
const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticRow = ({ statistic, value }) => (
  <tr>
    <td>{statistic}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const totalClicks = good + neutral + bad;

  // Handle case where no clicks provided
  if (totalClicks === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <StatisticRow statistic='Good' value={good} />
        <StatisticRow statistic='Neutral' value={neutral} />
        <StatisticRow statistic='Bad' value={bad} />
        <StatisticRow statistic='All' value={totalClicks} />
        <StatisticRow statistic='Average' value={(good - bad) / totalClicks} />
        <StatisticRow statistic='Positive'
                      value={`${good / totalClicks * 100} %`} />
      </tbody>
    </table>
  );
}

/******************************************************************************
 *                               App Definition                               *
 ******************************************************************************/
const App = () => {
  // Save the clicks of each button to their own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text='Provide Feedback' />
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />

      <Header text='User Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
