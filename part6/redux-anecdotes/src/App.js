import Notification from './components/Notification'
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anecdotes'
import Filter from './components/Filter'

const App = () => {

  return (
    <div>
      <Notification></Notification>
      <Filter></Filter>
      <Anecdotes></Anecdotes>
      <NewAnecdote></NewAnecdote>
    </div>
  )
}

export default App