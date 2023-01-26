import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  );
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const FeedbackButtons = ({ setGood, setNeutral, setBad }) => {
  return (
    <div>
      <Button onClick={setGood} text="good" />
      <Button onClick={setNeutral} text="neutral" />
      <Button onClick={setBad} text="bad" />
    </div>
  )
}

const StatisticLine = ({ text, stat }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{stat}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const totalRatings = (good, neutral, bad) => {
    return good + neutral + bad;
  }

  const averageScore = (good, neutral, bad) => {
    const WEIGHT_GOOD = 1;
    const WEIGHT_NEUTRAL = 0;
    const WEIGHT_BAD = -1;
    const total = totalRatings(good, neutral, bad);
    const average = (WEIGHT_GOOD * good + WEIGHT_NEUTRAL * neutral + WEIGHT_BAD * bad) / total;
    return average.toFixed(2);
  }

  const positiveRatio = (good, neutral, bad) => {
    const total = totalRatings(good, neutral, bad);
    return (good / total).toFixed(2);
  }

  if (good || neutral || bad) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" stat={good} />
          <StatisticLine text="neutral" stat={neutral} />
          <StatisticLine text="bad" stat={bad} />
          <StatisticLine text="all" stat={totalRatings(good, neutral, bad)} />
          <StatisticLine text="average" stat={averageScore(good, neutral, bad)} />
          <StatisticLine text="positive" stat={positiveRatio(good, neutral, bad)} />
        </tbody>
      </table>
    )
  }

  return (
    <p>No feedback given</p>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Header text="give feedback" />
      <FeedbackButtons
        setGood={handleGood}
        setNeutral={handleNeutral}
        setBad={handleBad}
      />
      <Header text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App