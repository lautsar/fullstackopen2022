import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
    )
}

const Feedback = (props) => {
  return (
    <div>
      <p>
        {props.feedback} {props.count}
      </p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick(props.feedback + 1)}>
      {props.text}
    </button>
  )
}

const Result = (props) => {
  return (
    <div>{props.text} {props.counter}</div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="Give feedback" />

      <button onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
      
      <Header text="Statistics" />

      <Result text="Good" counter={good} />
      <Result text="Neutral" counter={neutral} />
      <Result text="Bad" counter={bad} />

    </div>
  )
}

export default App