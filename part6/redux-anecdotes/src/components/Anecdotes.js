import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const Anecdote = ({ content, votes, onClick }) => {
    return (
        <div>
            <div>
                {content}
            </div>
            <div>
                has {votes}
                <button onClick={onClick}>vote</button>
            </div>
        </div>
    )
}

const Anecdotes = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(addVote(id))
    }

    //Returns sorted anecdote array by votes in descending order
    const sortedAnecdotes = () => [...anecdotes].sort((a, b) => b.votes - a.votes)


    return (<div>
        <h2>Anecdotes</h2>
        {sortedAnecdotes().map(anecdote =>
            <Anecdote key={anecdote.id}
                content={anecdote.content}
                votes={anecdote.votes}
                onClick={() => vote(anecdote.id)}
            />
        )}
    </div>)
}

export default Anecdotes