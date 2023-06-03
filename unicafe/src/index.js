import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = (props) => (
  <>
    <td>{props.text}</td><td>{props.value}</td>
  </>
)

const Statistics = (props) => {
  let total = (props.good+props.neutral+props.bad)
  if (total == 0) {
    return(<div><p>No feedback given</p></div>)
  }else{ 
    return(
      <div>
        <table>
          <tbody>
            <tr><Statistic text="good" value={props.good} /></tr>
            <tr><Statistic text="neutral" value={props.neutral} /></tr>
            <tr><Statistic text="bad" value={props.bad} /></tr>
            <tr><Statistic text="total" value={(props.good + props.neutral + props.bad)} /></tr>
            <tr><Statistic text="average" value={((props.good*1) + (props.bad*(-1)))/(props.good + props.neutral + props.bad)} /></tr>
            <tr><Statistic text="positive" value={((props.good)/(props.good + props.neutral + props.bad))*100+"%"} /></tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

//positive {(good)/(good + neutral + bad)} 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
