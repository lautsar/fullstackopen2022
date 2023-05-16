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

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad > 0) {
    return (
      <div>
        <Result text="Good" counter={props.good} />
        <Result text="Neutral" counter={props.neutral} />
        <Result text="Bad" counter={props.bad} />
        <Result text="All" counter={props.good+props.neutral+props.bad} />
        <Result text="Average" counter={(props.good*1+props.neutral+props.bad*(-1))/
        (props.good+props.neutral+props.bad)} />
        <Result text="Positive" counter={props.good/(props.good+props.neutral+props.bad)*100}/>
      </div>
    )
  } else {
    return (
      <div>
        <p>No feedback</p>
      </div>
    )
  } 
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

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App