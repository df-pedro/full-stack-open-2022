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

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
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