import { useState } from 'react'

/******************************************************************************
 *                          App Code Local Functions                          *
 ******************************************************************************/
const Heading = ({ text }) => <h1>{text}</h1>

const DisplayAnecdoteInfo = ({ anecdote, votes }) => (
  <div>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </div>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

/**
 * Get a random integer between a min and max value
 * @param {number} min Inclusive minimum for random value
 * @param {number} max Exclusive maximum for random value
 * @returns {number} Random integer within range
 * @source mdn Math/random docs
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min) + min);
}

/******************************************************************************
 *                               App Definition                               *
 ******************************************************************************/
const App = () => {
  // Anecdotes & anecdote state variables
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  // Anecdote function helpers
  const addVote = () => {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }
  const setRandomAnecdote = () => setSelected(getRandomInt(0, anecdotes.length));

  // Calculating index of highest voted anecdote
  // - Can speed up by writing function that only makes one pass of votes array
  const maxVotesIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <Heading text='Anecdote of the day' />
      <DisplayAnecdoteInfo anecdote={anecdotes[selected]}
                           votes={votes[selected]} />
      <Button handleClick={addVote} text='vote' />
      <Button handleClick={setRandomAnecdote} text='Next Anecdote' />

      <Heading text='Anecdote with most votes' />
      <DisplayAnecdoteInfo anecdote={anecdotes[maxVotesIndex]}
                           votes={votes[maxVotesIndex]} />
    </div>
  );
}

export default App;
