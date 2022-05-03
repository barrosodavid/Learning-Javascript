import { useState } from 'react'

const Title = ({text}) => <><h1>{text}</h1></>;

const Button = ({handleClick, text}) => <><button onClick={handleClick}>{text}</button></>;

const MostVotedAnecdote = ({anecdotes, votes}) => {

  //Get maximum inside votes array
  let maximumValue = 0, maximumElemIndex = 0;
  votes.forEach((currentValue, index) => {
    if (currentValue > maximumValue){
      maximumValue = currentValue;
      maximumElemIndex = index;
    }
  });

  const mostVotedQuoteIndex = maximumElemIndex;

  if (maximumValue === 0) {
    return(<><p>There are no voted anecdotes still</p></>);
  }

  return (
    <div>
      <p>{anecdotes[mostVotedQuoteIndex]}</p>
      <p>With {votes[mostVotedQuoteIndex]} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const randomInteger = (min, max) => {
    //Returns a random random integer between min including and max excluding
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  //State Handling

  const [selected, setSelected] = useState(0)

  //Fill votes array with 0's
  const votesEmptyArray = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(votesEmptyArray);

  

  const handleRandomAnecdote = () => {
    let nextIndex;

    // Avoid getting the same anecdote as the current one when getting a random index
    do {
      nextIndex = randomInteger(0, anecdotes.length);
    } while (nextIndex===selected);
    
    setSelected(nextIndex);
  }

  const handleVote = () => {
    const copy = [...votes]
    // increment the votes in position selected by one
    copy[selected] += 1;
    setVotes(copy);
  }

  return (
    <div>
      <Title text="Anecdote of the day"></Title>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={handleRandomAnecdote} text="next anecdote"/>
      <Button handleClick={handleVote} text="vote" />
      <Title text="Most voted anecdote"></Title>
      <MostVotedAnecdote votes={votes} anecdotes={anecdotes}></MostVotedAnecdote>
      </div>
  );
} 

export default App;
