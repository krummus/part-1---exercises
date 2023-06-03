import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const UpVote = (votes, selected) => {
  let newArr = [...votes]
  newArr[selected] += 1
  return newArr
}

const DisplayAnecdotes = (props) => (
  <>
    {props.anecdote}<br />
    has {props.voted} votes
  </>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        <DisplayAnecdotes anecdote={props.anecdotes[selected]} voted={votes[selected]} />
        <Button handleClick={() => setVotes(() => UpVote(votes, selected))} text="vote"/>
        <Button handleClick={() => setSelected(Math.floor(Math.random()*6))} text="next anecdote" />
      </p>
      <h1>Anecdote with most votes</h1>
      <p>
        <DisplayAnecdotes anecdote={props.anecdotes[votes.indexOf(Math.max(...votes))]} voted={votes[votes.indexOf(Math.max(...votes))]} />
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

//let votes = Array(anecdotes.length).fill(0)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

