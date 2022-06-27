import Notification from './components/Notification'
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anecdotes'

const App = () => {

  return (
    <div>
      <Notification></Notification>
      <Anecdotes></Anecdotes>
      <NewAnecdote></NewAnecdote>
    </div>
  )
}

export default App